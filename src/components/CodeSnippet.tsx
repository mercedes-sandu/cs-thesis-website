import SyntaxHighlighter from "react-syntax-highlighter";
import { Box, Typography, useTheme } from "@mui/material";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import csharpLogo from "../csharp-logo.svg";

interface CodeSnippetProps {
  fileName?: string;
  codeSnippet: string;
  showTitle: boolean;
  nextToFigure?: boolean;
}

function CodeSnippet(props: CodeSnippetProps) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        mb: 3,
      }}
    >
      <Box
        sx={{
          width: "fit-content",
          height: "fit-content",
          maxWidth: "80%",
          minWidth: props.nextToFigure ? "80%" : "40%",
          pt: props.showTitle ? 3 : 0,
          pl: 3,
          pr: 3,
          backgroundColor: theme.palette.secondary[1],
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {props.showTitle && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "20%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
              }}
            >
              <Box
                sx={{
                  width: "16px",
                  minWidth: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  aspectRatio: 1,
                  backgroundColor: theme.palette.secondary[9],
                  mr: 1,
                }}
              />
              <Box
                sx={{
                  width: "16px",
                  minWidth: "16px",
                  height: "16px",
                  aspectRatio: 1,
                  borderRadius: "50%",
                  backgroundColor: theme.palette.secondary[10],
                  mr: 1,
                }}
              />
              <Box
                sx={{
                  width: "16px",
                  minWidth: "16px",
                  height: "16px",
                  aspectRatio: 1,
                  borderRadius: "50%",
                  backgroundColor: theme.palette.secondary[11],
                  mr: 1,
                }}
              />
            </Box>
            <Box
              sx={{
                width: "60%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={csharpLogo} width="20px" height="20px" />
              <Typography variant="codeP" sx={{ ml: 1 }}>
                {props.fileName}
              </Typography>
            </Box>
            <Box sx={{ width: "20%" }} />
          </Box>
        )}

        <SyntaxHighlighter
          showLineNumbers
          showInlineLineNumbers
          wrapLines
          wrapLongLines
          language="csharp"
          style={atomOneDark}
        >
          {props.codeSnippet}
        </SyntaxHighlighter>
      </Box>
    </Box>
  );
}

export default CodeSnippet;
