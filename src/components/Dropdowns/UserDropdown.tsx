import { useState, MouseEvent } from "react";
import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";

export default function UserDropdown() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex justify-end bg-blue-500">
      <IconButton onClick={handleClick} size="small">
        <Avatar sx={{width:30, height:30}} src="/path-to-user-image.jpg" alt="User" />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose} onClick={handleClose}>
        <MenuItem onClick={() => console.log("Profile Clicked")}>Profile</MenuItem>
        <MenuItem onClick={() => console.log("Settings Clicked")}>Settings</MenuItem>
        <MenuItem onClick={() => console.log("Logout Clicked")}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
