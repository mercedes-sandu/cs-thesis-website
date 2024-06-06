import { Graphviz } from "graphviz-react";
import { Box } from "@mui/material";

interface GraphProps {
  dot: string;
  width: number;
  height: number;
}

function Graph(props: GraphProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mb: 3,
      }}
    >
      <Graphviz
        dot={props.dot}
        options={{ width: props.width, height: props.height }}
      />
    </Box>
  );
}

export default Graph;
