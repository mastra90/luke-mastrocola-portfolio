import { useMediaQuery } from "@mui/material";

export const useResponsive = () => {
  const isMobileHeight = useMediaQuery("(max-height: 480px)");
  const isMobileWidth = useMediaQuery("(max-width: 720px)");
  return isMobileHeight || isMobileWidth;
};
