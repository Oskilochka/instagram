import React from "react";
import Navbar from "../components/library/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import AuthPage from "../pages/AuthPage";
import {routes} from "../Routes/routes";
import {UserContextProvider} from "../contexts";
import {ThemeContextProvider} from "../contexts/ThemeContextProvider";

function App() {
  const isAuth = false
  return (
    <BrowserRouter>
      <UserContextProvider>
        <ThemeContextProvider>
        <div className="main">
          {/*
            if login then show main home else show login page
          */}
          <Navbar/>

          <Routes>
            <Route path={routes.home} element={isAuth ? <>Home</> : <AuthPage/>}/>
            <Route path={routes.profile} element={<>profile</>}>
              <Route path={routes.profile_saved} element={<>profile_saved</>}/>
              <Route path={routes.profile_tagged} element={<>profile_tagged</>}/>
              <Route path={routes.profile_settings} element={<>profile_settings</>}/>
              <Route path={routes.profile_videos} element={<>profile_videos</>}/>
            </Route>
            <Route path={routes.direct} element={<>direct</>}/>
            <Route path={routes.explore} element={<>explore</>}/>
            {/*// /!* Authorization *!/*/}
            {/*// <Route path={navigationLinks.login} element={<AuthPage />} />*/}
            {/*//*/}
            {/*// /!* Main content *!/*/}
            {/*// <Route path="/" element={<>*/}
            {/*//   <Navbar />*/}
            {/*//   Content*/}
            {/*// </> }>*/}
            {/*// </Route>*/}
            {/*//*/}
            {/*// /!* Additional Pages *!/*/}
            {/*//*/}
            {/*// /!* Unathorized*!/*/}
            {/*// <Route path={navigationLinks.page400} element={<>401 Not found </>} />*/}
            {/*// /!* Access Forbidden *!/*/}
            {/*// <Route path={navigationLinks.page403} element={<>403 Not found </>} />*/}
            {/*// <Route path={navigationLinks.page404} element={<>404 Not found </>} />*/}
            {/*// /!*<Navigate to={"404"} replace={true} />*!/*/}
            {/*//*/}
            {/*// <Route path="/*" element={ <Navigate to={navigationLinks.page404} replace /> } />*/}
          </Routes>
        </div>
        </ThemeContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
