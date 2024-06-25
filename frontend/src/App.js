// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { HelmetProvider, Helmet } from "react-helmet-async";
// import { ThemeProvider } from '@mui/material/styles';
// import CssBaseline from "@mui/material/CssBaseline";
// import "aos/dist/aos.css";

// import theme from "./theme/theme";
// import Layout from "./layout/Layout";
// import Home from "./pages/Home";
// import Login from "./components/Login";  // Login bileşenini import et

// const App = () => {
//   return (
//     <HelmetProvider>
//       <Helmet
//         titleTemplate="%s | Selva's AI Journey Profile"
//         defaultTitle="Selva's AI Journey Profile"
//       />
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <BrowserRouter>
//           <Layout>
//             <Routes>
//               <Route path="/login" element={<Login />} />  // Login bileşeni için route ekle
//               <Route path="/" element={<Home />} />
//             </Routes>
//           </Layout>
//         </BrowserRouter>
//       </ThemeProvider>
//     </HelmetProvider>
//   );
// };

// export default App;

import React, { useState, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import "aos/dist/aos.css";

import theme from "./theme/theme";
import Layout from "./layout/Layout";
import Home from "./pages/Home";

const App = () => {  
  return (
    <HelmetProvider>
      <Helmet 
        titleTemplate="%s | Selva's AI Journey Profile"
        defaultTitle=" Selva's AI Journey Profile"
      />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route exact path='/' element={<Home />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;