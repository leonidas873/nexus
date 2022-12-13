import React from 'react';
import './App.css';
import { Eti, ToDo } from './pages';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className=" m-auto max-w-[1440px]">
      <div className="mx-auto my-5 flex w-max gap-2">
        <Link to={'eti'} className="rounded-md bg-violet-dark p-1 text-xs text-white">
          Figma_ს თასქი
        </Link>
        <Link to={'todo'} className="rounded-md bg-violet-dark p-1 text-xs text-white">
          todo_ს თასქი
        </Link>
      </div>
      <Routes>
        <Route element={<Eti />} path="/eti" />
        <Route element={<ToDo />} path="/todo" />
      </Routes>
    </div>
  );
}

export default App;
