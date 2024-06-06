import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
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
          <Typography variant="sectionP">
            Graphs are useful data structures in many fields of computer
            science, but there are a variety of reasons one my want to randomly
            generate graphs with certain constraints for a video game. A few I
            came up with are listed below.
          </Typography>
          <List sx={{ listStyleType: "disc", pl: 4, mb: 3 }}>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText
                primary={
                  <Typography variant="listP">
                    Creating characters and the relationships between them
                  </Typography>
                }
              />
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText
                primary={
                  <Typography variant="listP">
                    Generating densely populated entities or businesses that
                    have sparse connections between clusters
                  </Typography>
                }
              />
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText
                primary={
                  <Typography variant="listP">
                    Map generation via waypoints
                  </Typography>
                }
              />
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText
                primary={
                  <Typography variant="listP">
                    Branching questline generation
                  </Typography>
                }
              />
            </ListItem>
          </List>
          <Typography variant="sectionP">
            Additionally, the following features could be added to allow for
            more specific types of constraints:
          </Typography>
          <List sx={{ listStyleType: "disc", pl: 4 }}>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText
                primary={
                  <Typography variant="listP">
                    Edge types (relationship type, for example)
                  </Typography>
                }
              />
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText
                primary={
                  <Typography variant="listP">
                    Edge weights (relationship strength, for example)
                  </Typography>
                }
              />
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText
                primary={
                  <Typography variant="listP">
                    Edge direction (relationship direction, for example)
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

export default Applications;
