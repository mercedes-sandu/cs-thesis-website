import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import SectionStarter from "./SectionStarter.tsx";
import { BoldText, StyledDivider } from "../StyledComponents";

function GraphTheory() {
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
            GRAPH THEORY
          </Typography>
          <Typography variant="sectionSubheader" sx={{ mb: 3 }}>
            What is a Graph?
          </Typography>
          <Typography variant="sectionP">
            A <BoldText>graph</BoldText> is a data structure that is often used
            to model relationships between objects. The objects themselves are
            called <BoldText>vertices</BoldText> or <BoldText>nodes</BoldText>,
            and the relationships between them are called{" "}
            <BoldText>edges</BoldText>. To list off a few notable features of
            graphs:
          </Typography>
          <List sx={{ listStyleType: "disc", pl: 4, mb: 3 }}>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText
                primary={
                  <Typography variant="listP">
                    Graphs can be <BoldText>directed</BoldText> or{" "}
                    <BoldText>undirected</BoldText>. A{" "}
                    <BoldText>directed graph</BoldText> has edges that point
                    specifically from one vertex to another, while an{" "}
                    <BoldText>undirected graph</BoldText> has edges that do not
                    have a direction.
                  </Typography>
                }
              />
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText
                primary={
                  <Typography variant="listP">
                    Graphs can be <BoldText>weighted</BoldText> or{" "}
                    <BoldText>unweighted</BoldText>. A{" "}
                    <BoldText>weighted graph</BoldText> has edges that have a
                    numerical value associated with them, while an{" "}
                    <BoldText>unweighted graph</BoldText> does not.
                  </Typography>
                }
              />
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText
                primary={
                  <Typography variant="listP">
                    Graphs can be <BoldText>connected</BoldText> or{" "}
                    <BoldText>disconnected</BoldText>. A{" "}
                    <BoldText>connected graph</BoldText> has a path between
                    every pair of vertices, while a{" "}
                    <BoldText>disconnected graph</BoldText> does not.
                  </Typography>
                }
              />
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText
                primary={
                  <Typography variant="listP">
                    Graphs can be <BoldText>cyclic</BoldText> or{" "}
                    <BoldText>acyclic</BoldText>. A{" "}
                    <BoldText>cyclic graph</BoldText> has at least one{" "}
                    <BoldText>cycle</BoldText>, or a path that starts and ends
                    at the same vertex, while an{" "}
                    <BoldText>acyclic graph</BoldText> does not have any cycle.
                    An acyclic graph is also called a <BoldText>tree</BoldText>.
                  </Typography>
                }
              />
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText
                primary={
                  <Typography variant="listP">
                    A <BoldText>subgraph</BoldText> is a graph that consists of
                    a subset of the vertices and edges of a larger graph.
                  </Typography>
                }
              />
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText
                primary={
                  <Typography variant="listP">
                    Other numeric properties of graphs include{" "}
                    <BoldText>density</BoldText> and{" "}
                    <BoldText>vertex degree</BoldText>. The density of a graph
                    is the ratio of the number of edges to the number of
                    possible edges, while the degree of a vertex is the number
                    of edges that are incident to it.
                  </Typography>
                }
              />
            </ListItem>
          </List>
          <Typography variant="sectionP"></Typography>
        </Box>
      </Box>
      <StyledDivider />
    </Box>
  );
}

export default GraphTheory;
