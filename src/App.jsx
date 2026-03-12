import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import IntroScreen from "./pages/onboarding/Intro1";
import Intro2 from "./pages/onboarding/Intro2";

import MainLayout from "./components/MainLayout";

import Home from "./pages/Home";
import Achievement from "./pages/Achievement";
import Profile from "./pages/Profile";

import PageTransition from "./components/PageTransition";
import Boot from "./pages/Boot";

function PageWrapper({ children }) {
  return <PageTransition>{children}</PageTransition>;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>

        {/* Boot (entry point) */}
        <Route path="/" element={<Boot />} />

        {/* Onboarding */}
        <Route
          path="/intro"
          element={
            <PageWrapper>
              <IntroScreen />
            </PageWrapper>
          }
        />

        <Route
          path="/intro2"
          element={
            <PageWrapper>
              <Intro2 />
            </PageWrapper>
          }
        />

        {/* Main App */}
        <Route element={<MainLayout />}>

          <Route
            path="/tabs"
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />

          <Route
            path="/tabs/achievement"
            element={
              <PageWrapper>
                <Achievement />
              </PageWrapper>
            }
          />

          <Route
            path="/tabs/profile"
            element={
              <PageWrapper>
                <Profile />
              </PageWrapper>
            }
          />

        </Route>

      </Routes>
    </AnimatePresence>
  );
}

function App() {

  useEffect(() => {
    const tg = window.Telegram?.WebApp;

    if (!tg) return;

    tg.ready();
    tg.expand();

    if (tg.requestFullscreen) {
      tg.requestFullscreen();
    }

    tg.setHeaderColor("#000000");
    tg.setBackgroundColor("#000000");

  }, []);

  return (
    <BrowserRouter>
      <div className="h-[100dvh] w-full overflow-hidden bg-black">
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;