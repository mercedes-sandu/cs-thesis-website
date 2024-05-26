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
          <Typography variant="sectionSubheader" sx={{ mt: 3, mb: 3 }}>
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
                      <BoldText>Adaptability:</BoldText> The ability for a game
                      to adjust to a player's skill level, preferences, or other
                      factors.
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText
                  primary={
                    <Typography variant="sectionP">
                      <BoldText>Mechanics and Dynamics:</BoldText> Described in{" "}
                      <StyledLink href="https://www.researchgate.net/publication/228884866_MDA_A_Formal_Approach_to_Game_Design_and_Game_Research">
                        this paper
                      </StyledLink>
                      , mechanics are defined by "the particular components of
                      the game, at the level of data representation and
                      algorithms," and dynamics are defined by "the run-time
                      behavior of the mechanics acting on player inputs and each
                      others outputs over time."
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText
                  primary={
                    <Typography variant="sectionP">
                      <BoldText>Player's Control over Content:</BoldText> The
                      ability or lack thereof for a player to control the
                      generation of content in a game.
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText
                  primary={
                    <Typography variant="sectionP">
                      <BoldText>Reducing Development Debt:</BoldText> Requiring
                      less time and effort to create content for a game that can
                      otherwise be generated algorithmically. This can be
                      especially useful for indie developers or small teams with
                      limited resources.
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Typography>
          <Typography variant="sectionSubheader" sx={{ mt: 3, mb: 3 }}>
            Real-World Examples of PCG
          </Typography>
          <Typography variant="sectionP">
            There are numerous ways PCG is used in video games today. Some of my
            favorite examples include:
          </Typography>
          <List sx={{ listStyleType: "disc", pl: 4 }}>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText
                primary={
                  <Typography variant="sectionP">
                    <BoldText>Adaptability:</BoldText> The ability for a game to
                    adjust to a player's skill level, preferences, or other
                    factors.
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </Box>
      </Box>
      <StyledDivider />
    </Box>
  );
}

export default PCG;
