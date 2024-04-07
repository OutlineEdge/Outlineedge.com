import FooterSection from "@/components/Global-Components/FooterSection";
import Navbar from "@/components/Global-Components/Navbar";
import { Providers } from "../api/providers";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import LeftNavbar from "@/components/Global-Components/AuthPage/LeftNavbar";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/login");
  }
  return (
    <div>
      <Providers>
        <LeftNavbar>{children}</LeftNavbar>
      </Providers>
    </div>
  );
};

export default DashboardLayout;
