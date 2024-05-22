import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { StyledDivider } from "../StyledComponents";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";

function Header() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <StyledDivider />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          pt: 1,
          pb: 1,
        }}
      >
        <IconButton>
          <MenuIcon
            sx={{ color: theme.palette.text.primary, fontSize: "2rem" }}
          />
        </IconButton>
        <Typography variant="siteHeader">GRAPH CONSTRAINTS</Typography>
        <IconButton>
          <GitHubIcon
            sx={{ color: theme.palette.text.primary, fontSize: "2rem" }}
          />
        </IconButton>
      </Box>
      <StyledDivider />
    </Box>
  );
}

export default Header;
