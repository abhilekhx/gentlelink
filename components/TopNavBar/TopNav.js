// "use client" tells Next.js this file runs in the browser, not on the server.
// Without "use client", the component is server-only (static or data-fetching only).
// It lets you use hooks (like useState, useEffect), handle user events, and access the DOM.
"use client";
import Box from "@mui/material/Box";
import { Typography, IconButton } from "@mui/material";

import { styles } from "./navbarStyles";

import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import Email from "@mui/icons-material/Email";

export default function NavBar() {
  return (
    <Box component="nav" sx={styles.navbarContainer}>
      <Box sx={styles.contentWrapper}>
        <Box sx={styles.contactInfo}>
          <Box sx={styles.contactItem}>
            <IconButton size="small" sx={styles.iconButton}>
              <PhoneInTalkIcon />
            </IconButton>
            <Typography variant="body2" sx={styles.contactText}>
              +1234567890
            </Typography>
          </Box>

          <Box sx={styles.contactItem}>
            <IconButton size="small" sx={styles.iconButton}>
              <Email />
            </IconButton>
            <Typography variant="body2" sx={styles.contactText}>
              email@gmail.com
            </Typography>
          </Box>
        </Box>
        <Box sx={styles.contactInfo}>
          <Box sx={styles.socialIcons}>
            <IconButton sx={styles.iconButton}>
              <FacebookIcon />
            </IconButton>

            <IconButton sx={styles.iconButton}>
              <InstagramIcon />
            </IconButton>

            <IconButton sx={styles.iconButton}>
              <XIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
