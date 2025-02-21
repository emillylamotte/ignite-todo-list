import React from "react";
import { Header, Home } from "./style";
import AppLogo from './assets/Logo.svg';
import { InputTask } from "./components/InputTask";
import { TaskView } from "./components/TaskView";

function App() {
  return (
    <>
      <Header>
        <img src={AppLogo} className="logo" alt="Vite logo" />
      </Header>
      <InputTask />
    </>
  )
}

export default App
