import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { StyledDivider } from "../StyledComponents";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { accentColor } from "../App";

const CollapsibleComponent: React.FC<
  PropsWithChildren<{
    isExpanded: boolean;
    title: string;
    includeMargin: boolean;
  }>
> = ({ isExpanded, children, title, includeMargin }) => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState<boolean>(isExpanded);
  const ref = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);

  const toggleExpanded = useCallback(() => {
    setExpanded((prev) => !prev);
  }, []);

  useEffect(() => {
    if (ref.current) {
      setContentHeight(ref.current.clientHeight);
    }
  }, [children]);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        mb: includeMargin ? 3 : 0,
      }}
    >
      <StyledDivider />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 1,
        }}
      >
        <Typography variant="sectionSubheader">{title}</Typography>
        <IconButton
          onClick={toggleExpanded}
          sx={{
            color: theme.palette.text.primary,
            fontSize: "2rem",
            "&:hover": {
              color: accentColor,
              transition: "color 0.2s ease-in-out",
            },
          }}
        >
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Box>
      <Box
        sx={{
          height: expanded ? contentHeight : 0,
          transition: "height 200ms ease-in-out",
          overflow: "hidden",
          width: "100%",
          pl: 1,
          pr: 1,
          mb: 1,
        }}
      >
        <Box ref={ref}>{children}</Box>
      </Box>
      <StyledDivider />
    </Box>
  );
};

export default CollapsibleComponent;
