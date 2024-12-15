import { AboutMeSection } from "@components/sections/AboutMeSection";
import { ContactSection } from "@components/sections/Contact";
import { HelloSection } from "@components/sections/HelloSection";
import { MyWorkSection } from "@components/sections/MyWorkSection";
import { ReviewsSection } from "@components/sections/ReviewsSection";
import { Divider } from "@components/shared/Divider";
import SectionsObserver from "@components/sections/SectionsObserver";

export default function Home() {
  return (
    <>
      <SectionsObserver />
      <main className="flex flex-col overflow-x-hidden">
        <div className="flex flex-col bg-gradient-primary">
          <HelloSection />
          <Divider />
        </div>
        <AboutMeSection />
        <div className="bg-gradient-primary">
          <MyWorkSection />
          <ReviewsSection />
        </div>
        <ContactSection />
      </main>
    </>
  );
}
