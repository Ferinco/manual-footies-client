import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { useDispatch, useSelector } from "react-redux";
import { store } from "./redux/store";
import { AppProvider } from "./contexts/context";
import { Toaster } from "react-hot-toast";
import { initializeAuth } from "./redux/slices/users";
import { useEffect } from "react";
function App() {
  const state = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeAuth());
  }, [dispatch]);
  const isInitialized = state.isInitialized
  console.log(isInitialized);
  console.log(localStorage.getItem("user"));
  return (
    <>
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
          {
            isInitialized ? <Routes/> : ""
          }
        </BrowserRouter>
      </AppProvider>
    </>
  );
}

export default App;
