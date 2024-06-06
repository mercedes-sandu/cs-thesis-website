import { Box, useTheme } from "@mui/material";
import Header from "./components/Header.tsx";
import Introduction from "./components/Introduction.tsx";
import PCG from "./components/PCG.tsx";
import GraphTheory from "./components/GraphTheory.tsx";
import SATSolvers from "./components/SATSolvers.tsx";
import GraphConstraints from "./components/GraphConstraints.tsx";
import Conclusion from "./components/Conclusion.tsx";
import Footer from "./components/Footer.tsx";
import Applications from "./components/Applications.tsx";

function HomePage() {
  const theme = useTheme();
  
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        padding: "5%",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Header />
      <Introduction />
      <PCG />
      <GraphTheory />
      <SATSolvers />
      <GraphConstraints />
      <Applications />
      <Conclusion />
      <Footer />
    </Box>
  );
}

export default HomePage;
