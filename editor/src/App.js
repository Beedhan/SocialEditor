import { MantineProvider } from "@mantine/core";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import "./App.css";
import CustomHeader from "./components/app/CustomHeader";
import CustomNavbar from "./components/app/CustomNavbar";
import MainCanvas from "./components/canvas/MainCanvas";
import MyMoveable from "./MyMoveable";
import store from "./redux/store";

function App() {
  const [target, setTarget] = useState();
  useEffect(() => {
    setTarget(document.querySelector(".target"));
  }, []);

  const setNewTarget = (e) => {
    setTarget(e.target);
  };
  return (
    <Provider store={store}>
      <MantineProvider theme={{ colorScheme: "dark", fontFamily: "Poppins" }}>
        <div className="AppContainer">
          <CustomHeader />
          <CustomNavbar />
          <MainCanvas />
        </div>
      </MantineProvider>
    </Provider>
  );
}

export default App;
