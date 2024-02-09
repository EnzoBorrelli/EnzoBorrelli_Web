import {
  H2Style,
  ImageStyle,
  mainStyle,
  videoLandscapeDivStyle,
  videoPortraitDivStyle,
} from "@/components/stylesConst";
import Image from "next/image";
import React from "react";

const enYTvideos = [
  {
    key: "placeholder",
    image: "/images/video-thumbnails/youtube/placeholder.webp",
    url: "placeholder",
  },
  {
    key: "placeholder",
    image: "/images/video-thumbnails/youtube/placeholder.webp",
    url: "placeholder",
  },
  {
    key: "placeholder",
    image: "/images/video-thumbnails/youtube/placeholder.webp",
    url: "placeholder",
  },
  {
    key: "placeholder",
    image: "/images/video-thumbnails/youtube/placeholder.webp",
    url: "placeholder",
  },
];
const tiktokVideos = [
  {
    key: "BBTiktok",
    image: "/images/video-thumbnails/tiktok/black_tiktok.webp",
    url: "https://www.tiktok.com/@enderhell24/video/7325561196994628869",
  },
  {
    key: "gojotiktok",
    image: "/images/video-thumbnails/tiktok/gojo_tiktok.webp",
    url: "https://www.tiktok.com/@enderhell24/video/7325913885863578886",
  },
  {
    key: "sukunaTiktok",
    image: "/images/video-thumbnails/tiktok/sukuna_tiktok.webp",
    url: "https://www.tiktok.com/@enderhell24/video/7329238339779906822",
  },
  {
    key: "gjinxTiktok",
    image: "/images/video-thumbnails/tiktok/jinx_tiktok.webp",
    url: "https://www.tiktok.com/@enderhell24/video/7330316626732076293",
  },
  {
    key: "placeholder",
    image: "/images/video-thumbnails/tiktok/placeholder_vertical.webp",
    url: "https://www.tiktok.com/@enderhell24",
  },
  {
    key: "placeholder",
    image: "/images/video-thumbnails/tiktok/placeholder_vertical.webp",
    url: "https://www.tiktok.com/@enderhell24",
  },
];
const igVideos = [
  {
    key: "placeholder",
    image: "/images/video-thumbnails/tiktok/placeholder_vertical.webp",
    url: "https://www.instagram.com/ender_devlogs/",
  },
  {
    key: "placeholder",
    image: "/images/video-thumbnails/tiktok/placeholder_vertical.webp",
    url: "https://www.instagram.com/ender_devlogs/",
  },
  {
    key: "placeholder",
    image: "/images/video-thumbnails/tiktok/placeholder_vertical.webp",
    url: "https://www.instagram.com/ender_devlogs/",
  },
  {
    key: "placeholder",
    image: "/images/video-thumbnails/tiktok/placeholder_vertical.webp",
    url: "https://www.instagram.com/ender_devlogs/",
  },
  {
    key: "placeholder",
    image: "/images/video-thumbnails/tiktok/placeholder_vertical.webp",
    url: "https://www.instagram.com/ender_devlogs/",
  },
  {
    key: "placeholder",
    image: "/images/video-thumbnails/tiktok/placeholder_vertical.webp",
    url: "https://www.instagram.com/ender_devlogs/",
  },
];
const YTvideos = [
  {
    key: "ctrVideo",
    image: "/images/video-thumbnails/youtube/ctr_video.webp",
    url: "https://www.youtube.com/watch?v=rbpxX9wkHCo",
  },
  {
    key: "f9Video",
    image: "/images/video-thumbnails/youtube/f9_video.webp",
    url: "https://www.youtube.com/watch?v=Fj0kxx2d41U",
  },
  {
    key: "fortniteVideo",
    image: "/images/video-thumbnails/youtube/fortnite_video.webp",
    url: "https://www.youtube.com/watch?v=ZCKvthIhF5w",
  },
  {
    key: "genshinVideo",
    image: "/images/video-thumbnails/youtube/genshin_video.webp",
    url: "https://www.youtube.com/watch?v=6rOPkIlBtZM",
  },
];

export default function Projects() {
  return (
    <main className={`${mainStyle} gap-6`}>
      <h1 className="text-3xl font-bold mt-1 text-center">
        Content made by Me
      </h1>
      <section>
        <h2 className={H2Style}>Youtube: template(Endy the programmer)</h2>
        <div className={videoLandscapeDivStyle}>
          {enYTvideos.map((video) => (
            <a
              key={video.key}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={ImageStyle}
                src={video.image}
                width={320}
                height={180}
                alt={video.key}
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </section>
      <section>
        <h2 className={H2Style}>Tiktok: @EnderHell24</h2>
        <div className={videoPortraitDivStyle}>
          {tiktokVideos.map((video) => (
            <a
              key={video.key}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={ImageStyle}
                src={video.image}
                width={180}
                height={320}
                alt={video.key}
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </section>
      <section>
        <h2 className={H2Style}>Instagram: Ender_Devlogs</h2>
        <div className={videoPortraitDivStyle}>
          {igVideos.map((video) => (
            <a
              key={video.key}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={ImageStyle}
                src={video.image}
                width={180}
                height={320}
                alt={video.key}
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </section>
      <section>
        <h2 className={H2Style}>Youtube: the relics of Ender</h2>
        <div className={videoLandscapeDivStyle}>
          {YTvideos.map((video) => (
            <a
              key={video.key}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={ImageStyle}
                src={video.image}
                width={320}
                height={180}
                alt={video.key}
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
