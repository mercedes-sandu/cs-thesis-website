export const graphConnectedDot = `graph G {
   node [shape=circle, fixedsize=true, width=0.3, style=filled, fillcolor="#303030", color="#f0f0f0", fontcolor="#f0f0f0", fontname="Courier", fontsize="10pt"];
   bgcolor="transparent";
   layout = fdp;
   0;
   1;
   2;
   3;
   4;
   5;
   6;
   7;
   8;
   9;
   10;
   11;
   12;
   13;
   14;
   0 -- 1 [color="#f0f0f0"];
   0 -- 2 [color="#f0f0f0"];
   1 -- 2 [color="#f0f0f0"];
   1 -- 3 [color="#f0f0f0"];
   2 -- 4 [color="#f0f0f0"];
   0 -- 5 [color="#f0f0f0"];
   1 -- 5 [color="#f0f0f0"];
   3 -- 5 [color="#f0f0f0"];
   4 -- 5 [color="#f0f0f0"];
   1 -- 6 [color="#f0f0f0"];
   3 -- 6 [color="#f0f0f0"];
   4 -- 6 [color="#f0f0f0"];
   5 -- 6 [color="#f0f0f0"];
   1 -- 7 [color="#f0f0f0"];
   3 -- 7 [color="#f0f0f0"];
   4 -- 7 [color="#f0f0f0"];
   5 -- 7 [color="#f0f0f0"];
   6 -- 7 [color="#f0f0f0"];
   1 -- 8 [color="#f0f0f0"];
   2 -- 8 [color="#f0f0f0"];
   3 -- 8 [color="#f0f0f0"];
   6 -- 8 [color="#f0f0f0"];
   3 -- 9 [color="#f0f0f0"];
   6 -- 9 [color="#f0f0f0"];
   7 -- 9 [color="#f0f0f0"];
   2 -- 10 [color="#f0f0f0"];
   3 -- 10 [color="#f0f0f0"];
   4 -- 10 [color="#f0f0f0"];
   5 -- 10 [color="#f0f0f0"];
   0 -- 11 [color="#f0f0f0"];
   2 -- 11 [color="#f0f0f0"];
   3 -- 11 [color="#f0f0f0"];
   4 -- 11 [color="#f0f0f0"];
   5 -- 11 [color="#f0f0f0"];
   6 -- 11 [color="#f0f0f0"];
   7 -- 11 [color="#f0f0f0"];
   9 -- 11 [color="#f0f0f0"];
   0 -- 12 [color="#f0f0f0"];
   1 -- 12 [color="#f0f0f0"];
   3 -- 12 [color="#f0f0f0"];
   4 -- 12 [color="#f0f0f0"];
   6 -- 12 [color="#f0f0f0"];
   10 -- 12 [color="#f0f0f0"];
   0 -- 13 [color="#f0f0f0"];
   3 -- 13 [color="#f0f0f0"];
   5 -- 13 [color="#f0f0f0"];
   9 -- 13 [color="#f0f0f0"];
   0 -- 14 [color="#f0f0f0"];
   1 -- 14 [color="#f0f0f0"];
   3 -- 14 [color="#f0f0f0"];
   4 -- 14 [color="#f0f0f0"];
   5 -- 14 [color="#f0f0f0"];
   6 -- 14 [color="#f0f0f0"];
   7 -- 14 [color="#f0f0f0"];
   8 -- 14 [color="#f0f0f0"];
   9 -- 14 [color="#f0f0f0"];
   11 -- 14 [color="#f0f0f0"];
}
`;

export const subsetConnectedDot = `graph G {
   node [shape=circle, fixedsize=true, width=0.3, style=filled, fillcolor="#303030", color="#f0f0f0", fontcolor="#f0f0f0", fontname="Courier", fontsize="10pt"];
   bgcolor="transparent";
   layout = fdp;
   0;
   1;
   2;
   3;
   4;
   5;
   6;
   7;
   8;
   9;
   subgraph cluster0 {
      pencolor="#f0f0f0"
      0;
      1;
      2;
      3;
      4;
   }
   subgraph cluster1 {
      pencolor="#f0f0f0"
      7;
      8;
      9;
   }
   0 -- 1 [color="#f0f0f0"];
   0 -- 2 [color="#f0f0f0"];
   1 -- 2 [color="#f0f0f0"];
   0 -- 3 [color="#f0f0f0"];
   1 -- 3 [color="#f0f0f0"];
   2 -- 3 [color="#f0f0f0"];
   2 -- 4 [color="#f0f0f0"];
   1 -- 5 [color="#f0f0f0"];
   3 -- 5 [color="#f0f0f0"];
   0 -- 6 [color="#f0f0f0"];
   2 -- 6 [color="#f0f0f0"];
   3 -- 6 [color="#f0f0f0"];
   4 -- 6 [color="#f0f0f0"];
   0 -- 7 [color="#f0f0f0"];
   1 -- 7 [color="#f0f0f0"];
   3 -- 7 [color="#f0f0f0"];
   4 -- 7 [color="#f0f0f0"];
   5 -- 7 [color="#f0f0f0"];
   1 -- 8 [color="#f0f0f0"];
   4 -- 8 [color="#f0f0f0"];
   7 -- 8 [color="#f0f0f0"];
   0 -- 9 [color="#f0f0f0"];
   2 -- 9 [color="#f0f0f0"];
   5 -- 9 [color="#f0f0f0"];
   6 -- 9 [color="#f0f0f0"];
   7 -- 9 [color="#f0f0f0"];
}
`;

