import { Box, Typography, useTheme } from "@mui/material";
import SectionStarter from "./SectionStarter";
import { ItalicText, StyledDivider } from "../StyledComponents";
import CodeSnippet from "./CodeSnippet";
import CollapsibleComponent from "./CollapsibleComponent";
import { problemDeclaration, graphClass } from "./codeSnippets";

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
          <Typography variant="sectionSubheader" sx={{ mb: 3 }}>
            How a <ItalicText>CatSAT</ItalicText> Graph Problem is Initialized
          </Typography>
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            Using <ItalicText>CatSAT</ItalicText>, a constraint problem is
            created using
          </Typography>
          <CodeSnippet codeSnippet={problemDeclaration} showTitle={false} />
          <CodeSnippet fileName="Graph.cs" codeSnippet={graphClass} showTitle={true} />
          <CollapsibleComponent isExpanded title="Test">
            hi
          </CollapsibleComponent>
        </Box>
      </Box>
      <StyledDivider />
    </Box>
  );
}

export default GraphConstraints;
