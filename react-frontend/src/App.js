import React from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import MenuPage from "./pages/ProgramatorMenu/MenuPage";
import Footer from "./components/Footer";
import TokenyPage from "./pages/ProgramatorTokeny/TokenyPage";
import NastaveniaPage from "./pages/NastaveniaPage";
import KontaktovaniaPage from "./pages/ProgramatorKontaktovania/KontaktovaniaPage";
import KontaktovanieDetailPage from "./pages/ProgramatorKontaktovania/KontaktovaniaDetailPage";

import { Routes, Route } from "react-router-dom";
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
    return (
        <div className="App">
            <Menu />

            <Routes>
                {/* uvodna / analyza stranka */}
                <Route path="/" element={<MenuPage />} />
                <Route path="/firma" element={<FirmaMenuPage />} />


                {/* tokeny */}
                <Route path="/tokeny" element={<TokenyPage />} />

                {/* nastavenia */}
                <Route path="/nastavenia" element={<NastaveniaPage />} />
                <Route path="/nastaveniaFirma" element={<NastaveniaPageFirma />} />


                {/* analyza */}

                <Route path="/analyza1" element={<AnalyzaPage />} />
                <Route path="/analyza2" element={<AnalyzaPage2 />} />
                <Route path="/analyza3" element={<AnalyzaPage3 />} />
                <Route path="/analyzaload" element={<AnalyzaPageLoading />} />


                {/* kontaktovania zoznam */}
                <Route path="/kontaktovania" element={<KontaktovaniaPage />} />

                {/* detail jedneho kontaktovania */}
                <Route
                    path="/kontaktovania/:id"
                    element={<KontaktovanieDetailPage />}
                />

                {/* firma */}
                <Route path="/vyhladat" element={<VyhladatPage />} />
                <Route path="/kontaktovat/:id" element={<KontaktovatPage />} />
                <Route path="/kontaktovaniaFirma" element={<FirmaKontaktovaniaPage />} />

                {/* profil */}

                <Route path="/profil" element={<ProfilPage />} />
                <Route path="/firma/profil/:id" element={<FirmaProfilPage />} />

            </Routes>

            <Footer />
        </div>
    );
}

export default App;
