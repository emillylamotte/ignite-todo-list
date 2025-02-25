import React from "react";
import { Header } from "./style";
import AppLogo from './assets/Logo.svg';
import { InputTask } from "./components/InputTask";

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
