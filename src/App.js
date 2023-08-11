import Sidebar from "./components/Sidebar";
import Feed from "./components/feed";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar"
import { Box, Stack } from "@mui/material";

function App() {
  return (
    <Box>
      <Navbar/>
      <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
