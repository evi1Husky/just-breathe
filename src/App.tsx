import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Circle } from "./components/Circle";
import { BreathingMenu } from "./components/BreathingMenu";

export const App = () => {
  return (
    <Box
      display="flex"
      gap={2}
      flexDirection="column"
      justifyContent="space-evenly"
      alignItems="center"
      minHeight="100vh"
    >
      <Box
        minWidth="100%"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <Box sx={{ position: "absolute", right: 50 }}>
          <BreathingMenu></BreathingMenu>
        </Box>
        <Typography
          variant="h1"
          align="center"
          sx={{
            backgroundcolor: "primary",
            backgroundImage: `linear-gradient(45deg, rgb(120, 226, 255), rgb(111, 138, 255))`,
            backgroundSize: "100%",
            backgroundRepeat: "repeat",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          SOME TEXT
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="25rem"
      >
        <Circle />
      </Box>
      <Button variant="contained" color="primary">
        button
      </Button>
    </Box>
  );
};
