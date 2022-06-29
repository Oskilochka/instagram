import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthPage } from "../pages/AuthPage";
import { navigationLinks } from "./navigationLinks";
import { Navbar } from "../components";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          {/* Authorization */}
          <Route path={navigationLinks.login} element={<AuthPage />} />

          {/* Main content */}
          <Route path="/" element={<>
            <Navbar />
            Content
          </> }>
          </Route>

          {/* Additional Pages */}

          {/* Unathorized*/}
          <Route path={navigationLinks.page400} element={<>401 Not found </>} />
          {/* Access Forbidden */}
          <Route path={navigationLinks.page403} element={<>403 Not found </>} />
          <Route path={navigationLinks.page404} element={<>404 Not found </>} />
          {/*<Navigate to={"404"} replace={true} />*/}

          <Route path="/*" element={ <Navigate to={navigationLinks.page404} replace /> } />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
