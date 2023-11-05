import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Circle } from "./components/Circle";
import { BreathingMenu } from "./components/BreathingMenu";
import { useState } from "react";
import { BreathingTechnique } from "./types";

export const App = () => {
  const [isBreathing, setIsBreathing] = useState(false);
  const [breathingTechnique, setBreathingTechnique] =
    useState<BreathingTechnique>({
      breatheIn: 4,
      hold: 7,
      breatheOut: 8,
      hold2: 1,
    });
  console.log(breathingTechnique);
  const handleBreatheButtonClick = () => {
    !isBreathing ? setIsBreathing(true) : setIsBreathing(false);
  };

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
          <BreathingMenu
            breathingTechnique={breathingTechnique}
            setBreathingTechnique={setBreathingTechnique}
          ></BreathingMenu>
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
          JUST BREATHE
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="25rem"
      >
        <Circle
          isBreathing={isBreathing}
          breathingTechnique={breathingTechnique}
        />
      </Box>
      <Button
        sx={{ minWidth: "6rem" }}
        variant="contained"
        color="primary"
        onClick={handleBreatheButtonClick}
      >
        {!isBreathing ? "breathe" : "stop"}
      </Button>
    </Box>
  );
};
