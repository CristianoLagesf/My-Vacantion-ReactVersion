import { Route, Routes } from "react-router-dom";
import CheckOut from "./pages/CheckOut";
import MainPage from "./pages/MainPage";
import PackageSearch from "./pages/PackageSearch";
import FlightSearch from "./pages/FlightSearch";
import Header from "./components/Header";
import Footer from "./components/Footer";


export function Router() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="checkout" element={<CheckOut />} />
                <Route path="psearch" element={<PackageSearch />} />
                <Route path="fsearch" element={<FlightSearch />} />
            </Routes>
            <Footer />
        </>
    )
}