export const nodesConnectedDot = `graph G {
   node [shape=circle, fixedsize=true, width=0.3, style=filled, fillcolor="#303030", color="#f0f0f0", fontcolor="#f0f0f0", fontname="Courier", fontsize="10pt"];
   bgcolor="transparent";
   layout = fdp;
   0;
   1;
   2;
   3;
   4;
   5;
   6;
   7;
   8;
   9;
   0 -- 1 [color="#f0f0f0"];
   0 -- 2 [color="#f0f0f0"];
   1 -- 2 [color="#f45953"];
   0 -- 3 [color="#446fcb"];
   1 -- 3 [color="#f0f0f0"];
   2 -- 3 [color="#f0f0f0"];
   2 -- 4 [color="#f0f0f0"];
   1 -- 5 [color="#f0f0f0"];
   3 -- 5 [color="#446fcb"];
   0 -- 6 [color="#f0f0f0"];
   2 -- 6 [color="#f45953"];
   3 -- 6 [color="#f0f0f0"];
   4 -- 6 [color="#f0f0f0"];
   0 -- 7 [color="#f0f0f0"];
   1 -- 7 [color="#f0f0f0"];
   3 -- 7 [color="#f0f0f0"];
   4 -- 7 [color="#f0f0f0"];
   5 -- 7 [color="#f0f0f0"];
   1 -- 8 [color="#f0f0f0"];
   4 -- 8 [color="#f0f0f0"];
   7 -- 8 [color="#f0f0f0"];
   0 -- 9 [color="#f0f0f0"];
   2 -- 9 [color="#f0f0f0"];
   5 -- 9 [color="#f0f0f0"];
   6 -- 9 [color="#f0f0f0"];
   7 -- 9 [color="#f0f0f0"];
}
`;

export const densityDot = `graph G {
   node [shape=circle, fixedsize=true, width=0.3, style=filled, fillcolor="#303030", color="#f0f0f0", fontcolor="#f0f0f0", fontname="Courier", fontsize="10pt"];
   bgcolor="transparent";
   layout = fdp;
   0;
   1;
   2;
   3;
   4;
   5;
   6;
   7;
   8;
   9;
   10;
   11;
   12;
   13;
   14;
   15;
   16;
   17;
   18;
   19;
   0 -- 2 [color="#f0f0f0"];
   0 -- 4 [color="#f0f0f0"];
   2 -- 6 [color="#f0f0f0"];
   4 -- 7 [color="#f0f0f0"];
   1 -- 8 [color="#f0f0f0"];
   7 -- 8 [color="#f0f0f0"];
   3 -- 9 [color="#f0f0f0"];
   4 -- 11 [color="#f0f0f0"];
   8 -- 12 [color="#f0f0f0"];
   10 -- 13 [color="#f0f0f0"];
   1 -- 14 [color="#f0f0f0"];
   10 -- 14 [color="#f0f0f0"];
   5 -- 15 [color="#f0f0f0"];
   14 -- 15 [color="#f0f0f0"];
   13 -- 16 [color="#f0f0f0"];
   1 -- 17 [color="#f0f0f0"];
   9 -- 17 [color="#f0f0f0"];
   14 -- 17 [color="#f0f0f0"];
   3 -- 18 [color="#f0f0f0"];
   18 -- 19 [color="#f0f0f0"];
}
`;

export const cycleDot = `graph G {
   node [shape=circle, fixedsize=true, width=0.3, style=filled, fillcolor="#303030", color="#f0f0f0", fontcolor="#f0f0f0", fontname="Courier", fontsize="10pt"];
   bgcolor="transparent";
   layout = fdp;
   0;
   1;
   2;
   3;
   4;
   5;
   6;
   7;
   8;
   9;
   0 -- 3 [color="#f0f0f0"];
   2 -- 3 [color="#f0f0f0"];
   2 -- 4 [color="#f0f0f0"];
   1 -- 5 [color="#f0f0f0"];
   0 -- 6 [color="#f0f0f0"];
   5 -- 7 [color="#f0f0f0"];
   1 -- 8 [color="#f0f0f0"];
   4 -- 8 [color="#f0f0f0"];
   6 -- 9 [color="#f0f0f0"];
   7 -- 9 [color="#f0f0f0"];
}
`;

