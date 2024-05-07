import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import HomeLayout from "./layout/HomeLayout";
import Intern from "./Page/Intern";
import InternDetails from "./Page/InternDetails";
// import ApplyForm from "./components/ApplyForm";
import Card from "./Page/Card";
import Review from "./Page/Review";
import HireU from "./Page/HireU";
import ApplyForm from "./components/internShip/ApplyForm";
import Company from "./Page/Company";
import Home from "./components/company/Home";
import JobPost from "./components/company/JobPost";
import TotalJobPost from "./components/company/TotalJobPost";
// import ShowCv from "./components/ShowCv";
import AdminHome from "./components/admin/Home";
import Admin from "./Page/Admin";
import Login from "./common/Authentication/Login";
import SignUp from "./common/Authentication/SignUp";
import PrivateRoute from "./routes/PrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";
import LogOut from "./components/company/LogOut";
import ShowCv from "./components/company/ShowCv";
import ShowCvDetails from "./components/company/ShowCvDetails";
import CompanyPermission from "./components/admin/CompanyPermission";
import TotalJobPostAdmin from "./components/admin/TotalJobPost";

function Old() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route element={<MainLayout></MainLayout>}>
              <Route path="/">
                <Route index element={<HomeLayout></HomeLayout>} />
              </Route>
              <Route path="/intern-find" element={<Intern></Intern>} />
              <Route
                path="/intern-find/:id"
                element={<InternDetails></InternDetails>}
              />

              
              <Route
                path="/apply-intern/:id"
                element={
                  <PrivateRoute allowedRoles={["intern"]}>
                    <ApplyForm></ApplyForm>
                  </PrivateRoute>
                }
              />
              <Route
                path="/applied-company"
                element={
                  <PrivateRoute allowedRoles={["intern"]}>
                    <Card></Card>
                  </PrivateRoute>
                }
              />
              <Route
                path="/review"
                element={
                  <PrivateRoute allowedRoles={["intern"]}>
                    <Review></Review>
                  </PrivateRoute>
                }
              />
              <Route
                path="/hire"
                element={
                  <PrivateRoute allowedRoles={["intern"]}>
                    <HireU></HireU>
                  </PrivateRoute>
                }
              />

              <Route path="/login" element={<Login></Login>} />
              <Route path="/signup" element={<SignUp></SignUp>} />
              {/* company */}
              {/* <PrivateRoute allowedRoles={["company"]}> */}

              <Route
                path="/company"
                element={
                  <PrivateRoute allowedRoles={["company"]}>
                    <Company></Company>
                  </PrivateRoute>
                }
              >
                <Route
                  path=""
                  element={
                    <PrivateRoute allowedRoles={["company"]}>
                      <Home></Home>
                    </PrivateRoute>
                  }
                />
                <Route
                  path="Overview"
                  element={
                    <PrivateRoute allowedRoles={["company"]}>
                      <Home></Home>
                    </PrivateRoute>
                  }
                />
                <Route path="jobPost" element={<JobPost></JobPost>} />
                <Route
                  path="total-job-post"
                  element={<TotalJobPost></TotalJobPost>}
                />

                {/* <Route path="approvedCv" element={<h1>ApprovedCv</h1>} /> */}
                <Route path="showCv" element={<ShowCv></ShowCv>} />
                <Route
                  path="showCv/:id"
                  element={<ShowCvDetails></ShowCvDetails>}
                />

                <Route path="deleteCv" element={<h1>deleteCv</h1>} />
                <Route path="logOut" element={<LogOut></LogOut>} />
              </Route>

              <Route path="/admin" element={<Admin></Admin>}>
                <Route path="" element={<AdminHome></AdminHome>} />
                <Route path="Overview" element={<AdminHome></AdminHome>} />
                <Route
                  path="company-permissions"
                  element={<CompanyPermission></CompanyPermission>}
                />
                <Route
                  path="total-job-post"
                  element={<TotalJobPostAdmin></TotalJobPostAdmin>}
                />
              </Route>
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default Old;
