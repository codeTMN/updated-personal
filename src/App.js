// import logo from "./logo.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import "./components/Header.css";
import Contact from "./components/Contact";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [activePage, setActivePage] = useState("header");

  const handleClose = () => {
    setActivePage("header");
  };

  // const renderContent = () => {
  //   switch (activePage) {
  //     case "contact":
  //       return <Contact handleClose={handleClose} />;
  //     case "about":
  //       return <About handleClose={handleClose} />;
  //     default:
  //       return <Header setActivePage={setActivePage} />;
  //   }
  // };

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        <motion.div
          key={activePage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* {renderContent()} */}
        </motion.div>
      </AnimatePresence>
      <BrowserRouter>
        <Routes>
          <Route index element={<Header />}></Route>
          <Route path="/header" element={<Header />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Header onClick={() => setActivePage("header")}></Header> */}
      {/* <header className="App-header"></header> */}
      {/* <About onClick={() => setActivePage("about")}></About> */}
      {/* <Contact onClick={() => setActivePage("contact")}></Contact> */}
      {/* <ContactRest></ContactRest> */}
      {/* {renderContent()} */}
    </div>
  );
}

export default App;
