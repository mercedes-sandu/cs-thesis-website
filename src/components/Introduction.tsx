import { Box, Typography } from "@mui/material";
import SectionStarter from "./SectionStarter";
import { ItalicText, StyledDivider } from "../StyledComponents";

function Introduction() {
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
            INTRODUCTION
          </Typography>
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            Graphs are extremely versatile data structures used to represent
            pieces of data and the connections between them in a variety of
            computer science fields. Specifically, in the video game development
            space, graphs can be used to represent a variety of concepts, from
            character relationships to waypoint-based maps to branching
            questlines. Game developers often seek to randomly generate such
            game content to promote replayability, integrate content with
            mechanics, and lessen the manual design workload in the development
            process.
          </Typography>
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            For my Master's thesis in Computer Science at Northwestern
            University, I expanded upon a pre-existing system,{" "}
            <ItalicText>CatSAT</ItalicText>, by writing algorithms that allow
            the system to randomly generate graphs under constraints imposed by
            the user, such as "the graph must be connected" or "nodes X and Y
            must be connected." In this website, I'll discuss the theory behind
            the algorithms and system, existing difficulties in randomized graph
            generation, implementations of my algorithms, and an overall view of
            video game AI and content generation. My thesis and relevant code
            can be found in the footer at the bottom of the page. Enjoy! 🎮
          </Typography>
        </Box>
      </Box>
      <StyledDivider />
    </Box>
  );
}

export default Introduction;
