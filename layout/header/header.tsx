import React from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";


export default function Header() {
  
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2", boxShadow: 3 }}>
      <Toolbar>
        {/* Menu Icon */}
        <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>

        {/* Title */}
        <Typography
          variant="h6"
          component="div"
          align="center"
          sx={{ flexGrow: 1, fontWeight: "bold" }}
        >
          Calculator App
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Link href="/cms" passHref>
            <Button
              sx={{
                backgroundColor: "#1976d2",
                color: "#fff",
                "&:hover": { backgroundColor: "#5c6bc0" },
              }}
            >
              Matrix Calculator
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
