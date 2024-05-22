import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { StyledDivider } from "../StyledComponents";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";

function Header() {
  const theme = useTheme();

  function handleMenuClick(): void {
    // TODO: implement sidebar
  }

  function handleGitHubClick(): void {
    window.open("https://github.com/mercedes-sandu", "_blank");
  }

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
        <IconButton onClick={handleMenuClick}>
          <MenuIcon
            sx={{
              color: theme.palette.text.primary,
              fontSize: "2rem",
              "&:hover": {
                color: theme.palette.secondary[9],
                transition: "color 0.2s ease-in-out",
              },
            }}
          />
        </IconButton>
        <Typography variant="siteHeader">GRAPH CONSTRAINTS</Typography>
        <IconButton onClick={handleGitHubClick}>
          <GitHubIcon
            sx={{
              color: theme.palette.text.primary,
              fontSize: "2rem",
              "&:hover": {
                color: theme.palette.secondary[9],
                transition: "color 0.2s ease-in-out",
              },
            }}
          />
        </IconButton>
      </Box>
      <StyledDivider />
    </Box>
  );
}

export default Header;
