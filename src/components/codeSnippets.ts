export const problemDeclaration = `Problem p = new Problem();`;

export const graphDeclaration = `Graph graph = new Graph(p, 20, 0);`;

export const graphAssertConnected = `graph.AssertConnected();`;

export const pSolve = `p.Solve();`;

export const findFunction = `private int Find(int n)
{
    int nRep = _repsAndRanks[n].representative;
    return nRep == n ? n : Find(nRep);
}`;

export const unionFunction = `public bool Union(int n, int m)
{
    int nRep = Find(n);
    int mRep = Find(m);

    if (nRep == mRep) return false;

    ushort edge = _graph.EdgeToSATVariable[_graph.Edges(n, m)];
    _edges.Add(edge);

    int nRank = _repsAndRanks[nRep].rank;
    int mRank = _repsAndRanks[mRep].rank;
    if (nRank < mRank)
    {
        _repsAndRanks[nRep].representative = mRep;
    }
    else if (nRank > mRank)
    {
        _repsAndRanks[mRep].representative = nRep;
    }
    else
    {
        _repsAndRanks[mRep].representative = nRep;
        _repsAndRanks[nRep].rank++;
    }

    ConnectedComponentCount--;
    return true;
}`;

export const sameClassFunction = `public bool SameClass(int n, int m) => Find(n) == Find(m);`;

export const wouldConnectFunction = `public bool WouldConnect(int n, int m, EdgeProposition edge)
{
    int nRep = Find(n);
    int mRep = Find(m);
    int sourceRep = Find(edge.SourceVertex);
    int destRep = Find(edge.DestinationVertex);
    return (nRep == sourceRep && mRep == destRep) || (nRep == destRep && mRep == sourceRep);
}`;

export const mightDisconnectFunction = `public bool MightDisconnect(EdgeProposition edge) => _edges.Contains(edge.Index);`;

export const connectInSpanningForestFunction = `public void ConnectInSpanningForest(int n, int m)
{
    bool edgeAdded = SpanningForest.Union(n, m);
    if (edgeAdded) Console.WriteLine($"Connected {n} and {m} in Graph.");
}`;

export const disconnectFunction = `public void Disconnect(int n, int m)
{
    ushort edgeIndex = Edges(n, m).Index;
    if (!SpanningForest.Contains(edgeIndex)) return;

    SpanningForest.Clear();
    _spanningForestBuilt = false;
    Console.WriteLine($"Disconnected {n} and {m} in Graph.");
    RebuildSpanningForest();
}`;

export const rebuildSpanningForestFunction = `private void RebuildSpanningForest()
{
    SpanningForest.Clear();
    IEnumerable<EdgeProposition> trueEdges = SATVariableToEdge.Values.Where(edge => Solver.Propositions[edge.Index]);
    foreach (EdgeProposition edgeProposition in trueEdges)
    {
        ConnectInSpanningForest(edgeProposition.SourceVertex, edgeProposition.DestinationVertex);
    }

    _spanningForestBuilt = true;
}`;

export const customConstraintClass = `public class NewGraphConstraint : CustomConstraint
{
    public NewGraphConstraint(bool isDisjunction, ushort min, 
        short[] disjuncts, int extraHash) 
        : base (isDisjunction, min, disjuncts, extraHash) {}

    public override int CustomFlipRisk(ushort index, 
        bool newValue) {}

    public override void UpdateCustomConstraint(BooleanSolver b, 
        ushort pIndex, bool newValue) {}

    public override bool IsSatisfied(ushort satisfiedDisjuncts) {}

    internal override bool EquivalentTo(Constraint c) {}

    internal override void Decompile(Problem p, StringBuilder b) {}

    public override int ThreatCountDeltaIncreasing(ushort count) {}

    public override int ThreatCountDeltaDecreasing(ushort count) {}

    public override void UpdateTruePositiveAndFalseNegative
        (BooleanSolver b) {}

    public override void UpdateTrueNegativeAndFalsePositive
        (BooleanSolver b) {}

    public override bool MaxFalseLiterals(int falseLiterals) {}

    public override bool MaxTrueLiterals(int trueLiterals) {}

    // Other functions for pseudo-boolean constraints
}`;

