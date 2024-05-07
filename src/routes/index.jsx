import Admin from "../Page/Admin";
import Card from "../Page/Card";
import Company from "../Page/Company";
import HireU from "../Page/HireU";
import Intern from "../Page/Intern";
import InternDetails from "../Page/InternDetails";
import Review from "../Page/Review";
import Login from "../common/Authentication/Login";
import SignUp from "../common/Authentication/SignUp";
import CompanyPermission from "../components/admin/CompanyPermission";
import AdminHome from "../components/admin/Home";
import TotalJobPostAdmin from "../components/admin/TotalJobPostAdmin";
import TotalJobPost from "../components/admin/TotalJobPostAdmin";
import Home from "../components/company/Home";
import JobPost from "../components/company/JobPost";
import LogOut from "../components/company/LogOut";
import ShowCv from "../components/company/ShowCv";
import ShowCvDetails from "../components/company/ShowCvDetails";
import ApplyForm from "../components/internShip/ApplyForm";
import HomeLayout from "../layout/HomeLayout";

// Public routes
export const publicRoutes = [
  { path: "/", element: <HomeLayout /> },
  { path: "/intern-find", element: <Intern /> },
  { path: "/intern-find/:id", element: <InternDetails /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
];

// Private routes for interns
export const internRoutes = [
  { path: "/apply-intern/:id", element: <ApplyForm /> },
  { path: "/applied-company", element: <Card /> },
  { path: "/review", element: <Review /> },
  { path: "/hire", element: <HireU /> },
];

// Private routes for companies
export const companyRoutes = [
  {
    path: "/company",
    element: <Company />,
    children: [
      { path: "", element: <Home /> },
      { path: "Overview", element: <Home /> },
      { path: "jobPost", element: <JobPost /> },
      { path: "total-job-post", element: <TotalJobPost /> },
      { path: "showCv", element: <ShowCv /> },
      { path: "showCv/:id", element: <ShowCvDetails /> },
      { path: "logOut", element: <LogOut /> },
    ],
  },
];

// Admin routes
// Admin routes
export const adminRoutes = [
    { path: "/admin", element: <Admin />, children: [
      { path: "/", element: <AdminHome /> }, // Update this line
      { path: "Overview", element: <AdminHome /> },
      { path: "company-permissions", element: <CompanyPermission /> },
      { path: "total-job-post", element: <TotalJobPostAdmin /> },
    ] },
  ];