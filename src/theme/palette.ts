import type { PaletteMode } from "@mui/material";

const PRIMARY = {
  light: "#e692ffff",
  main: "#141414",
  dark: "#360258ff",
};
const GREY = {
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#65507eff",
  800: "#482655ff",
  900: "#664075ff",
};

const COMMON = {
  common: { black: "#000", white: "#fff" },
  primary: { ...PRIMARY, contrastText: "#fff" },
  grey: GREY,
  action: {
    active: GREY[500],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

const palette = {
  ...COMMON,
  text: { primary: "#fff", secondary: GREY[500], disabled: GREY[600] },
  background: { default: PRIMARY.main, paper: PRIMARY.main },
  mode: "dark" as PaletteMode,
};

export default palette;