export const graphConnectedConstraintConstructor = `public GraphConnectedConstructor(Graph graph) 
    : base(false, (ushort)short.MaxValue, graph.EdgeVariables, 1) 
{
    Graph = graph;
    foreach (EdgeProposition edge in graph.SATVariableToEdge.Values)
    {
        graph.Problem.SATVariables[edge.Index].CustomConstraints
            .Add(this);
    }
}`;

export const updateCustomConstraintFunction = `public override void UpdateCustomConstraint
    (BooleanSolver b, ushort pIndex, bool adding)
{
    EdgeProposition edge = Graph.SATVariableToEdge[pIndex];
    if (adding)
    {
        // Update the graph accordingly
        // For example:
        Graph.ConnectInSpanningForest(edge.SourceVertex, 
            edge.DestinationVertex);

        // Check if the constraint is now satisfied and previously was not
        if (constraintSatisfied && b.UnsatisfiedClauses.Contains(Index))
        {
            // Remove this constraint (which has index "Index") from the list of unsatisfied constraints
            b.UnsatisfiedClauses.Remove(Index);
        }
    }
    else
    {
        // Update the graph accordingly
        // For example:
        Graph.Disconnect(edge.SourceVertex, edge.DestinationVertex);

        // Check if the constraint is now unsatisfied and previously was satisfied
        if (constraintUnsatisfied && previouslySatisfied)
        {
            // Add this constraint to the list of unsatisfied constraints
            b.UnsatisfiedClauses.Add(Index);
        }
    }
}`;

export const decompileFunction = `internal override void Decompile(Problem p, StringBuilder b)
{
    b.Append("NewGraphConstraint");
}`;

export const graphConnectedExample = `Problem p = new Problem();
Graph g = new Graph(p, 15);
g.AssertConnected();
p.Solve();`;

export const subsetConnectedExample = `Problem p = new Problem();
Graph g = new Graph(p, 10);
Subgraph s1 = new Subgraph(g, new[] { 0, 1, 2, 3, 4 });
Subgraph s2 = new Subgraph(g, new[] { 7, 8, 9 });
s1.AssertConnected();
s2.AssertConnected();
p.Solve();`;

export const nodesConnectedExample = `Problem p = new Problem();
Graph g = new Graph(p, 10);
g.AssertNodesConnected(0, 5);
g.AssertNodesConnected(1, 6);
p.Solve();`;

export const densityExample = `Problem p = new Problem();
Graph g = new Graph(p, 20);
g.Density(0.05f, 0.1f);
g.AssertConnected();
p.Solve();`;

export const cycleExample = `Problem p = new Problem();
Graph g = new Graph(p, 10);
foreach (int v in g.Vertices)
{
    g.VertexDegree(v, 2, 2);
}
g.AssertConnected();
p.Solve();`;

export const binaryTreeExample = `const int n = 21;
Problem p = new Problem();
Graph g = new Graph(p, n);
for (int i = 0; i < g.Vetices.Length; i++)
{
    if (i < (n + 1) / 2)
        g.VertexDegree(i, 1, 1);
    else if (i == g.Vertices.Length - 1)
        g.VertexDegree(i, 2, 2);
    else
        g,VertexDegree(i, 3, 3);
}
g.AssertConnected();
p.Solve();`;

export const bridgesExample = `Problem p = new Problem();
Graph g = new Graph(p, 12, 0);
Subgraph s1 = new Subgraph(g, new[] { 0, 1, 2 });
Subgraph s2 = new Subgraph(g, new[] { 3, 4, 5 });
s1.AssertConnected();
s2.AssertConnected();
g.AssertNBridges(2, 2, s1, s2);
p.Solve();`;

export const multipleConstraintsExample = `Problem p = new Problem();
Graph g = new Graph(p, 15);
Subgraph s1 = new Subgraph(g, new[] { 1, 2, 3, 4, 5 });
Subgraph s2 = new Subgraph(g, new[] { 10, 13 });
Subgraph s3 = new Subgraph(g, new[] { 12 });
s1.AssertConnected();
s2.AssertConnected();
g.Density(0.2f, 0.3f);
g.AssertNodesConnected(0, 10);
g.AssertNodesConnected(9, 14);
g.VertexDegree(12, 4, 5);
g.AssertConnected();
p.Solve();`;

