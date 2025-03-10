import { createContext, useEffect, useReducer } from "react";

import PropTypes from "prop-types";
import {AUTH_REFRESH_TOKEN_KEY, AUTH_TOKEN_KEY, userMenus} from "@/utils/constants";
import {useRouter} from "next/router";
import {authApi} from "@/services/auth-apis";



let ActionType;
(function (ActionType) {
    ActionType["INITIALIZE"] = "INITIALIZE";
    ActionType["GET_MENUS"] = "GET_MENUS";
    ActionType["LOGIN"] = "LOGIN";
    ActionType["LOGOUT"] = "LOGOUT";
})(ActionType || (ActionType = {}));

const initialState = {
    isAuthenticated: false,
    isInitialized: false,
    isFetchingMenus: true,
    user: null,
    userMenus: [],
};

const handlers = {
    INITIALIZE: (state, action) => {
        const {isAuthenticated, user} = action.payload;

        return {
            ...state,
            isAuthenticated,
            isInitialized: true,
            user,
        };
    },
    LOGIN: (state, action) => {
        const {user} = action.payload;

        return {
            ...state,
            isAuthenticated: true,
            user,
        };
    },
    LOGOUT: (state) => ({
        ...state,
        isAuthenticated: false,
        user: null,
    }),
    GET_MENUS: (state, action) => {
        const {isFetchingMenus, userMenus} = action.payload;

        return {
            ...state,
            isFetchingMenus,
            userMenus
        };
    }
};

const reducer = (state, action) =>
    handlers[action.type] ? handlers[action.type](state, action) : state;

export const AuthContext = createContext({
    ...initialState,
    login: () => Promise.resolve(),
    refreshToken: () => Promise.resolve(),
    logout: () => Promise.resolve(),
    fetchUserMenus: () => Promise.resolve()
});

export const AuthProvider = (props) => {
    const {children} = props;
    const [state, dispatch] = useReducer(reducer, initialState);
    const router = useRouter();

    useEffect(() => {
        const initialize = async () => {

            try {
                const accessToken = globalThis.localStorage.getItem(AUTH_TOKEN_KEY)
                const refreshToken = globalThis.localStorage.getItem(AUTH_REFRESH_TOKEN_KEY)

                if (accessToken) {
                    const decodedToken = await authApi.decodeToken(accessToken);
                    const user = {
                        ...decodedToken,
                        accessToken,
                        refreshToken,
                    }
                    dispatch({
                        type: ActionType.INITIALIZE,
                        payload: {
                            isAuthenticated: true,
                            user,
                        },
                    });
                    console.log('userin context', user)
                    await fetchUserMenus(user?.nameid);
                } else {
                    dispatch({
                        type: ActionType.INITIALIZE,
                        payload: {
                            isAuthenticated: false,
                            user: null,
                        },
                    });
                }
            } catch (err) {
                console.error(err);
                dispatch({
                    type: ActionType.INITIALIZE,
                    payload: {
                        isAuthenticated: false,
                        user: null,
                    },
                });
            }
        };

        initialize();
    }, []);

    const login = async (userDetails) => {
        const decodedToken = await authApi.decodeToken(userDetails.token);
        const user = {
            ...decodedToken,
            accessToken: userDetails?.token,
            refreshToken: userDetails?.refreshToken,
        }

        localStorage.setItem(AUTH_TOKEN_KEY, userDetails.token);
        localStorage.setItem(AUTH_REFRESH_TOKEN_KEY, userDetails.refreshToken);

        dispatch({
            type: ActionType.LOGIN,
            payload: {
                user,
            },
        });
        await fetchUserMenus(user?.nameid); // Ensure nameid is present
    };


    const fetchUserMenus = async (userId) => {
        dispatch({
            type: ActionType.GET_MENUS,
            payload: {
                userMenus: [],
                isFetchingMenus: true,
            },
        });
        try {
            const res = await authApi.fetchUserMenus(userId);
            dispatch({
                type: ActionType.GET_MENUS,
                payload: {
                    userMenus: res,
                    isFetchingMenus: false,
                },
            });
        } catch (e) {
            dispatch({
                type: ActionType.GET_MENUS,
                payload: {
                    userMenus: userMenus,
                    isFetchingMenus: false,
                },
            });
        }
    };


    const refreshToken = async (newToken, newRefreshToken) => {
        const decodedToken = await authApi.decodeToken(newToken);
        const user = {
            ...decodedToken,
            accessToken: newToken,
            refreshToken: newRefreshToken,
        }
        localStorage.setItem(AUTH_TOKEN_KEY, newToken);
        localStorage.setItem(AUTH_REFRESH_TOKEN_KEY, newRefreshToken);
        dispatch({
            type: ActionType.LOGIN,
            payload: {
                user,
            },
        });
    }

    const logout = async () => {
        localStorage.removeItem(AUTH_TOKEN_KEY);
        localStorage.removeItem(AUTH_REFRESH_TOKEN_KEY);
        await dispatch({ type: ActionType.LOGOUT });
        //window.location.href = '/';
        router
            .push({
                pathname: "/",
                query: { returnUrl: router.asPath },
            })
            .catch(console.error);
    };


    return (
        <AuthContext.Provider
            value={{
                ...state,
                login,
                logout,
                refreshToken,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const AuthConsumer = AuthContext.Consumer;
