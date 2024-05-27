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