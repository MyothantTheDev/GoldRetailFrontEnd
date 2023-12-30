import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Title = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb="30px">
      <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{ mb: "5px" }}>
        {title}
      </Typography>
      <Typography>{subtitle}</Typography>
    </Box>
  )
}

export default Title