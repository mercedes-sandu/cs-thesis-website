import { Box, Typography } from "@mui/material";

function SectionStarter() {
  return (
    <Box
      sx={{
        width: "10%",
        height: "100%",
        display: "flex",
      }}
    >
      <Typography variant="sectionHeader">{"//"}</Typography>
    </Box>
  );
}

export default SectionStarter;