export const graphConnectedCustomFlipRisk = `public override int CustomFlipRisk(ushort index, bool adding)
{
    int componentCount = SpanningForest.ConnectedComponentCount;
    if (componentCount == 1 && adding) return 0;
    EdgeProposition edge = Graph.SATVariableToEdge[index];
    return adding ? AddingRisk(edge) : RemovingRisk(edge);
}`;

export const graphConnectedAddingRisk = `private int AddingRisk(EdgeProposition edge) => 
    Graph.AreConnected(edge.SourceVertex, edge.DestinationVertex) ? 0 : EdgeAdditionRisk;`;

export const graphConnectedRemovingRisk = `private int RemovingRisk(EdgeProposition edge) => 
    SpanningForest.Contains(edge.Index) ? EdgeRemovalRisk : 0;`;

export const nodesConnectedCustomFlipRisk = `public override int CustomFlipRisk(ushort index, bool adding)
{
    EdgeProposition edge = Graph.SATVariableToEdge[index];
    bool previouslyConnected = Graph.AreConnected(edge.SourceVertex, edge.DestinationVertex);
    if (previouslyConnected && adding) return 0;
    return adding ? AddingRisk(edge) : RemovingRisk(edge);
}`;

export const nodesConnectedAddingRisk = `private int AddingRisk(EdgeProposition edge)
{
    if (SpanningForest.WouldConnect(SourceNode, DestinationNode, edge)) return EdgeAdditionRisk * 2;
    return Graph.AreConnected(edge.SourceVertex, edge.DestinationVertex) ? 0 : EdgeAdditionRisk;
}`;

export const nodesConnectedRemovingRiskNoPath = `private int RemovingRisk(EdgeProposition edge) =>
    SpanningForest.Contains(edge.Index) ? EdgeRemovalRisk : 0;`;

export const nodesConnectedRemovingRiskPath = `private int RemovingRisk(EdgeProposition edge) =>
    _edgesInPath.Contains(edge.Index) ? EdgeRemovalRisk * 2 : 0;`;

export const densityFunction = `public void Density(float min, float max)
{
    int edgeCount = SATVariableToEdge.Count;
    IEnumerable<EdgeProposition> edges = SATVariableToEdge.Values;
    int minEdges = (int)Math.Round(min * edgeCount);
    int maxEdges = (int)Math.Round(max * edgeCount);
    Problem.Quantify(minEdges, maxEdges, edges);
}`;

export const vertexDegreeFunction = `public void VertexDegree(int vertex, int min, int max)
{
    IEnumerable<EdgeProposition> incidentEdges = from v in Vertices where v != vertex select Edges(v, vertex);
    Problem.Quantify(min, max, incidentEdges);
}`;

export const edgesBetweenSubgraphsFunction = `private IEnumerable<EdgeProposition> EdgesBetweenSubgraphs(Subgraph s1, Subgraph s2)
{
    List<EdgeProposition> edges =
        (from v1 in s1.Vertices from v2 in s2.Vertices select Edges(v1, v2)).ToList();
    return edges;
}`

export const assertNBridgesFunction = `public void AssertNBridges(int min, int max, Subgraph s1, Subgraph s2)
{
    IEnumerable<EdgeProposition> bridges = EdgesBetweenSubgraphs(s1, s2);
    Problem.Quantify(min, max, bridges);
}`;

export const interpretingResults = `public void InterpretingResults()
{
    Problem p = new Problem();
    Graph g = new Graph(p, 10);
    g.AssertNodesConnected(0, 1);
    g.AssertConnected();
    Solution s = p.Solve();
}`;

export const verticesCode = `int[] vertices = g.Vertices;`;

export const edgesCode = `IEnumerable<EdgeProposition> allEdges = g.SATVariableToEdge.Values;`;

export const edgesInSolution = `IEnumerable<EdgeProposition> edgesInSolution = 
    g.SATVariableToEdge.Select(pair => pair.Value).Where(edge => s[edge]);`;