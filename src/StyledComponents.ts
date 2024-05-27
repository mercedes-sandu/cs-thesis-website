import { Divider, Link, styled } from "@mui/material";
import { accentColor } from "./App";

export const StyledDivider = styled(Divider)(({ theme }) => ({
    width: "100%",
    backgroundColor: theme.palette.text.primary,
}));

export const BoldText = styled("span")(() => ({
    color: accentColor,
    fontWeight: 700,
}));

export const ItalicText = styled("span")(() => ({
    fontStyle: "italic",
}));

export const StyledLink = styled(Link)(({ theme }) => ({
    color: theme.palette.primary.main,
    "&:hover": {
        color: accentColor,
        transition: "color 0.2s ease-in-out",
    },
}));