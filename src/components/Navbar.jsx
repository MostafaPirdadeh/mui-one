import { Mail, Notifications, Pets } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: { disply: "none" },
}));

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Mosi
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: "30", height: "30" }}
            src="https://media.licdn.com/dms/image/C4D03AQHt_Q2VUFZKjA/profile-displayphoto-shrink_400_400/0/1644404197795?e=1697068800&v=beta&t=MU4e7EA38VIfTWIEQdDNtB4hwUu40c5sq_wwOuP0oBU"
          />
          <UserBox>
            <Avatar
              sx={{ width: "30", height: "30" }}
              src="https://media.licdn.com/dms/image/C4D03AQHt_Q2VUFZKjA/profile-displayphoto-shrink_400_400/0/1644404197795?e=1697068800&v=beta&t=MU4e7EA38VIfTWIEQdDNtB4hwUu40c5sq_wwOuP0oBU"
            />
          </UserBox>
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};
export default Navbar;
