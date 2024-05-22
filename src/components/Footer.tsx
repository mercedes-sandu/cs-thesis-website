import { Box, Typography } from "@mui/material";

function Footer() {
    return (
        <Box sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pt: 3,
        }}>
            <Box sx={{
                width: "50%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
            }}>
                <Typography variant="footerP">Mercedes Sandu</Typography>
                <Typography variant="footerP">//</Typography>
                <Typography variant="footerP">Thesis</Typography>
                <Typography variant="footerP">//</Typography>
                <Typography variant="footerP">CatSAT</Typography>
                <Typography variant="footerP">//</Typography>
                <Typography variant="footerP">Imaginarium</Typography>
            </Box>
        </Box>
    )
}

export default Footer;