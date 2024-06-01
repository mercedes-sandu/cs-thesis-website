import React, {
  PropsWithChildren,
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
    open: boolean;
    title: string;
    includeMargin: boolean;
  }>
> = ({ open, children, title, includeMargin }) => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(open);
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(open ? undefined : 0);

  const toggleExpanded = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!height || !isOpen || !ref.current) return undefined;

    const resizeObserver = new ResizeObserver((el) => {
      setHeight(el[0].contentRect.height);
    });
    resizeObserver.observe(ref.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, [height, isOpen]);

  useEffect(() => {
    if (isOpen) setHeight(ref.current?.getBoundingClientRect().height);
    else setHeight(0);
  }, [isOpen]);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
          {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Box>
      <Box
        sx={{
          height: isOpen ? height : 0,
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
