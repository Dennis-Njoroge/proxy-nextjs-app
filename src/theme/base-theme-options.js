import {poppins} from "@/utils/font";
export const baseThemeOptions = {
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 1000,
            lg: 1200,
            xl: 1920,
        },
    },
    components: {
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    fontSize: 14,
                    fontWeight: 600,
                },
                // shrink: {
                //     transform: 'translate(14px, -8px) scale(1) !important',
                // },
                // outlined: {
                //     transform: 'translate(14px, 16px) scale(1)',
                // },
            },
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    fontSize: 14,
                    fontWeight: 600,
                    letterSpacing: 0,
                },
            },
        },
        MuiStack: {
            defaultProps: {
                useFlexGap: true,
            },
        },
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
            styleOverrides: {
                root: {
                    textTransform: "none",
                },
                sizeSmall: {
                    padding: "6px 16px",
                },
                sizeMedium: {
                    padding: "8px 20px",
                },
                sizeLarge: {
                    padding: "11px 24px",
                },
                textSizeSmall: {
                    padding: "7px 12px",
                },
                textSizeMedium: {
                    padding: "9px 16px",
                },
                textSizeLarge: {
                    padding: "12px 16px",
                },
            },
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
        },
        MuiCardActions: {
            styleOverrides: {
                root: {
                    padding: "16px 24px",
                },
            },
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: "24px 14px",
                    "&:last-child": {
                        paddingBottom: "24px",
                    },
                },
            },
        },
        MuiCardHeader: {
            defaultProps: {
                titleTypographyProps: {
                    variant: "h6",
                },
                subheaderTypographyProps: {
                    variant: "body2",
                },
            },
            styleOverrides: {
                root: {
                    padding: "32px 24px",
                },
            },
        },
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backdropFilter: 'blur(4px)', // Adjust the blur intensity as needed
                },
            },
        },
        MuiCheckbox: {
            defaultProps: {
                color: "primary",
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    fontWeight: 400,
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: {
                "*": {
                    boxSizing: "border-box",
                },
                html: {
                    MozOsxFontSmoothing: "grayscale",
                    WebkitFontSmoothing: "antialiased",
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100%",
                    width: "100%",
                },
                body: {
                    display: "flex",
                    flex: "1 1 auto",
                    flexDirection: "column",
                    minHeight: "100%",
                    width: "100%",
                },
                "material-icons":{
                  fontSize: "inherit"
                },
                "#__next": {
                    display: "flex",
                    flex: "1 1 auto",
                    flexDirection: "column",
                    height: "100%",
                    width: "100%",
                },
                "#nprogress": {
                    pointerEvents: "none",
                },
                "#nprogress .bar": {
                    backgroundColor: "#5048E5",
                    height: 3,
                    left: 0,
                    position: "fixed",
                    top: 0,
                    width: "100%",
                    zIndex: 2000,
                },
            },
        },
        MuiDrawer: {},
        MuiIconButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: 8,
                },
                sizeSmall: {
                    padding: 4,
                },
            },
        },
        MuiLinearProgress: {
            styleOverrides: {
                root: {
                    borderRadius: 3,
                    overflow: "hidden",
                },
            },
        },
        MuiLink: {
            defaultProps: {
                underline: "hover",
            },
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    marginRight: "16px",
                    "&.MuiListItemIcon-root": {
                        minWidth: "unset",
                    },
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                input: {
                    fontWeight: 500,
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: "none",
                },
            },
        },
        MuiPopover: {
            defaultProps: {
                elevation: 16,
            },
        },
        MuiRadio: {
            defaultProps: {
                color: "primary",
            },
        },
        MuiSwitch: {
            defaultProps: {
                color: "primary",
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    fontSize: 16,
                    fontWeight: 'bold',
                    lineHeight: 1.71,
                    minWidth: "auto",
                    paddingLeft: 0,
                    paddingRight: 0,
                    textTransform: "none",
                    "& + &": {
                        marginLeft: 24,
                    },
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    padding: "15px 16px",
                },
            },
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    borderBottom: "none",
                    "& .MuiTableCell-root": {
                        borderBottom: "none",
                        fontSize: "12px",
                        fontWeight: 400,
                        lineHeight: 1,
                        letterSpacing: 0.5,
                        //textTransform: "uppercase",
                    },
                    "& .MuiTableCell-paddingCheckbox": {
                        paddingTop: 4,
                        paddingBottom: 4,
                    },
                },
            },
        },
    },
    direction: "ltr",
    shape: {
        borderRadius: 8,
    },
    typography: {
        button: {
            fontWeight: 400,
        },
        fontFamily: poppins.style.fontFamily,
        body1: {
            fontSize: "1rem",
            fontWeight: 400,
            lineHeight: 1.5,
        },
        body2: {
            fontSize: "0.8rem",
            fontWeight: 300,
            lineHeight: 1.57,
        },
        subtitle1: {
            fontSize: "0.9rem",
            fontWeight: 400,
            lineHeight: 1.5,
        },
        subtitle2: {
            fontSize: "0.8rem",
            fontWeight: 400,
            lineHeight: 1.4,
        },
        overline: {
            fontSize: "0.875rem",
            fontWeight: 600,
            letterSpacing: "0.5px",
            lineHeight: 2.5,
            textTransform: "uppercase",
        },
        caption: {
            fontSize: "0.75rem",
            fontWeight: 300,
            lineHeight: 1.66,
        },
        h1: {
            fontWeight: 600,
            fontSize: "3.5rem",
            lineHeight: 1.375,
        },
        h2: {
            fontWeight: 600,
            fontSize: "3rem",
            lineHeight: 1.375,
        },
        h3: {
            fontWeight: 600,
            fontSize: "2.25rem",
            lineHeight: 1.375,
        },
        h4: {
            fontWeight: 600,
            fontSize: "2rem",
            lineHeight: 1.375,
        },
        h5: {
            fontWeight: 500,
            fontSize: "1.5rem",
            lineHeight: 1.375,
        },
        h6: {
            fontWeight: 500,
            fontSize: "1.125rem",
            lineHeight: 1.375,
        },
    },
    zIndex: {
        appBar: 1200,
        drawer: 1100,
    },
};