import logo from "./logo.svg";
import "./App.css";
import { Figma, ToDo } from "./pages";
import { Link, Route, Routes } from "react-router-dom";
import { Button, Stack } from "@mui/material";


function App() {
  return (
   <div className="app">
    <Stack direction="row" spacing={2} justifyContent='center' mb={4} p={2} >
      <Button component={Link} to={'figma'} variant={'contained'} size={'small'}>Figma_ს თასქი</Button>
      <Button component={Link} to={'todo'} variant={'contained'} size={'small'}>todo_ს თასქი</Button>
    </Stack>
    <Routes>
      <Route element={<Figma/>} path="/figma" /> 
      <Route element={<ToDo/>} path="/todo" /> 
   </Routes>
   </div>
  );
}

export default App;
