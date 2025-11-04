"use client";
import { useState } from "react";
import {
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import CompareIcon from "@mui/icons-material/Compare";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Nav() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItem = (
    <>
      <Link href="/" passHref>
        <Button
          sx={{
            color: "#033",
            fontSize: isSmallScreen ? "0.8rem" : "1rem",
          }}
        >
          Home
        </Button>
      </Link>
      <Link href="/about" passHref>
        <Button
          sx={{
            color: "#033",
            fontSize: isSmallScreen ? "0.8rem" : "1rem",
          }}
        >
          About
        </Button>
      </Link>
      <Link href="/contact" passHref>
        <Button
          sx={{
            color: "#033",
            fontSize: isSmallScreen ? "0.8rem" : "1rem",
          }}
        >
          Contact
        </Button>
      </Link>
      <Button
        sx={{
          color: "#033",
          fontSize: isSmallScreen ? "0.8rem" : "1rem",
        }}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Pages
      </Button>
      {console.log(anchorEl)}
      <Menu anchorEl={anchorEl} onClose={handleClose} open={Boolean(anchorEl)}>
        <MenuItem onClose={handleClose}>
          <Link href="/about">About</Link>
        </MenuItem>
        <MenuItem onClose={handleClose}>
          <Link href="/service">Service</Link>
        </MenuItem>
        <MenuItem onClose={handleClose}>
          <Link href="/contact">Contact</Link>
        </MenuItem>
      </Menu>
    </>
  );

  const router = useRouter();
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#b1bdbb",
        boxShadow: 3,
        padding: isSmallScreen ? "0.5rem 0" : "1rem 0",
        display: "flex",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "90%",
          margin: "0 auto",
          flexDirection: isSmallScreen ? "column" : "row",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: isSmallScreen ? "space-between" : "flex-start",
            alignItems: "center",
            width: isSmallScreen ? "100%" : "auto",
            marginBottom: isSmallScreen ? "1rem" : 0,
          }}
        >
          {isSmallScreen && (
            <IconButton>
              <MenuIcon />
            </IconButton>
          )}

          <Typography
            onClick={() => router.push("/")}
            variant="h6"
            sx={{
              color: "black",
              fontSize: isSmallScreen ? "1.2rem" : "1.5rem",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            GentleLink
          </Typography>
        </Box>
        {!isSmallScreen && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {menuItem}
          </Box>
        )}
        {/* Icons and Reservation Button */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: isSmallScreen ? "space-between" : "flex-start",
            width: isSmallScreen ? "100%" : "auto",
            marginTop: isSmallScreen ? "1rem" : 0,
          }}
        >
          <IconButton
            sx={{
              color: "#033",
              marginRight: "0.5rem",
              "&:hover": { backgroundColor: "#055", color: "white" },
            }}
          >
            <ShoppingCartIcon fontSize={isSmallScreen ? "small" : "medium"} />
          </IconButton>

          <IconButton
            sx={{
              color: "#033",
              marginRight: "0.5rem",
              "&:hover": { backgroundColor: "#055", color: "white" },
            }}
          >
            <CompareIcon fontSize={isSmallScreen ? "small" : "medium"} />
          </IconButton>

          <IconButton
            sx={{
              color: "#033",
              marginRight: "0.5rem",
              "&:hover": { backgroundColor: "#055", color: "white" },
            }}
          >
            <LoginIcon fontSize={isSmallScreen ? "small" : "medium"} />
          </IconButton>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#033",
              color: "white",
              borderRadius: "22px",
              padding: isSmallScreen ? "0.3rem 0.8rem" : "0.5rem 1.5rem",
              fontSize: isSmallScreen ? "0.7rem" : "0.9rem",
              "&:hover": { backgroundColor: "#055" },
              display: isSmallScreen ? "none" : "inline-flex",
            }}
          >
            Reservation
          </Button>
          {isSmallScreen && (
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#033",
                borderRadius: "22px",
                padding: "0.3rem 0.8rem",
                fontSize: "0.7rem",
                "&:hover": { backgroundColor: "#055" },
              }}
            >
              Reserve
            </Button>
          )}
        </Box>

        <Box></Box>
      </Box>
    </Box>
  );
}
