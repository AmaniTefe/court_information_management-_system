// App.jsx

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import Login from "./pages/Login";
import Admin from "./adminpage/admin";
import Admins from "./adminpage/judge";
import Form from "./adminpage/scenes/form";
import Team from "./adminpage/scenes/team";
import Contacts from "./adminpage/scenes/contacts";
import Invoices from "./adminpage/scenes/invoices";
import Calendar from "./adminpage/scenes/calendar/calendar";
import FAQ from "./adminpage/scenes/faq";
import Bar from "./adminpage/scenes/bar";
import Pie from "./adminpage/scenes/pie";
import Line from "./adminpage/scenes/line";
import Geography from "./adminpage/scenes/geography";
import Dashboard from "./adminpage/scenes/dashboard";
import RegistrarDashboard from "./adminpage/scenes/registrardashboard copy";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

const App = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/judge/*" element={<Admins />}>
              <Route index element={<RegistrarDashboard />} />

              <Route path="team" element={<Team />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="form" element={<Form />} />
              <Route path="calendar" element={<Calendar />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="pie" element={<Pie />} />
              <Route path="geography" element={<Geography />} />
            </Route>

            <Route path="/admin/*" element={<Admin />}>
              {/* Add the default route to /admin/dashboard */}
              <Route index element={<Dashboard />} />

              <Route path="team" element={<Team />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="invoices" element={<Invoices />} />
              <Route path="form" element={<Form />} />
              <Route path="calendar" element={<Calendar />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="bar" element={<Bar />} />
              <Route path="pie" element={<Pie />} />
              <Route path="line" element={<Line />} />
              <Route path="geography" element={<Geography />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
