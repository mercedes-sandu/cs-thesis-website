import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { StyledDivider } from "../StyledComponents";
import GitHubIcon from "@mui/icons-material/GitHub";
import { accentColor } from "../App";

function Header() {
  const theme = useTheme();

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
        <Box width="48px" height="38px" />
        <Typography variant="siteHeader">GRAPH CONSTRAINTS</Typography>
        <IconButton onClick={handleGitHubClick}>
          <GitHubIcon
            sx={{
              color: theme.palette.text.primary,
              fontSize: "2rem",
              "&:hover": {
                color: accentColor,
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
