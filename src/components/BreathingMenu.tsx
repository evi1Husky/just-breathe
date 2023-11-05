import { useState } from "react";
import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { BreathingMenuProps } from "../types";

export const BreathingMenu = ({
  breathingTechnique,
  setBreathingTechnique,
}: BreathingMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(null);
    const value = event.currentTarget.dataset.myValue;
    switch (value) {
      case "4-7-8":
        setBreathingTechnique({
          breatheIn: 4,
          hold: 7,
          breatheOut: 8,
          hold2: 1,
        })
        break;
      case "box breathing":
        setBreathingTechnique({
          breatheIn: 4,
          hold: 4,
          breatheOut: 4,
          hold2: 4,
        });
        break;
      default:
    
    }
  };

  return (
    <div>
      <IconButton
        color="primary"
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
          sx: {
            backgroundColor: "rgb(24, 29, 44)",
          },
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          data-my-value={"4-7-8"}
          sx={{ justifyContent: "center" }}
          onClick={handleClose}
        >
          4-7-8
        </MenuItem>
        <MenuItem
          sx={{ justifyContent: "center" }}
          data-my-value={"box breathing"}
          onClick={handleClose}
        >
          box breathing
        </MenuItem>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width={200}
        >
          <Box sx={{ marginTop: "1rem" }}>
            <Typography>breathe in {breathingTechnique.breatheIn}s</Typography>
            <Slider
              sx={{ width: 150 }}
              size="small"
              aria-label="Small steps"
              defaultValue={4}
              step={1}
              min={1}
              max={15}
            />
          </Box>
          <Box>
            <Typography>hold {breathingTechnique.hold}s</Typography>
            <Slider
              sx={{ width: 150 }}
              size="small"
              aria-label="Small steps"
              defaultValue={4}
              step={1}
              min={1}
              max={15}
            />
          </Box>
          <Box>
            <Typography>
              breathe out {breathingTechnique.breatheOut}s
            </Typography>
            <Slider
              sx={{ width: 150 }}
              size="small"
              aria-label="Small steps"
              defaultValue={4}
              step={1}
              min={1}
              max={15}
            />
          </Box>
          <Box>
            <Typography>hold {breathingTechnique.hold2}s</Typography>
            <Slider
              sx={{ width: 150 }}
              size="small"
              aria-label="Small steps"
              defaultValue={4}
              step={1}
              min={1}
              max={15}
            />
          </Box>
        </Box>
      </Menu>
    </div>
  );
};
