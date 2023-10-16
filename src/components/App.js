import { useEffect } from "react";
import "./App.css";
import { useTelegram } from "./hooks/useTelegram";
import Header from "./Header/Header";
import { Route, Router, Routes } from "react-router-dom";
import SiteMenu from "./SiteMenu/SiteMenu";

function App() {
  const { onToggleButton, tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<SiteMenu/>}/>
      </Routes>
    </div>
  );
}

export default App;
