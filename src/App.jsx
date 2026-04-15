import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";

import MainLayout from "./layouts/MainLayout";

const Boot = lazy(() => import("./pages/Boot"));
const Home = lazy(() => import("./pages/Home"));
const Tournaments = lazy(() => import("./pages/Tournaments"));
const Rankings = lazy(() => import("./pages/Rankings"));
const Profile = lazy(() => import("./pages/Profile"));

function PageWrapper({ children }) {
  return <>{children}</>;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Suspense fallback={<div className="h-full bg-black" />}>
        <Routes location={location} key={location.pathname}>
          
          <Route path="/" element={<Boot />} />

          <Route path="/tabs" element={<MainLayout />}>
            <Route index element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="home" element={<Navigate to="/tabs" replace />} />
            <Route path="giai-dau" element={<PageWrapper><Tournaments /></PageWrapper>} />
            <Route path="bxh" element={<PageWrapper><Rankings /></PageWrapper>} />
            <Route path="profile" element={<PageWrapper><Profile /></PageWrapper>} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
    </Suspense>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="h-[100dvh] w-full overflow-hidden bg-slate-950">
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;