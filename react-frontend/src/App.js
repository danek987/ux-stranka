import React from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import MenuPage from "./pages/ProgramatorMenu/MenuPage";
import Footer from "./components/Footer";
import TokenyPage from "./pages/ProgramatorTokeny/TokenyPage";
import NastaveniaPage from "./pages/NastaveniaPage";
import KontaktovaniaPage from "./pages/ProgramatorKontaktovania/KontaktovaniaPage";
import KontaktovanieDetailPage from "./pages/ProgramatorKontaktovania/KontaktovaniaDetailPage";

import { Routes, Route, useLocation } from "react-router-dom";
import AnalyzaPage from "./pages/ProgramatorAnalyza/AnalyzaPage";
import AnalyzaPage3 from "./pages/ProgramatorAnalyza/AnalyzaPage3";
import AnalyzaPage2 from "./pages/ProgramatorAnalyza/AnalyzaPage2";
import AnalyzaPageLoading from "./pages/ProgramatorAnalyza/AnalyzaPageLoading";
import NastaveniaPageFirma from "./pages/NastaveniaPageFirma";
import FirmaMenuPage from "./pages/ProgramatorMenu/FirmaMenuPage";
import VyhladatPage from "./pages/Firma/VyhladatPage";
import KontaktovatPage from "./pages/Firma/KontaktovatPage";
import FirmaKontaktovaniaPage from "./pages/Firma/FirmaKontaktovaniaPage";
import ProfilPage from "./pages/Profil/ProfilPage";
import FirmaProfilPage from "./pages/Profil/FirmaProfilPage";

function App() {
    const location = useLocation();
    const pathname = location.pathname;

    // tu nastavujeme, ktore cesty patria firme
    const isFirmaRoute =
        pathname === "/firma" ||
        pathname.startsWith("/vyhladat") ||
        pathname.startsWith("/kontaktovat") ||
        pathname.startsWith("/kontaktovaniaFirma") ||
        pathname.startsWith("/nastaveniaFirma") ||
        pathname.startsWith("/firma/profil");

    const menuRole = isFirmaRoute ? "firma" : "programator";

    return (
        <div className="App">
            {/* hore sa zobrazi menu podla role */}
            <Menu role={menuRole} />

            <Routes>
                {/* uvodne menu */}
                {/* programator */}
                <Route path="/" element={<MenuPage />} />
                {/* firma */}
                <Route path="/firma" element={<FirmaMenuPage />} />

                {/* tokeny - programator */}
                <Route path="/tokeny" element={<TokenyPage />} />

                {/* nastavenia */}
                {/* programator */}
                <Route path="/nastavenia" element={<FirmaMenuPage />} />
                {/* firma */}
                <Route path="/nastaveniaFirma" element={<NastaveniaPageFirma />} />

                {/* analyza - programator */}
                <Route path="/analyza1" element={<AnalyzaPage />} />
                <Route path="/analyza2" element={<AnalyzaPage2 />} />
                <Route path="/analyza3" element={<AnalyzaPage3 />} />
                <Route path="/analyzaload" element={<AnalyzaPageLoading />} />

                {/* kontaktovania - programator */}
                <Route path="/kontaktovania" element={<KontaktovaniaPage />} />

                {/* detail kontaktovania - programator */}
                <Route
                    path="/kontaktovania/:id"
                    element={<KontaktovanieDetailPage />}
                />

                {/* firma - vyhladavat / kontaktovat / kontaktovania */}
                <Route path="/vyhladat" element={<VyhladatPage />} />
                <Route path="/kontaktovat/:id" element={<KontaktovatPage />} />
                <Route
                    path="/kontaktovaniaFirma"
                    element={<FirmaKontaktovaniaPage />}
                />

                {/* profil */}
                {/* programator */}
                <Route path="/profil" element={<ProfilPage />} />
                {/* firma pozera profil programatora */}
                <Route path="/firma/profil/:id" element={<FirmaProfilPage />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;
