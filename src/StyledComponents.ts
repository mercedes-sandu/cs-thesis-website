import { Divider, Link, styled } from "@mui/material";

export const StyledDivider = styled(Divider)(({ theme }) => ({
    width: "100%",
    backgroundColor: theme.palette.text.primary,
}));

export const BoldText = styled("span")(({ theme }) => ({
    fontWeight: 700,
}));

export const ItalicText = styled("span")(({ theme }) => ({
    fontStyle: "italic",
}));

export const StyledLink = styled(Link)(({ theme }) => ({
    color: theme.palette.primary.main,
    "&:hover": {
        color: theme.palette.secondary[9],
        transition: "color 0.2s ease-in-out",
    },
}));