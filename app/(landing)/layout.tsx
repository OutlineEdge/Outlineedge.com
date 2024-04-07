"use client";
import CrispChat from "@/components/Global-Components/CrispChat";
import FooterSection from "@/components/Global-Components/FooterSection";
import Navbar from "@/components/Global-Components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <CrispChat />
      {children}
      <FooterSection />
    </div>
  );
};

export default LandingLayout;
