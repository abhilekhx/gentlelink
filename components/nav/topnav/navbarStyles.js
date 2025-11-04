import {
  alignItems,
  display,
  flexDirection,
  flexWrap,
  fontSize,
  justifyContent,
  maxWidth,
} from "@mui/system";

export const styles = {
  navbarContainer: {
    width: "100%",
    backgroundColor: "#83908eff",
    color: "#033",
    height: "auto",
    padding: { xs: "12px 0", md: "0" },
  },
  contentWrapper: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "space-between",
    alignItems: "center",
    padding: { xs: "0 16px", md: "0 24px" },
    gap: { xs: "12px", md: "0" },
  },
  contactInfo: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: { xs: "12px", md: "24px" },
    alignItems: "center",
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  iconButton: {
    color: "#033",
    backgroundColor: "#83908eff",
    "&:hover": {
      backgroundColor: "#b1bdbb",
    },
    padding: "8px",
  },
  contactText: {
    display: { xs: "none", sm: "block" },
    fontSize: "0.875",
  },
};
