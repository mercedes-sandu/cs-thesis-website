import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import SectionStarter from "./SectionStarter.tsx";
import { ItalicText, StyledDivider } from "../StyledComponents";
import CodeSnippet from "./CodeSnippet";
import {
  problemDeclaration,
  graphDeclaration,
  graphAssertConnected,
  pSolve,
  findFunction,
  unionFunction,
  sameClassFunction,
  wouldConnectFunction,
  mightDisconnectFunction,
  connectInSpanningForestFunction,
  disconnectFunction,
  rebuildSpanningForestFunction,
} from "./CodeSnippets.ts";
import CollapsibleComponent from "./CollapsibleComponent.tsx";

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
          <List sx={{ listStyleType: "disc", pl: 4, mb: 3 }}>
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
          <CollapsibleComponent
            isExpanded={false}
            title="DATA STRUCTURES"
            includeMargin={true}
          >
            <Typography variant="sectionP">
              I implemented a variety of data structures to allow{" "}
              <ItalicText>CatSAT</ItalicText> to run as a pseudo-boolean solver
              for graph problems. I will outline them and share some code
              snippets below.
            </Typography>
            <Typography variant="sectionSubheader" sx={{ mt: 3, mb: 3 }}>
              EdgeProposition
            </Typography>
            <Typography variant="sectionP">
              An EdgeProposition is a special type of proposition representing
              an edge between a specified SourceVertex and DestinationVertex .
              As a proposition is a type of literal, an EdgeProposition has a
              truth value that gets flipped by the boolean SAT solver. A truth
              value of true indicates that the edge between vertices n and m is
              present in the graph, and a truth value of false indicates that
              the edge between vertices n and m is not present in the graph.
              Thus, the “flipping” of an EdgeProposition's truth value
              encompasses adding the edge (n, m) to the graph if the truth value
              flips from false to true, and removing the edge (n, m) from the
              graph if the truth value flips from true to false.
            </Typography>
            <Typography variant="sectionSubheader" sx={{ mt: 3, mb: 3 }}>
              SpanningForest
            </Typography>
            <Typography variant="sectionP" sx={{ mb: 3 }}>
              A SpanningForest is a modified Union-Find data structure used by
              Graphs and Subgraphs to keep track of connected components and
              paths relevant to the various constraints that may be imposed on a
              given SAT problem. It is initialized either with a Graph or a
              Subgraph. When the constructor is called, the number of connected
              components is set to the number of vertices in the Graph or
              Subgraph, an integer array of representatives and ranks is
              initialized, and a list of edges in the spanning forest is
              initialized. Initially, each vertex is its own representative, and
              its rank is 0.
            </Typography>
            <Typography variant="sectionP" sx={{ mb: 3 }}>
              The representative of a vertex is found by recursively calling the
              Find function:
            </Typography>
            <CodeSnippet
              codeSnippet={findFunction}
              showTitle={true}
              fileName="SpanningForest.cs"
            />
            <Typography variant="sectionP" sx={{ mt: 3, mb: 3 }}>
              Two vertices are joined in a spanning forest by calling the Union
              function, which sets the representatives of the two vertices to be
              the same, choosing the representative by whichever vertex has
              higher rank. If the vertices did not already have the same
              representative, the number of connected components is decremented
              and the function returns true. The function is given below:
            </Typography>
            <CodeSnippet
              codeSnippet={unionFunction}
              showTitle={true}
              fileName="SpanningForest.cs"
            />
            <Typography variant="sectionP" sx={{ mt: 3, mb: 3 }}>
              Two vertices are in the same equivalence class if they have the
              same representative:
            </Typography>
            <CodeSnippet
              codeSnippet={sameClassFunction}
              showTitle={true}
              fileName="SpanningForest.cs"
            />
            <Typography variant="sectionP" sx={{ mt: 3 }}>
              SpanningForests also have functions to determine if the addition
              of an edge would result in connecting two vertices and if the
              removal of an edge would result in the disconnecting of two
              vertices. The addition of an edge results in the vertices n and m
              being connected if either:
            </Typography>
            <List sx={{ listStyleType: "disc", pl: 4, mb: 3 }}>
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText
                  primary={
                    <Typography variant="sectionP" sx={{ textIndent: 0 }}>
                      n has the same representative as the added edge's source
                      vertex, and m has the same representative as the added
                      edge's destination vertex, or
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText
                  primary={
                    <Typography variant="sectionP" sx={{ textIndent: 0 }}>
                      n has the same representative as the added edge's
                      destination vertex, and m has the same representative as
                      the added edge's source vertex.
                    </Typography>
                  }
                />
              </ListItem>
            </List>
            <CodeSnippet
              codeSnippet={wouldConnectFunction}
              showTitle={true}
              fileName="SpanningForest.cs"
            />
            <Typography variant="sectionP" sx={{ mt: 3, mb: 3 }}>
              The removal of an edge may disconnect two vertices in the same
              equivalence class if the edge being removed is present in the
              spanning forest:
            </Typography>
            <CodeSnippet
              codeSnippet={mightDisconnectFunction}
              showTitle={true}
              fileName="SpanningForest.cs"
            />
            <Typography variant="sectionSubheader" sx={{ mt: 3, mb: 3 }}>
              Graph
            </Typography>
            <Typography variant="sectionP" sx={{ mb: 3 }}>
              A Graph is the data structure representing the problem{" "}
              <ItalicText>CatSAT</ItalicText> is attempting to solve It is
              constructed with a Problem , an integer number of vertices in the
              graph, and optionally an initial density to the graph. When the
              constructor is called, an integer array is populated with the
              vertices of the graph, a spanning forest is initialized, an empty
              list of Subgraphs is initialized, and two dictionaries are built
              that map every possible EdgeProposition (n, m) to its
              corresponding SATVariable index, and vice versa.
            </Typography>
            <Typography variant="sectionP" sx={{ mb: 3 }}>
              As EdgePropositions are flipped while the boolean SAT solver is
              running, the Graph's SpanningForest is maintained and updated
              accordingly with functions ConnectInSpanningForest (when adding an
              edge) and Disconnect (when removing an edge).
            </Typography>
            <Typography variant="sectionP" sx={{ mb: 3 }}>
              ConnectInSpanningForest adds the edge (n, m) to the spanning
              forest by calling Union:
            </Typography>
            <CodeSnippet
              codeSnippet={connectInSpanningForestFunction}
              showTitle={true}
              fileName="Graph.cs"
            />
            <Typography variant="sectionP" sx={{ mt: 3, mb: 3 }}>
              If the edge is present in SpanningForest, Disconnect clears the
              graph's spanning forest and rebuilds it without the edge that was
              specified to be removed:
            </Typography>
            <CodeSnippet
              codeSnippet={disconnectFunction}
              showTitle={true}
              fileName="Graph.cs"
            />
            <Typography variant="sectionP" sx={{ mt: 3, mb: 3 }}>
              Rebuilding a spanning forest constitutes calling
              ConnectInSpanningForest for every edge proposition that has truth
              value set to true in the boolean solver's current solution state:
            </Typography>
            <CodeSnippet
              codeSnippet={rebuildSpanningForestFunction}
              showTitle={true}
              fileName="Graph.cs"
            />
            <Typography variant="sectionSubheader" sx={{ mt: 3, mb: 3 }}>
              Subgraph
            </Typography>
            <Typography variant="sectionP" sx={{ mb: 3 }}>
              A Subgraph is a data structure representing a subset of a Graph.
              It is constructed with a reference to its original Graph and a
              list of the integer vertices present in the subgraph. When the
              constructor is called, the vertices are copied into a local
              integer array and the SATVariableToEdge dictionary is populated
              with edge propositions in the original graph that occur
              exclusively between vertices in the subgraph. Then, a spanning
              forest is initialized and the subgraph is added to the original
              graph's list of subgraphs.
            </Typography>
            <Typography variant="sectionP" sx={{ mb: 3 }}>
              EdgePropositions in a Subgraph are flipped in the same way that
              they are flipped in a Graph, as Subgraph has its own analogous
              definitions of the functions ConnectInSpanningForest, Disconnect,
              and RebuildSpanningForest.
            </Typography>
            <Typography variant="sectionSubheader" sx={{ mt: 3, mb: 3 }}>
              CustomConstraint
            </Typography>
            <Typography variant="sectionP" sx={{ mb: 3 }}>
              A CustomConstraint is a subclass of Constraint in{" "}
              <ItalicText>CatSAT</ItalicText> that allows developers to create a
              constraint with additional custom fields and properties. If you
              are curious about how to use CustomConstraints, read more in the
              section below.
            </Typography>
          </CollapsibleComponent>
          <CollapsibleComponent
            isExpanded={false}
            title="MAKING YOUR OWN GRAPH CONSTRAINTS"
            includeMargin={false}
          ></CollapsibleComponent>
        </Box>
      </Box>
      <StyledDivider />
    </Box>
  );
}

export default GraphConstraints;
