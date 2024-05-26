import SyntaxHighlighter from "react-syntax-highlighter";
import { Box, Typography, useTheme } from "@mui/material";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface CodeSnippetProps {
  fileName: string;
  codeSnippet: string;
}

function CodeSnippet(props: CodeSnippetProps) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        pl: 3,
        pr: 3,
        pt: 1,
        pb: 1,
        backgroundColor: theme.palette.secondary[1],
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{
        display: "flex",
        flexDirection: "row",
      }}>
        <Box sx={{
            width: "20%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
        }}>
            <Typography>c</Typography>
            <Typography>c</Typography>
            <Typography>c</Typography>
        </Box>
      </Box>
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
  );
}

export default CodeSnippet;
