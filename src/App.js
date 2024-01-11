import Footer from "./components/Footer";
import Header from "./components/Header";
import style from "./App.module.css";
import Content from "./components/Content";
import { useState } from "react";
import AppRouter from "./components/AppRouter/AppRouter";

function App() {
  const [light, setLight] = useState(true);

  function changeLight(val) {
    setLight(val);
  }
  return (
    <div className={light ? style.App : style.AppDark}>
      <>
        <Header fun={changeLight} />
        <AppRouter light={light} />
        <Footer light={light} />
      </>
    </div>
  );
}

{
  // <Content light={light} />;
}
export default App;
