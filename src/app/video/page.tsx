import { mainStyle } from '@/components/stylesConst';
import TopSection from '@/components/video/home/TopSection/TopSection';
import IconSection from '@/components/video/home/iconsSection/iconsSection';
import VideosSection from '@/components/video/home/videosSection/videosSection';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "EnzoBorrelli Web | Video Editor",
  description: "Enzo Borrelli Portfolio",
};

export default function VideoHome() {
  return (
    <main className={mainStyle}>
      <TopSection/>
      <IconSection/>
      <VideosSection/>
    </main>
  )
}
