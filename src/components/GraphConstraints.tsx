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
  customConstraintClass,
  graphConnectedConstraintConstructor,
  updateCustomConstraintFunction,
  decompileFunction,
  graphConnectedExample,
  subsetConnectedExample,
  nodesConnectedExample,
  cycleExample,
  binaryTreeExample,
  densityExample,
  bridgesExample,
  multipleConstraintsExample,
  graphConnectedCustomFlipRisk,
  graphConnectedAddingRisk,
  graphConnectedRemovingRisk,
  nodesConnectedCustomFlipRisk,
  nodesConnectedAddingRisk,
  nodesConnectedRemovingRiskNoPath,
  nodesConnectedRemovingRiskPath,
  densityFunction,
  vertexDegreeFunction,
  edgesBetweenSubgraphsFunction,
  assertNBridgesFunction,
  interpretingResults,
  verticesCode,
  edgesCode,
  edgesInSolution,
} from "./CodeSnippets.ts";
import CollapsibleComponent from "./CollapsibleComponent.tsx";
import Graph from "./Graph.tsx";
import {
  binaryTreeDot,
  bridgesDot,
  cycleDot,
  densityDot,
  graphConnectedDot,
  multipleConstraintsDot,
  nodesConnectedDot,
  subsetConnectedDot,
} from "./DotStrings.ts";

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
            open={false}
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
            open={false}
            title="MAKING YOUR OWN GRAPH CONSTRAINTS"
            includeMargin={true}
          >
            <Typography variant="sectionP" sx={{ mb: 3 }}>
              New constraints to be imposed on a Graph to be generated can be
              developed by creating a new C# class that is a subclass of
              CustomConstraint. The general class structure is as follows:
            </Typography>
            <CodeSnippet
              codeSnippet={customConstraintClass}
              showTitle={true}
              fileName="NewGraphConstraint.cs"
            />
            <Typography variant="sectionP" sx={{ mt: 3, mb: 3 }}>
              Any class that inherits from CustomConstraint must override all of
              the methods above. The constructor for the new graph constraint
              must call the base constructor with the stated parameters, but can
              also include additional parameters and initialize them accordingly
              in the body of the constructor. For example,
              GraphConnectedConstraint has constructor
            </Typography>
            <CodeSnippet
              codeSnippet={graphConnectedConstraintConstructor}
              showTitle={true}
              fileName="GraphConnectedConstraint.cs"
            />
            <Typography variant="sectionP" sx={{ mt: 3, mb: 3 }}>
              CustomFlipRisk is a method that returns an integer associated with
              the risk or cost of flipping a specified SAT variable to a new
              value. For the integer that is returned, negative values
              correspond to a favorable flip, positive values correspond to an
              unfavorable flip, and zero corresponds to neither risk nor reward.
              This method is required to determine which variable is favorable
              to flip by the GreedyFlip method of the solver.
            </Typography>
            <Typography variant="sectionP" sx={{ mb: 3 }}>
              UpdateCustomConstraint updates the current solver's list of
              unsatisfied constraints when a SAT variable is flipped. Any
              additional data relevant to the constraint should also be updated.
              In general, it should look something like this:
            </Typography>
            <CodeSnippet
              codeSnippet={updateCustomConstraintFunction}
              showTitle={true}
              fileName="NewGraphConstraint.cs"
            />
            <Typography variant="sectionP" sx={{ mt: 3, mb: 3 }}>
              IsSatisfied is called once the problem being solved is created
              with an initial random state, assessing whether the constraint has
              been satisfied without any variables being flipped.
            </Typography>
            <Typography variant="sectionP" sx={{ mb: 3 }}>
              EquivalentTo checks if the constraint is a copy of or is identical
              to the constraint passed to it.
            </Typography>
            <Typography variant="sectionP" sx={{ mb: 3 }}>
              Decompile creates a texture representation of the constraint,
              purely for debugging purposes. In most cases, it is useful to
              append the name of the constraint to the string builder:
            </Typography>
            <CodeSnippet
              codeSnippet={decompileFunction}
              showTitle={true}
              fileName="NewGraphConstraint.cs"
            />
            <Typography variant="sectionP" sx={{ mt: 3 }}>
              The remaining functions are for pseudo-boolean constraints which
              involve cardinalities of variables. I did not find myself needing
              to implement them, but you may.
            </Typography>
          </CollapsibleComponent>
          <CollapsibleComponent
            open={false}
            includeMargin={false}
            title="CONSTRAINT IDEAS"
          >
            <Typography variant="sectionP">
              Below I present a list of constraints I wanted to implement but
              did not have time to. If you are interested in implementing them,
              I would be happy to help you get started!
            </Typography>
            <List sx={{ listStyleType: "disc", pl: 4 }}>
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText
                  primary={
                    <Typography variant="listP" display="inline">
                      <Typography variant="inlineCodeP" display="inline">
                        GraphCompleteConstraint
                      </Typography>
                      : The graph generated must be complete (every possible
                      edge in the graph is present)
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText
                  primary={
                    <Typography variant="listP" display="inline">
                      <Typography variant="inlineCodeP" display="inline">
                        NConnectedComponentsConstraint
                      </Typography>
                      : The graph generated must have a specified number of
                      connected components, n. Note that I started to implement
                      this one, but some debugging must be done
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText
                  primary={
                    <Typography variant="listP" display="inline">
                      <Typography variant="inlineCodeP" display="inline">
                        StronglyConnectedComponentConstraint
                      </Typography>
                      : The graph generated must contain a strongly connected
                      component
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText
                  primary={
                    <Typography variant="listP" display="inline">
                      <Typography variant="inlineCodeP" display="inline">
                        NodesNotConnectedConstraint
                      </Typography>
                      : The vertices n and m in a graph must not be connected
                      via any path
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText
                  primary={
                    <Typography variant="listP" display="inline">
                      <Typography variant="inlineCodeP" display="inline">
                        PathOfLengthConstraint
                      </Typography>
                      : If possible, the path between the vertices n and m in
                      the graph must be of a specified length
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText
                  primary={
                    <Typography variant="listP" display="inline">
                      <Typography variant="inlineCodeP" display="inline">
                        CycleConstraint
                      </Typography>
                      : The graph generated must have a cycle
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText
                  primary={
                    <Typography variant="listP" display="inline">
                      <Typography variant="inlineCodeP" display="inline">
                        CycleOfLengthConstraint
                      </Typography>
                      : The graph generated must have a cycle of a specified
                      length
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText
                  primary={
                    <Typography variant="listP" display="inline">
                      <Typography variant="inlineCodeP" display="inline">
                        PathThroughVertexConstraint
                      </Typography>
                      : The vertices n and m must be connected via a path that
                      passes through a third specified vertex, v
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText
                  primary={
                    <Typography variant="listP" display="inline">
                      <Typography variant="inlineCodeP" display="inline">
                        TreeConstraint
                      </Typography>
                      : The graph generated must be acyclic and connected
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText
                  primary={
                    <Typography variant="listP" display="inline">
                      <Typography variant="inlineCodeP" display="inline">
                        ForestConstraint
                      </Typography>
                      : The graph generated must only consist of connected
                      components that are acyclic
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText
                  primary={
                    <Typography variant="listP" display="inline">
                      <Typography variant="inlineCodeP" display="inline">
                        GraphColoringConstraint
                      </Typography>
                      : The graph generated must be properly colored with a
                      specified number c of colors
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText
                  primary={
                    <Typography variant="listP" display="inline">
                      <Typography variant="inlineCodeP" display="inline">
                        IndependentSetConstraint
                      </Typography>
                      : The graph generated must contain a maximum independent
                      set, where no two vertices in the set are adjacent
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText
                  primary={
                    <Typography variant="listP" display="inline">
                      <Typography variant="inlineCodeP" display="inline">
                        GraphSymmetryConstraint
                      </Typography>
                      : The graph generated must have specified symmetry
                      (mirror, rotational, etc.)
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText
                  primary={
                    <Typography variant="listP" display="inline">
                      <Typography variant="inlineCodeP" display="inline">
                        PlanarGraphConstraint
                      </Typography>
                      : The graph generated must be planar (edges can be drawn
                      such that no pai rof edges intersects except for at
                      endpoints)
                    </Typography>
                  }
                />
              </ListItem>
            </List>
            <Typography variant="sectionP">
              Of course, this list is not exhaustive! If you have any ideas for
              new constraints, I would love to hear them and add them to this
              list.
            </Typography>
          </CollapsibleComponent>
          <Typography variant="sectionSubheader" sx={{ mt: 6, mb: 3 }}>
            GraphConnectedConstraint
          </Typography>
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            In order for a graph to be connected, it must have one connected
            component. An edge is then considered to be flipped based on the
            following logic:
          </Typography>
          <CodeSnippet
            codeSnippet={graphConnectedCustomFlipRisk}
            fileName="GraphConnectedConstraint.cs"
            showTitle={true}
          />
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            Then, the cost associated with adding an edge is given by the
            following logic:
          </Typography>
          <CodeSnippet
            codeSnippet={graphConnectedAddingRisk}
            fileName="GraphConnectedConstraint.cs"
            showTitle={true}
          />
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            The cost associated with removing an edge is given by the following
            logic:
          </Typography>
          <CodeSnippet
            codeSnippet={graphConnectedRemovingRisk}
            fileName="GraphConnectedConstraint.cs"
            showTitle={true}
          />
          <Typography variant="sectionP">
            These three functions mean to evaluate the following:
          </Typography>
          <List sx={{ listStyleType: "disc", pl: 4, mb: 3 }}>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText
                primary={
                  <Typography variant="listP">
                    Adding an edge is favorable if it results in the source and
                    destination vertices being in the same equivalence class,
                    and adding an edge is never unfavorable.
                  </Typography>
                }
              />
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText
                primary={
                  <Typography variant="listP">
                    Removing an edge is unfavorable if it is currently in the
                    spanning forest being maintained for the graph, and removing
                    an edge is never favorable.
                  </Typography>
                }
              />
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText
                primary={
                  <Typography variant="listP">
                    If there is exactly one connected component in the graph
                    (meaning that the graph itself is connected), then adding an
                    edge is neither favorable nor unfavorable.
                  </Typography>
                }
              />
            </ListItem>
          </List>
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            The GreedyFlip function in CatSAT is overridden in
            GraphConnectedConstraint to favor flipping edges that are between
            vertices which are not in the same equivalence class.
          </Typography>
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            The GraphConnectedConstraint is satisfied when the spanning forest
            of the Graph has a ConnectedComponentCount of 1.
          </Typography>
          <Typography variant="sectionSubheader" sx={{ mb: 3 }}>
            Example
          </Typography>
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            Below we assert that a graph of 15 vertices is connected.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <CodeSnippet
              codeSnippet={graphConnectedExample}
              showTitle={true}
              fileName="GraphConnectedExample.cs"
              nextToFigure={true}
            />
            <Graph dot={graphConnectedDot} width={500} height={500} />
          </Box>
          <Typography variant="sectionSubheader" sx={{ mb: 3 }}>
            SubsetConnectedConstraint
          </Typography>
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            The SubsetConnectedConstraint behaves in a similar nature to the
            GraphConnectedConstraint, except it operates on a Subgraph, or a
            subset of the vertices of the original Graph. A Subgraph maintains
            its own spanning forest separate from that of the original Graph,
            updating both itself and the original Graph's spanning forest when
            edges are added and removed.
          </Typography>
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            Note that a Subgraph is initialized with the Graph from which it
            originates and an IEnumerable of the vertices it contains.
          </Typography>
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            The logic for CustomFlipRisk, AddingRisk, RemovingRisk, and
            GreedyFlip are otherwise the same as for those in
            GraphConnectedConstraint.
          </Typography>
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            The SubsetConnectedConstraint is satisfied when the spanning forest
            of the Subgraph has a ConnectedComponentCount of 1.
          </Typography>
          <Typography variant="sectionSubheader" sx={{ mb: 3 }}>
            Example
          </Typography>
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            Below we assert that two subgraphs of a graph of 10 vertices, namely
            (0, 1, 2, 3, 4) and (7, 8, 9), are each connected.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <CodeSnippet
              codeSnippet={subsetConnectedExample}
              showTitle={true}
              fileName="SubsetConnectedExample.cs"
              nextToFigure={true}
            />
            <Graph dot={subsetConnectedDot} width={500} height={500} />
          </Box>
          <Typography variant="sectionSubheader" sx={{ mb: 3 }}>
            NodesConnectedConstraint
          </Typography>
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            Two nodes, namely SourceNode and DestinationNode, in a graph are
            considered connected if there exists a path between them. This
            constraint in particular has two primary modes of operation based on
            whether the path between the nodes has been constructed while a
            model has not yet been found.
          </Typography>
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            If the path has not yet been constructed, an edge is considered to
            be flipped based on the following logic:
          </Typography>
          <CodeSnippet
            codeSnippet={nodesConnectedCustomFlipRisk}
            fileName="NodesConnectedConstraint.cs"
            showTitle={true}
          />
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            Then, the cost associated with adding an edge is given by the
            following logic:
          </Typography>
          <CodeSnippet
            codeSnippet={nodesConnectedAddingRisk}
            fileName="NodesConnectedConstraint.cs"
            showTitle={true}
          />
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            The cost associated with removing an edge is given by the following
            logic:
          </Typography>
          <CodeSnippet
            codeSnippet={nodesConnectedRemovingRiskNoPath}
            fileName="NodesConnectedConstraint.cs"
            showTitle={true}
          />
          <Typography variant="sectionP">
            These three functions mean to evaluate the following:
          </Typography>
          <List sx={{ listStyleType: "disc", pl: 4, mb: 3 }}>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText
                primary={
                  <Typography variant="listP">
                    Adding an edge is extremely favorable if it results in
                    SourceNode and DestinationNode being in the same equivalence
                    class. Adding an edge is favorable if the edge's source and
                    destination vertices are not currently in the same
                    equivalence class, and adding an edge is never unfavorable.
                  </Typography>
                }
              />
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText
                primary={
                  <Typography variant="listP">
                    Removing an edge is unfavorable if it is currently in the
                    spanning forest being maintained for the graph, and removing
                    an edge is never favorable.
                  </Typography>
                }
              />
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText
                primary={
                  <Typography variant="listP">
                    If the edge's source and destination vertices were already
                    connected (in the same equivalence class) prior to the flip,
                    then adding an edge is neither favorable nor unfavorable.
                  </Typography>
                }
              />
            </ListItem>
          </List>
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            Alternatively, if the path has been constructed and there are still
            constraints which are yet to be satisfied, then the boolean flag
            keeping track of this state is set to true and a breadth-first
            search runs (via the ShortestPath method) to find the shortest path
            between SourceNode and DestinationNode, storing these edges in a
            list of their indices. Then, the logic that runs for CustomFlipRisk
            and AddingRisk is the same as previously stated. However, the cost
            associated with removing an edge differs, instead given by the
            following logic:
          </Typography>
          <CodeSnippet
            codeSnippet={nodesConnectedRemovingRiskPath}
            fileName="NodesConnectedConstraint.cs"
            showTitle={true}
          />
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            This means to say that it is extremely unfavorable to remove an edge
            that is in the path connecting SourceNode and DestinationNode,
            otherwise it is neither favorable nor unfavorable.
          </Typography>
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            The logic for GreedyFlip is the same as that in
            GraphConnectedConstraint and SubsetConnectedConstraint.
          </Typography>
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            The NodesConnectedConstraint is satisfied when SourceNode and
            DestinationNode are connected via somep ath and hence are in the
            same equivalence class.
          </Typography>
          <Typography variant="sectionSubheader" sx={{ mb: 3 }}>
            Example
          </Typography>
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            Below we assert that there exists a path between vertices 0 and 5
            (shown in blue) and that there exists a path between vertices 1 and
            6 (shown in red).
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <CodeSnippet
              codeSnippet={nodesConnectedExample}
              showTitle={true}
              fileName="NodesConnectedExample.cs"
              nextToFigure={true}
            />
            <Graph dot={nodesConnectedDot} width={500} height={500} />
          </Box>
          <Typography variant="sectionSubheader" sx={{ mb: 3 }}>
            Density
          </Typography>
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            A graph's density is the ratio of edges present in a graph to the
            total number of possible edges in the graph. The Density constraint
            asserts that a graph has density between a specified minimum and
            maximum (inclusive of both bounds). This constraint utilizes
            CatSAT's Quantify constraint, which asserts that the number of true
            literals in a specified set is bounded by a specified minimum and
            maximum (also inclusive of both bounds). The logic is given by:
          </Typography>
          <CodeSnippet
            codeSnippet={densityFunction}
            fileName="Graph.cs"
            showTitle={true}
          />
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            Note that both Graph and Subgraph have a Density constraint.
          </Typography>
          <Typography variant="sectionSubheader" sx={{ mb: 3 }}>
            Example
          </Typography>
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            Below we assert that a connected graph of 20 vertices has density
            between 5% and 10%.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <CodeSnippet
              codeSnippet={densityExample}
              showTitle={true}
              fileName="DensityExample.cs"
              nextToFigure={true}
            />
            <Graph dot={densityDot} width={700} height={700} />
          </Box>
          <Typography variant="sectionSubheader" sx={{ mb: 3 }}>
            VertexDegree
          </Typography>
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            The VertexDegree constraint asserts that a specified vertex has
            degree between specified minimum and maximum values (inclusive of
            both bounds). This constraint also utilizes Quantify, and the logic
            is given by:
          </Typography>
          <CodeSnippet
            codeSnippet={vertexDegreeFunction}
            fileName="Graph.cs"
            showTitle={true}
          />
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            Note that both Graph and Subgraph have a Density constraint. We can
            get some interesting results with VertexDegree constraints, as
            illustrated below.
          </Typography>
          <Typography variant="sectionSubheader" sx={{ mb: 3 }}>
            Examples
          </Typography>
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            Below we assert a graph of 10 vertices is a 10-cycle by asserting
            that each vertex has a degree of 2 and that the graph is connected.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <CodeSnippet
              codeSnippet={cycleExample}
              showTitle={true}
              fileName="CycleExample.cs"
              nextToFigure={true}
            />
            <Graph dot={cycleDot} width={500} height={500} />
          </Box>
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            Below we assert a connected graph of 21 vertices is a binary tree by
            assigning a root with degree 2, leaves with degree 1, and interior
            nodes with degree 3.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <CodeSnippet
              codeSnippet={binaryTreeExample}
              showTitle={true}
              fileName="BinaryTreeExample.cs"
              nextToFigure={true}
            />
            <Graph dot={binaryTreeDot} width={700} height={500} />
          </Box>
          <Typography variant="sectionSubheader" sx={{ mb: 3 }}>
            Bridges
          </Typography>
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            A bridge is an edge whose removal would result in an increase in the
            number of connected components in a graph. The Graph class has a
            public constraint method AssertNBridges that ensures that the number
            of such bridge edges between two specified Subgraphs is contained
            between a minimum and maximum number (inclusive). It also uses the
            Quantify method to impose a constraint on the bridge edges that
            could exist between two Subgraphs. These bridges are found with the
            following logic:
          </Typography>
          <CodeSnippet
            codeSnippet={edgesBetweenSubgraphsFunction}
            fileName="Graph.cs"
            showTitle={true}
          />
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            Then, AssertNBridges is given by:
          </Typography>
          <CodeSnippet
            codeSnippet={assertNBridgesFunction}
            fileName="Graph.cs"
            showTitle={true}
          />
          <Typography variant="sectionSubheader" sx={{ mb: 3 }}>
            Example
          </Typography>
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            Below we assert that the two connected subgraphs have two bridges
            between them.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <CodeSnippet
              codeSnippet={bridgesExample}
              showTitle={true}
              fileName="BridgesExample.cs"
              nextToFigure={true}
            />
            <Graph dot={bridgesDot} width={500} height={500} />
          </Box>
          <Typography variant="sectionSubheader" sx={{ mb: 3 }}>
            Multiple Constraints in One Problem
          </Typography>
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            Multiple constraints can be combined in a single problem. However,
            you must be wary that you do not introduce contradictory
            constraints, else a solution will not be found.
          </Typography>
          <Typography variant="sectionSubheader" sx={{ mb: 3 }}>
            Example
          </Typography>
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            Below we show an example of multiple constraints being imposed on a
            graph of 15 vertices. The graph is connected, has two connected
            subgraphs, has two required paths, has density between 20% and 30%,
            and one of the vertices has degree between four and five.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <CodeSnippet
              codeSnippet={multipleConstraintsExample}
              showTitle={true}
              fileName="MultipleConstraintsExample.cs"
              nextToFigure={true}
            />
            <Graph dot={multipleConstraintsDot} width={600} height={600} />
          </Box>
          <Typography variant="sectionSubheader" sx={{ mb: 3 }}>
            Interpreting Results
          </Typography>
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            Calling the Solve function on an initialized Problem in CatSAT will
            not inherently display the generated graph. However, it is fairly
            simple to obtain relevant properties of theS olution: the Graph's
            vertices, all possible EdgePropositions, and the list of
            EdgePropositions which have a truth assignment of true in the
            outputted model. Suppose we instantiate and solve the following
            problem:
          </Typography>
          <CodeSnippet codeSnippet={interpretingResults} showTitle={false} />
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            Both before and after Solve() is executed, the Graph's vertices can
            be retrieved using
          </Typography>
          <CodeSnippet codeSnippet={verticesCode} showTitle={false} />
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            Similarly, all possible EdgePropositions in the Graph can be
            obtained by writing
          </Typography>
          <CodeSnippet codeSnippet={edgesCode} showTitle={false} />
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            Finally, after Solve() is executed, the EdgePropositions set to true
            (equivalently, the edges which are present in the model after
            solving has concluded) are acquired with
          </Typography>
          <CodeSnippet codeSnippet={edgesInSolution} showTitle={false} />
        </Box>
      </Box>
      <StyledDivider />
    </Box>
  );
}

export default GraphConstraints;
