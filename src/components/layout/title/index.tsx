import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import React from "react";
import { TitleProps } from "../../pages/module";

const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box mb="30px" sx={{ textAlign: 'start' }}>
            <Typography variant="h3" sx={{ marginBottom: 2, color: '#ffffff', fontWeight: '700' }}>
                {title}
            </Typography>
            <Typography variant="h6" sx={{ marginBottom: 4, color: '#70d8bd' }}>
                {subtitle}
            </Typography>
        </Box>
    );
};

export default Title;
