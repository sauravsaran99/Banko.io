
import { Navbar } from "./Navbar/Navbar";
import { Routers } from "./Routers/Routers";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

function App() {

  const storeValue = useSelector(store => store.nav)
  const [value, setValue] = useState(storeValue.nav);
  useEffect(() => {
    setValue(storeValue.nav)
  }, [storeValue.nav])
  
  return (
    <>
    {value ? <Navbar></Navbar>: null}
    <Routers></Routers>
    </>
  );
}

export default App;
