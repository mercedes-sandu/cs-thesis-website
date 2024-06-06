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
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            A graph can also consist of some number of{" "}
            <BoldText>subgraphs</BoldText>, which consist of a subset of
            vertices and edges from the larger graph.{" "}
            <BoldText>Bridges</BoldText> are edges that, when removed, increase
            the number of connected components in a graph, and are often
            connecting separate subgraphs.
          </Typography>
          <Typography variant="sectionSubheader" sx={{ mb: 3 }}>
            Connectivity and Pathfinding
          </Typography>
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            One of the most important problems in graph theory is determining
            whether a graph is <BoldText>connected</BoldText>. A graph is
            connected if there is a path between every pair of vertices. A
            <BoldText>connected component</BoldText> is a subgraph in which
            every pair of vertices has a path between them. A graph can have
            multiple connected components. There are a handful of algorithms
            used to create connected graphs, such as{" "}
            <BoldText>Floyd-Warshall</BoldText>, or verify connectivity, such as{" "}
            <BoldText>Breadth-First Search (BFS)</BoldText> and{" "}
            <BoldText>Depth-First Search (DFS)</BoldText>.
          </Typography>
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            The Floyd-Warshall algorithm is used to find the shortest path
            between all pairs of vertices in a graph, essentially connecting all
            vertices in the graph. Its time complexity is O(V^3), where V is the
            number of vertices in the graph, which is quite slow. Breadth-First
            Search (BFS) and Depth-First Search (DFS) are two algorithms that
            are used to traverse graphs and find paths between vertices. BFS and
            DFS are typically used to search a graph for a node that meets a set
            of criteria. BFS begins searching at the root and inspects all nodes
            at the current depth level before moving on to nodes at the next
            depth level. Its time complexity is O(V + E), where V is the number
            of vertices and E is the number of edges. DFS is used to traverse or
            search a graph by exploring as far as possible along each branch
            before backtracking. Its time complexity is O(V + E), where V is the
            number of vertices and E is the number of edges.
          </Typography>
          <Typography variant="sectionP">
            Another important problem in graph theory is finding the shortest
            path between two vertices in a graph.{" "}
            <BoldText>Dijkstra's</BoldText> algorithm is used to find the
            shortest path between a source vertex and all other vertices in a
            graph. The algorithm works by maintaining a set of vertices whose
            shortest distance from the source is known. The time complexity of
            Dijkstra's algorithm is O(V^2) for an adjacency matrix
            representation of a graph and O(E + V log V) for an adjacency list
            representation of a graph.
          </Typography>
        </Box>
      </Box>
      <StyledDivider />
    </Box>
  );
}

export default GraphTheory;
