import { Box, Typography } from "@mui/material";
import SectionStarter from "./SectionStarter.tsx";
import { StyledDivider } from "../StyledComponents";

function Applications() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        mt: 10,
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          mb: 3,
        }}
      >
        <SectionStarter />
        <Box
          sx={{
            width: "80%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="sectionHeader" sx={{ mb: 3 }}>
            APPLICATIONS
          </Typography>
          <Typography variant="sectionP">Blah blah blah yap yap yap</Typography>
        </Box>
      </Box>
      <StyledDivider />
    </Box>
  );
}

export default Applications;
