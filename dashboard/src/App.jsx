import "./App.css";
import { useEffect, useState } from "react";
import Router from "./router/Router";
import { getRoutes } from "./router/routes";
import publicRoutes from "./router/routes/publicRoutes";

function App() {
  const [allRoutes, setAllRoutes] = useState([...publicRoutes]);
  console.log("All Routes: ", allRoutes);

  useEffect(() => {
    const routes = getRoutes();
    console.log(routes);
    setAllRoutes([...allRoutes, routes]);
  }, []);

  return <Router allRoutes={allRoutes} />;
}

export default App;
