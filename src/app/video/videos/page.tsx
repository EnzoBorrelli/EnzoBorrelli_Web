import { mainStyle } from "@/components/stylesConst";
import EnglishYTchannel from "@/components/video/videosLinks/englishYTchannel";
import Instagram from "@/components/video/videosLinks/instagram";
import RelicYTchannel from "@/components/video/videosLinks/relicYTchannel";
import Tiktok from "@/components/video/videosLinks/tiktok";
import React from "react";

export default function Projects() {
  return (
    <main className={`${mainStyle} gap-6`}>
      <EnglishYTchannel />
      <Tiktok />
      <Instagram />
      <RelicYTchannel />
    </main>
  );
}
