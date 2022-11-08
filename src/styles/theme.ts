import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    gray: {
      950: "#09090A",
      900: "#121214",
      800: "#202024",
      600: "#323238",
      500: "#666666",
      400: "#b2b2b2",
      300: "#8D8D99",
      200: "#C4C4CC",
      100: "#EBEBEB",
    },
    green: {
      500: "#1DB863",
    },
    purple: {
      500: "#8257E5",
    },
    red: {
      500: "#DB4437",
    },
    white: "#FFFFFF",
  },
  fonts: {
    heading: "Inter_700Bold",
    body: "Inter_400Regular",
    medium: "Inter_500Medium",
  },
});