export const binaryTreeDot = `graph G {
   node [shape=circle, fixedsize=true, width=0.3, style=filled, fillcolor="#303030", color="#f0f0f0", fontcolor="#f0f0f0", fontname="Courier", fontsize="10pt"];
   bgcolor="transparent";
   layout = dot;
   0;
   1;
   2;
   3;
   4;
   5;
   6;
   7;
   8;
   9;
   10;
   11;
   12;
   13;
   14;
   15;
   16;
   17;
   18;
   19;
   20;
   3 -- 12 [color="#f0f0f0"];
   5 -- 13 [color="#f0f0f0"];
   9 -- 13 [color="#f0f0f0"];
   11 -- 14 [color="#f0f0f0"];
   2 -- 15 [color="#f0f0f0"];
   8 -- 15 [color="#f0f0f0"];
   12 -- 16 [color="#f0f0f0"];
   13 -- 16 [color="#f0f0f0"];
   14 -- 16 [color="#f0f0f0"];
   0 -- 17 [color="#f0f0f0"];
   4 -- 17 [color="#f0f0f0"];
   12 -- 17 [color="#f0f0f0"];
   10 -- 18 [color="#f0f0f0"];
   11 -- 18 [color="#f0f0f0"];
   15 -- 18 [color="#f0f0f0"];
   1 -- 19 [color="#f0f0f0"];
   7 -- 19 [color="#f0f0f0"];
   14 -- 19 [color="#f0f0f0"];
   6 -- 20 [color="#f0f0f0"];
   11 -- 20 [color="#f0f0f0"];
}
`;

export const bridgesDot = `graph G {
   node [shape=circle, fixedsize=true, width=0.3, style=filled, fillcolor="#303030", color="#f0f0f0", fontcolor="#f0f0f0", fontname="Courier", fontsize="10pt"];
   bgcolor="transparent";
   layout = fdp;
   0;
   1;
   2;
   3;
   4;
   5;
   6;
   7;
   8;
   9;
   10;
   11;
   subgraph cluster0 {
      pencolor="#f0f0f0"
      0;
      1;
      2;
   }
   subgraph cluster1 {
      pencolor="#f0f0f0"
      3;
      4;
      5;
   }
   0 -- 1 [color="#f0f0f0"];
   0 -- 2 [color="#f0f0f0"];
   1 -- 3 [color="#f0f0f0"];
   1 -- 4 [color="#f0f0f0"];
   3 -- 4 [color="#f0f0f0"];
   4 -- 5 [color="#f0f0f0"];
}
`;

export const multipleConstraintsDot = `graph G {
   node [shape=circle, fixedsize=true, width=0.3, style=filled, fillcolor="#303030", color="#f0f0f0", fontcolor="#f0f0f0", fontname="Courier", fontsize="10pt"];
   bgcolor="transparent";
   layout = fdp;
   0;
   1;
   2;
   3;
   4;
   5;
   6;
   7;
   8;
   9;
   10;
   11;
   12;
   13;
   14;
   subgraph cluster0 {
      pencolor="#f0f0f0"
      1;
      2;
      3;
      4;
      5;
   }
   subgraph cluster1 {
      pencolor="#f0f0f0"
      10;
      13;
   }
   subgraph cluster2 {
      pencolor="#f0f0f0"
      12;
   }
   0 -- 1 [color="#f0f0f0"];
   0 -- 2 [color="#f0f0f0"];
   1 -- 3 [color="#f0f0f0"];
   2 -- 3 [color="#f0f0f0"];
   2 -- 4 [color="#f0f0f0"];
   0 -- 5 [color="#f0f0f0"];
   1 -- 5 [color="#f0f0f0"];
   3 -- 6 [color="#f0f0f0"];
   5 -- 6 [color="#f0f0f0"];
   1 -- 7 [color="#f0f0f0"];
   6 -- 7 [color="#f0f0f0"];
   1 -- 8 [color="#f0f0f0"];
   3 -- 8 [color="#f0f0f0"];
   6 -- 9 [color="#f0f0f0"];
   7 -- 9 [color="#f0f0f0"];
   2 -- 10 [color="#f0f0f0"];
   2 -- 11 [color="#f0f0f0"];
   5 -- 11 [color="#f0f0f0"];
   7 -- 11 [color="#f0f0f0"];
   1 -- 12 [color="#f0f0f0"];
   6 -- 12 [color="#f0f0f0"];
   10 -- 12 [color="#f0f0f0"];
   0 -- 13 [color="#f0f0f0"];
   5 -- 13 [color="#f0f0f0"];
   9 -- 13 [color="#f0f0f0"];
   10 -- 13 [color="#f0f0f0"];
   12 -- 13 [color="#f0f0f0"];
   3 -- 14 [color="#f0f0f0"];
   4 -- 14 [color="#f0f0f0"];
   5 -- 14 [color="#f0f0f0"];
   6 -- 14 [color="#f0f0f0"];
   11 -- 14 [color="#f0f0f0"];
}
`;