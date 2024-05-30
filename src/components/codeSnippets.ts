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