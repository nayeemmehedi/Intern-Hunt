import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import HomeLayout from "./layout/HomeLayout";
import Intern from "./Page/Intern";
import InternDetails from "./Page/InternDetails";
import ApplyForm from "./components/ApplyForm";
import Card from "./Page/Card";
import Review from "./Page/Review";
import HireU from "./Page/HireU";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout></MainLayout>}>
            <Route path="/">
              <Route index element={<HomeLayout></HomeLayout>} />
            </Route>
            <Route path="/intern-find" element={<Intern></Intern>} />
            <Route path="/intern-find/:id" element={<InternDetails></InternDetails>} />
            <Route path="/apply-intern" element={<ApplyForm></ApplyForm>} />
            <Route path="/applied-company" element={<Card></Card>} />
            <Route path="/review" element={<Review></Review>} />
            <Route path="/hire" element={<HireU></HireU>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
