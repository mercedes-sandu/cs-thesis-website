import { Box, Typography } from "@mui/material";
import SectionStarter from "./SectionStarter.tsx";
import { StyledDivider } from "../StyledComponents";

function SATSolvers() {
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
            SAT SOLVERS
          </Typography>
          <Typography variant="sectionSubheader" sx={{ mb: 3 }}>
            What is a SAT Solver?
          </Typography>
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            Blah blah blah yap yap yap
          </Typography>
          <Typography variant="sectionSubheader" sx={{ mb: 3 }}>
            The WalkSAT Algorithm
          </Typography>
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            Blah blah blah yap yap yap
          </Typography>
          <Typography variant="sectionSubheader" sx={{ mb: 3 }}>
            Strengths and Limitations
          </Typography>
          <Typography variant="sectionP">
            Blah blah blah yap yap yap
          </Typography>
        </Box>
      </Box>
      <StyledDivider />
    </Box>
  );
}

export default SATSolvers;
