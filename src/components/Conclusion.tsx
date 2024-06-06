import { Box, Typography } from "@mui/material";
import SectionStarter from "./SectionStarter.tsx";
import { StyledDivider } from "../StyledComponents";

function Conclusion() {
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
            CONCLUSION
          </Typography>
          <Typography variant="sectionP">
            SAT-based systems are outstanding to utilize in the field of PCG due
            to their flexibility, speed, and high level of expression available
            to the user. However, traditionally, it has been difficult to
            implement the generation of random connected graphs, let alone
            impose other kinds of constraints on a randomly generated graph. By
            expanding CatSAT with support for graph constraints such as
            connectivity, required paths between nodes, and density, users of
            the system can generate graphs as data structures for games in a
            timely manner by creating a problem and adding as many constraints
            as they desire. The expansion of CatSAT in this way also allows
            users to create constraints of their own, provided they have
            sufficient knowledge of logic programming, C# development, and graph
            theory. Problems for graphs can be solved in milliseconds with
            relatively few lines of code, with solutions that can be applied to
            a wide variety of content in video games.
          </Typography>
        </Box>
      </Box>
      <StyledDivider />
    </Box>
  );
}

export default Conclusion;
