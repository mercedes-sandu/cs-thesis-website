export const problemDeclaration = `Problem p = new Problem();`;

export const graphDeclaration = `Graph graph = new Graph(p, 20, 0);`;

export const graphAssertConnected = `graph.AssertConnected();`;

export const pSolve = `p.Solve();`;

export const graphClass = `public Graph(Problem p, int numVertices, float initialDensity = 0.5f)
{
    Problem = p;
    Vertices = new int[numVertices];
    NumVertices = numVertices;
    for (var i = 0; i < numVertices; i++)
        Vertices[i] = i;
    SpanningForest = new SpanningForest(this);
    Edges = SymmetricPredicateOfType<int, EdgeProposition>("Edges");
    Subgraphs = new List<Subgraph>();
    for (var i = 0; i < numVertices; i++)
    {
        for (var j = 0; j < i; j++)
        {
        var edgeProposition = Edges(i, j);
        edgeProposition.InitialProbability = initialDensity;
        SATVariableToEdge.Add(edgeProposition.Index, edgeProposition);
        EdgeToSATVariable.Add(edgeProposition, edgeProposition.Index);
        }
    }
}`;
