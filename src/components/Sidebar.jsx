import { AccountBox, Group, Home, ModeNight, Pages, Person, Settings, Storefront } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import React from "react";
const Sidebar = ({mode,setMode}) => {
  return (
    <Box
    
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
        <Box position={"fixed"}>
        <List>
            <ListItem disablePadding>
                <ListItemButton Component="a" href="#Home">
                    <ListItemIcon>
                        <Home/>
                    </ListItemIcon>
                    <ListItemText primary="Homepage">

                    </ListItemText>
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton Component="a" href="#Pages">
                    <ListItemIcon>
                        <Pages/>
                    </ListItemIcon>
                    <ListItemText primary="Pages">

                    </ListItemText>
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton Component="a" href="#Group">
                    <ListItemIcon>
                        <Group/>
                    </ListItemIcon>
                    <ListItemText primary="Group">

                    </ListItemText>
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton Component="a" href="#MarketPlace">
                    <ListItemIcon>
                        <Storefront/>
                    </ListItemIcon>
                    <ListItemText primary="MarketPlace">

                    </ListItemText>
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton Component="a" href="#Firends">
                    <ListItemIcon>
                        <Person/>
                    </ListItemIcon>
                    <ListItemText primary="Firends">

                    </ListItemText>
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton Component="a" href="#Setting">
                    <ListItemIcon>
                        <Settings/>
                    </ListItemIcon>
                    <ListItemText primary="Setting">

                    </ListItemText>
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton Component="a" href="#Profile">
                    <ListItemIcon>
                        <AccountBox/>
                    </ListItemIcon>
                    <ListItemText primary="Profile">

                    </ListItemText>
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton Component="a" href="#Profile">
                    <ListItemIcon>
                        <ModeNight/>
                    </ListItemIcon>
                    <Switch onChange={e=>setMode(mode==="light"?"dark":"light")}/>
                </ListItemButton>
            </ListItem>
        </List>
        </Box>
    </Box>
  );
};
export default Sidebar;
