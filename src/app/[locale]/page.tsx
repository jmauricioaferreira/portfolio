import { AboutMeSection } from "@components/sections/AboutMeSection";
import { ContactSection } from "@components/sections/Contact";
import { HelloSection } from "@components/sections/HelloSection";
import { MyWorkSection } from "@components/sections/MyWorkSection";
import SectionsObserver from "@components/sections/SectionsObserver";
import { Divider } from "@components/shared/Divider";
import { Header } from "@components/shared/Header";

export default function Home() {
  return (
    <>
      <SectionsObserver />
      <main className="flex flex-col overflow-x-hidden">
        <Header />
        <div className="flex flex-col bg-gradient-primary">
          <HelloSection />
          <Divider />
        </div>
        <AboutMeSection />
        <div className="bg-gradient-primary">
          <MyWorkSection />
          {/* <ReviewsSection /> */}
        </div>
        <ContactSection />
      </main>
    </>
  );
}
