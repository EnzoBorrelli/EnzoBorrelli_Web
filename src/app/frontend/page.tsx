
import TopSection from "@/components/frontend/home/TopSection/TopSection";
import IconSection from "@/components/frontend/home/icons/iconsSection";
import ProjectSection from "@/components/frontend/home/projects/ProjectSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EnzoBorrelli Web | FrontEnd",
};

export default function FrontEndHome() {
  return (
    <main className="bg-gray-200 w-full h-full flex flex-col p-2 fex-nowrap items-center justify-center text-slate-600">
      <TopSection />
      <IconSection />
      <ProjectSection />
    </main>
  );
}
