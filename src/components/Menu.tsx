import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
export const Menu = () => {
  return (
    <div>
      <IconButton
        color="primary"
        aria-label="more"
        id="long-button"
        // aria-controls={open ? "long-menu" : undefined}
        // aria-expanded={open ? "true" : undefined}
        // aria-haspopup="true"
        // onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
    </div>
  );
};
