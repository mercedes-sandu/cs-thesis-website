import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import SectionStarter from "./SectionStarter";
import { BoldText, StyledDivider, StyledLink } from "../StyledComponents";

function PCG() {
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
            PROCEDURAL CONTENT GENERATION
          </Typography>
          <Typography variant="sectionSubheader" sx={{ mb: 3 }}>
            What is Procedural Content Generation?
          </Typography>
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            <BoldText>Procedural content generation (PCG)</BoldText> is a method
            frequently used in video games and other software projects to create
            randomized data algorithmically over a specific domain. In video
            games, specifically, many notable examples of PCG include (but are
            not limited to) sidescrolling levels, character design, terrain,
            story, dialogue, and in-game items.
          </Typography>
          <Typography variant="sectionSubheader" sx={{ mb: 3 }}>
            What are Reasons to Use PCG in Games?
          </Typography>
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            According to{" "}
            <StyledLink href="https://www.researchgate.net/publication/229020641_PCG-based_game_design_Enabling_new_play_experiences_through_procedural_content_generation">
              this paper on PCG
            </StyledLink>
            , there are a few main reasons to use PCG in video games:
            <List sx={{ listStyle: "decimal", pl: 4 }}>
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText
                  primary={
                    <Typography variant="sectionP">
                      <BoldText>Replaybility:</BoldText> The ability for a
                      player to play the game again and again without getting
                      bored, due to varied player experiences in each
                      playthrough.
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText
                  primary={
                    <Typography variant="sectionP">
                      <BoldText>Adaptability:</BoldText> blah blah
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText
                  primary={
                    <Typography variant="sectionP">
                      <BoldText>Mechanics and Dynamics:</BoldText> blah blah
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText
                  primary={
                    <Typography variant="sectionP">
                      <BoldText>Player's Control over Content:</BoldText> blah
                      blah
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Typography>
          <Typography variant="sectionSubheader" sx={{ mb: 3 }}>
            Real-World Examples of PCG
          </Typography>
          <Typography variant="sectionP"></Typography>
        </Box>
      </Box>
      <StyledDivider />
    </Box>
  );
}

export default PCG;
