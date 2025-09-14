import { ChevronLeft } from "@mui/icons-material";
import { Button, useTheme } from "@mui/material";
import { useResponsive } from "../hooks/useResponsive";
import { FlexBox } from "../helpers/Wrappers";

const LegacySite = ({ toNewSite }: { toNewSite: () => void }) => {
  const theme = useTheme();
  const isMobile = useResponsive();
  const legacy = theme.palette.legacy;

  return (
    <FlexBox sx={{ p: 2, height: "100vh", bgcolor: legacy.blue }}>
      <FlexBox sx={{ height: "100vh", borderRadius: 2 }}>
        <Button
          sx={{
            display: "flex",
            width: "fit-content",
            gap: 1,
            pl: 1,
            color: legacy.blue,
            bgcolor: legacy.white,
            border: 2,
            borderColor: legacy.white,
            ...(!isMobile && {
              "&:hover": {
                bgcolor: legacy.blue,
                borderColor: legacy.white,
                color: legacy.white,
                "& .back-icon": { color: legacy.white },
              },
            }),
          }}
          onClick={toNewSite}
          variant="outlined"
        >
          <ChevronLeft
            className="back-icon"
            sx={{
              fontSize: 24,
              color: legacy.blue,
              ...(!isMobile && {
                "&:hover": {
                  bgcolor: legacy.blue,
                  borderColor: legacy.green,
                  color: legacy.white,
                },
              }),
            }}
          />
          Back to site
        </Button>
        <iframe
          title="Legacy Portfolio Site"
          src="/legacy/index.html"
          style={{ height: "100%", border: "none", borderRadius: 8 }}
        />
      </FlexBox>
    </FlexBox>
  );
};

export default LegacySite;
