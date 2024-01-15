
import TopSection from "@/components/frontend/home/TopSection/TopSection";
import IconSection from "@/components/frontend/home/icons/iconsSection";
import ProjectSection from "@/components/frontend/home/projects/ProjectSection";
import { mainStyle } from "@/components/frontend/home/stylesConst";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EnzoBorrelli Web | FrontEnd",
};

export default function FrontEndHome() {
  return (
    <main className={mainStyle}>
      <TopSection />
      <IconSection />
      <ProjectSection ProjectsMax={3} />
    </main>
  );
}
