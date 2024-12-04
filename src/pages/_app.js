import {useMounted} from "@/hooks/use-mounted";
import {useEffect, useState} from "react";
import {Provider} from "react-redux";
import {SettingsConsumer, SettingsProvider} from "@/context/settings-context";
import {AuthProvider} from "@/context/auth-context";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {CacheProvider} from "@emotion/react";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {createEmotionCache} from "@/utils/create-emotion-cache";
import {createTheme} from "@/theme";
import {ToastContainer} from "react-toastify";
import {store} from "@/redux";

export default function App({ Component, pageProps }) {
  const isMounted = useMounted();
  const getLayout = Component.getLayout ?? ((page) => page);
  const [isLoading, setIsLoading] = useState(true);
  const nonce = process.env.NEXT_PUBLIC_NOUNCE;
  const clientSideEmotionCache = createEmotionCache(nonce);


  useEffect(() => {
    if (isMounted()){
      setIsLoading(false);
    }
  },[isMounted]);

  return   <Provider store={store} >
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <CacheProvider value={clientSideEmotionCache}>
        <SettingsProvider>
          <SettingsConsumer>
            {({ settings }) => (
                <AuthProvider>
                  <ThemeProvider
                      theme={createTheme({
                        direction: settings.direction,
                        responsiveFontSizes: settings.responsiveFontSizes,
                        mode: settings.theme,
                      })}
                  >
                    <CssBaseline />
                    <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        //theme="colored"
                    />
                    { !isLoading && getLayout(<Component {...pageProps} />)}
                  </ThemeProvider>
                </AuthProvider>
            )
            }
          </SettingsConsumer>
        </SettingsProvider>
      </CacheProvider>
    </LocalizationProvider>
  </Provider>;
}
