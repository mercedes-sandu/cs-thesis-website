import { Divider, styled } from "@mui/material";

export const StyledDivider = styled(Divider)(({ theme }) => ({
    width: "100%",
    backgroundColor: theme.palette.text.primary,
}));