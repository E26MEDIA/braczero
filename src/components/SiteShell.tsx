import { CursorGlow } from "@/components/CursorGlow";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ServiceChatbot } from "@/components/ServiceChatbot";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="noise" aria-hidden />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ServiceChatbot />
    </>
  );
}
