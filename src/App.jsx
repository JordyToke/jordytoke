import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
