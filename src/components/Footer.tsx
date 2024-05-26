import { Box, Typography } from "@mui/material";
import { StyledLink } from "../StyledComponents";

function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pt: 3,
      }}
    >
      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <StyledLink
          href="https://mercedessandu.com"
          variant="footerP"
          rel="noopener noreferrer"
          target="_blank"
        >
          Mercedes Sandu
        </StyledLink>
        <Typography variant="footerP">//</Typography>
        {/* TODO: add */}
        <StyledLink
          href="#"
          variant="footerP"
          rel="noopener noreferrer"
          target="_blank"
        >
          Thesis
        </StyledLink>
        <Typography variant="footerP">//</Typography>
        <StyledLink
          href="https://github.com/ianhorswill/CatSAT"
          variant="footerP"
          rel="noopener noreferrer"
          target="_blank"
        >
          CatSAT
        </StyledLink>
        <Typography variant="footerP">//</Typography>
        <StyledLink
          href="https://github.com/ianhorswill/ImaginariumCore"
          variant="footerP"
          rel="noopener noreferrer"
          target="_blank"
        >
          Imaginarium
        </StyledLink>
      </Box>
    </Box>
  );
}

export default Footer;
