
import {  Box } from "@mui/material";
import React from "react";
import Posts from "./Posts";
const Feed = () => {
  return (
    <Box flex={4}
    p={2}
    sx={{ display: { xs: "none", sm: "block" } }}>
     <Posts/>
     <Posts/>
     <Posts/>
     <Posts/>
    </Box>
  );
};
export default Feed;
