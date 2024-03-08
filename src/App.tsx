// App.tsx

import React, { useEffect, useState } from "react";
import NavBar from "./components/navbar";
import AppBar from "./AppBar";
import Startup from "./pages/startup.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChoreList from "./pages/choreList.tsx";

const App: React.FC = () => {
  // console.log(window.ipcRenderer);

  // const [isOpen, setOpen] = useState(false);
  // const [isSent, setSent] = useState(false);
  // const [fromMain, setFromMain] = useState<string | null>(null);

  // const handleToggle = () => {
  //   if (isOpen) {
  //     setOpen(false);
  //     setSent(false);
  //   } else {
  //     setOpen(true);
  //     setFromMain(null);
  //   }
  // };
  // const sendMessageToElectron = () => {
  //   if (window.Main) {
  //     window.Main.sendMessage("Hello I'm from React World");
  //   } else {
  //     setFromMain('You are in a Browser, so no Electron functions are available');
  //   }
  //   setSent(true);
  // };

  // useEffect(() => {
  //   if (isSent && window.Main)
  //     window.Main.on('message', (message: string) => {
  //       setFromMain(message);
  //     });
  // }, [fromMain, isSent]);

  return (
    <Router>
      <AppBar />
      <div className="relative min-h-screen">
        <NavBar />
        <div className="">
          <Routes>
            <Route path="/" element={<Startup />} />
            <Route path="/chore-list" element={<ChoreList />} />
          </Routes>
        </div>
      </div>
    </Router>
    // <div className="flex flex-col h-screen">
    //   {window.Main && (
    //     <div className="flex-none">
    //     </div>
    //   )}
    // </div>
  );
};

export default App;
