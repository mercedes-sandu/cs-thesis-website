import { Box, useTheme } from "@mui/material";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import PCG from "./components/PCG";
import GraphTheory from "./components/GraphTheory";
import SATSolvers from "./components/SATSolvers";
import GraphConstraints from "./components/GraphConstraints";
import Conclusion from "./components/Conclusion";
import Footer from "./components/Footer";

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
      <Conclusion />
      <Footer />
    </Box>
  );
}

export default HomePage;
