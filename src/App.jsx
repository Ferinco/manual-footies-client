import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { AppProvider } from "./contexts/context";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Provider store={store}>
        <AppProvider>
          <BrowserRouter>
          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              className: "",
              duration: 5000,
              style: {
                background: "#fff",
                color: "#000",
              },

              success: {
                duration: 5000,
                theme: {
                  primary: "blue",
                  secondary: "black",
                },
              },
            }}
          />
            <Routes />
          </BrowserRouter>
        </AppProvider>
      </Provider>
    </>
  );
}

export default App;
