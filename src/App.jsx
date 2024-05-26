import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import HomeLayout from "./layout/HomeLayout";
import PrivateRoute from "./routes/PrivateRoute";
import LoadingPage from "./common/ResponseStatus/LoadingPage";

// Lazy load components
const Intern = lazy(() => import("./Page/Intern"));
const InternDetails = lazy(() => import("./Page/InternDetails"));
const Card = lazy(() => import("./Page/Card"));
const Review = lazy(() => import("./Page/Review"));
const HireU = lazy(() => import("./Page/HireU"));
const ApplyForm = lazy(() => import("./components/internShip/ApplyForm"));
const Company = lazy(() => import("./Page/Company"));
const Home = lazy(() => import("./components/company/Home"));
const JobPost = lazy(() => import("./components/company/JobPost"));
const TotalJobPost = lazy(() => import("./components/company/TotalJobPost"));
const AdminHome = lazy(() => import("./components/admin/Home"));
const Admin = lazy(() => import("./Page/Admin"));
const Login = lazy(() => import("./common/Authentication/Login"));
const SignUp = lazy(() => import("./common/Authentication/SignUp"));
const LogOut = lazy(() => import("./components/company/LogOut"));
const ShowCv = lazy(() => import("./components/company/ShowCv"));
const ShowCvDetails = lazy(() => import("./components/company/ShowCvDetails"));
const CompanyPermission = lazy(() => import("./components/admin/CompanyPermission"));
const TotalJobPostAdmin = lazy(() => import("./components/admin/TotalJobPostAdmin"));
const AdminLogOut = lazy(() => import("./components/admin/AdminLogOut"));
const AboutUs = lazy(() => import("./Page/AboutUs"));

function App() {
  return (
    <div>
      <BrowserRouter>
          <Suspense fallback={<div><LoadingPage></LoadingPage></div>}>
            <Routes>
              <Route element={<MainLayout></MainLayout>}>
                <Route path="/">
                  <Route index element={<HomeLayout></HomeLayout>} />
                </Route>
                <Route path="/login" element={<Login></Login>} />
                <Route path="/signup" element={<SignUp></SignUp>} />
                <Route path="/intern-find" element={<Intern></Intern>} />
                <Route path="/about-us" element={<AboutUs></AboutUs>} />

                <Route path="/intern-find/:id" element={<InternDetails></InternDetails>} />

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
                  <Route
                    path="jobPost"
                    element={
                      <PrivateRoute allowedRoles={["company"]}>
                        <JobPost></JobPost>
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="total-job-post"
                    element={
                      <PrivateRoute allowedRoles={["company"]}>
                        <TotalJobPost></TotalJobPost>
                      </PrivateRoute>
                    }
                  />

                  {/* <Route path="approvedCv" element={<h1>ApprovedCv</h1>} /> */}
                  <Route
                    path="showCv"
                    element={
                      <PrivateRoute allowedRoles={["company"]}>
                        <ShowCv></ShowCv>
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="showCv/:id"
                    element={
                      <PrivateRoute allowedRoles={["company"]}>
                        <ShowCvDetails></ShowCvDetails>
                      </PrivateRoute>
                    }
                  />

                  <Route path="deleteCv" element={<h1>deleteCv</h1>} />
                  <Route path="logOut" element={<LogOut></LogOut>} />
                </Route>

                <Route
                  path="/admin"
                  element={
                    <PrivateRoute allowedRoles={["admin"]}>
                      <Admin></Admin>
                    </PrivateRoute>
                  }
                >
                  <Route
                    path=""
                    element={
                      <PrivateRoute allowedRoles={["admin"]}>
                        <AdminHome></AdminHome>
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="Overview"
                    element={
                      <PrivateRoute allowedRoles={["admin"]}>
                        <AdminHome></AdminHome>
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="company-permissions"
                    element={
                      <PrivateRoute allowedRoles={["admin"]}>
                        <CompanyPermission></CompanyPermission>
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="total-job-post"
                    element={
                      <PrivateRoute allowedRoles={["admin"]}>
                        <TotalJobPostAdmin></TotalJobPostAdmin>
                      </PrivateRoute>
                    }
                  />

                  <Route
                    path="logout"
                    element={
                      <PrivateRoute allowedRoles={["admin"]}>
                        <AdminLogOut></AdminLogOut>
                      </PrivateRoute>
                    }
                  />
                </Route>
              </Route>
            </Routes>
          </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;