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

  const handleClose = () => {
    setAnchorEl(null);
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
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          color="primary"
          sx={{ justifyContent: "center" }}
          onClick={handleClose}
        >
          item 1
        </MenuItem>
        <MenuItem sx={{ justifyContent: "center" }} onClick={handleClose}>
          item 2
        </MenuItem>
        <MenuItem sx={{ justifyContent: "center" }} onClick={handleClose}>
          item 3
        </MenuItem>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width={200}
        >
          <Box sx={{ marginTop: "1rem" }}>
            <Typography>slider label</Typography>
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
            <Typography>slider label</Typography>
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
            <Typography>slider label</Typography>
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
            <Typography>slider label</Typography>
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
