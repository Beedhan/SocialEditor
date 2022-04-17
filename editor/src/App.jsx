import { Global, MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { useColorScheme, useLocalStorage } from "@mantine/hooks";
import { useState } from "react";
import { Provider } from "react-redux";
import "./App.css";
import CustomHeader from "./pages/app/CustomHeader";
import CustomNavbar from "./pages/app/CustomNavbar";
import MainCanvas from "./pages/app/MainCanvas";
import store from "./redux/store";

function App() {

  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState(preferredColorScheme);

  const toggleColorScheme = (value) => {
    setColorScheme((colorScheme === 'dark' ? 'light' : 'dark'));
  }

  return (
    <Provider store={store}>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ fontFamily: "Manrope", colorScheme }}>
          <div className="AppContainer">
            <CustomHeader />
            <CustomNavbar />
            <MainCanvas />
          </div>
          <Global
            styles={(theme) => ({
              body: {
                ...theme.fn.fontStyles(),
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
                color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
                lineHeight: theme.lineHeight,
              },
            })}
          />
        </MantineProvider>
      </ColorSchemeProvider>
    </Provider>
  );
}

export default App;
