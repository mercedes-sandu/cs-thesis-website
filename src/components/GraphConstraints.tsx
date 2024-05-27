import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import SectionStarter from "./SectionStarter.tsx";
import { ItalicText, StyledDivider } from "../StyledComponents";
import CodeSnippet from "./CodeSnippet";
import {
  problemDeclaration,
  graphDeclaration,
  graphAssertConnected,
  pSolve,
} from "./CodeSnippets.ts";

function GraphConstraints() {
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
          <Typography
            variant="sectionP"
            sx={{ mb: 3, textIndent: 0 }}
            display="inline"
          >
            Then, a graph is initialized for the problem to be solved, passing
            the problem{" "}
            <Typography variant="inlineCodeP" display="inline">
              p
            </Typography>
            , the number of nodes, and optionally the initial density of the
            graph. For example, one may write
          </Typography>
          <CodeSnippet codeSnippet={graphDeclaration} showTitle={false} />
          <Typography variant="sectionP" sx={{ mb: 3, textIndent: 0 }}>
            to initialize a graph with 20 nodes that has no edges to start. Note
            that the last field is optional and by default gives the new graph
            an initial density of 0.5. From here, the user can add constraints
            to be imposed on the graph via their public accessors. For example,
            if the user desired for the generated graph to be connected, they
            would write
          </Typography>
          <CodeSnippet codeSnippet={graphAssertConnected} showTitle={false} />
          <Typography variant="sectionP" sx={{ mb: 3, textIndent: 0 }}>
            Once all desired graph constraints have been added, all that is left
            to do is to call the function that solves the problem:
          </Typography>
          <CodeSnippet codeSnippet={pSolve} showTitle={false} />
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            The current list of constraints that a user can readily use are:
          </Typography>
          <List sx={{ listStyleType: "disc", pl: 4 }}>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText
                primary={
                  <Typography variant="listP" display="inline">
                    <Typography variant="inlineCodeP" display="inline">
                      GraphConnectedConstraint
                    </Typography>
                    , called via the public accessor{" "}
                    <Typography variant="inlineCodeP" display="inline">
                      AssertConnected
                    </Typography>
                    , which ensures that the graph generated is connected
                  </Typography>
                }
              />
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText
                primary={
                  <Typography variant="listP" display="inline">
                    <Typography variant="inlineCodeP" display="inline">
                      SubsetConnectedConstraint
                    </Typography>
                    , called via the public accessor{" "}
                    <Typography variant="inlineCodeP" display="inline">
                      AssertConnected
                    </Typography>
                    , which ensures that a subset of vertices in the graph
                    generated are connected
                  </Typography>
                }
              />
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText
                primary={
                  <Typography variant="listP" display="inline">
                    <Typography variant="inlineCodeP" display="inline">
                      NodesConnectedConstraint
                    </Typography>
                    , called via the public accessor{" "}
                    <Typography variant="inlineCodeP" display="inline">
                      AssertNodesConnected
                    </Typography>
                    , which ensures that two specified nodes in the graph have a
                    path between them
                  </Typography>
                }
              />
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText
                primary={
                  <Typography variant="listP" display="inline">
                    <Typography variant="inlineCodeP" display="inline">
                      Density
                    </Typography>
                    , which is a public method that ensures that the density of
                    the graph is contained between the specified lower and upper
                    bounds
                  </Typography>
                }
              />
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText
                primary={
                  <Typography variant="listP" display="inline">
                    <Typography variant="inlineCodeP" display="inline">
                      VertexDegree
                    </Typography>
                    , which is a public method that ensures a specified vertex
                    has degree contained between the specified lower and upper
                    bounds
                  </Typography>
                }
              />
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText
                primary={
                  <Typography variant="listP" display="inline">
                    <Typography variant="inlineCodeP" display="inline">
                      AssertNBridges
                    </Typography>
                    , which is a public method that ensures that the number of
                    edges between two specified subgraphs is contained between
                    the specified lower and upper bounds
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

export default GraphConstraints;
