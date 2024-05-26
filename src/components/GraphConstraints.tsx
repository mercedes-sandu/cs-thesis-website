import { Box, Typography, useTheme } from "@mui/material";
import SectionStarter from "./SectionStarter";
import { StyledDivider } from "../StyledComponents";
import CodeSnippet from "./CodeSnippet";
import { graphClass } from "./codeSnippets";

function GraphConstraints() {
  const theme = useTheme();

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
            GRAPH CONSTRAINTS
          </Typography>
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            Blah blah blah yap yap yap
          </Typography>
          <CodeSnippet fileName="Graph.cs" codeSnippet={graphClass} />
        </Box>
      </Box>
      <StyledDivider />
    </Box>
  );
}

export default GraphConstraints;
