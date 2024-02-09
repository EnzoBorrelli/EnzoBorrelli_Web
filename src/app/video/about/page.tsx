"use client";
import {
  aboutBtnStyle,
  aboutDivStyle,
  mainStyle,
} from "@/components/stylesConst";
import useLang from "@/languages/useLang";
import Image from "next/image";
import React from "react";

export default function About() {
  const text = useLang();
  if (!text) return <></>;

  return (
    <main className={mainStyle}>
      <div className="flex flex-col md:flex-row items-center justify-center w-full h-full">
        <h1 className="text-xl text-center font-bold m-4">
          {text.frontAboutH1_part1}
          <br />
          {text.frontAboutH1_part2} <br />
          {text.frontAboutH1_part3}
        </h1>
        <Image
          src="/images/yoMismo.webp"
          width={200}
          height={200}
          alt="me"
          loading="lazy"
        />
      </div>
      <div className={aboutDivStyle}>
        <h2 className="text-lg font-bold">{text.frontAboutH2_who}</h2>
        <p className="text-md text-center">
          {text.frontAbout_firstP1}
          <br />
          {text.videoAbout_firstP1}
          <br />
          {text.videoAbout_firstP2}
          <br />
          {text.videoAbout_firstP3}
        </p>
      </div>
      <div className={aboutDivStyle}>
        <h2 className="text-lg font-bold">{text.frontAboutH2_moreAbout}</h2>
        <p className="flex flex-col items-center text-center gap-2">
          {text.videoAbout_Channel}
          <Image
            src="/images/extras/channel_es.png"
            width={300}
            height={250}
            alt="mapmaking"
            loading="lazy"
          />
        </p>
        <p className="flex flex-col items-center text-center gap-2">
          {text.videoAbout_Zach}
          <Image
            src="/images/extras/ender_magic.png"
            width={250}
            height={250}
            alt="arduino"
            loading="lazy"
          />
        </p>
        <p className="text-center flex flex-col items-center my-4 gap-2">
          {text.videoAbout_EnChannel}
          <a
            className={aboutBtnStyle}
            href="https://enzoborrelli.github.io/informe-en-html/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {text.videoAbout_toChannel}
          </a>
        </p>
        <p className="text-center flex flex-col items-center my-4 gap-2">
          {text.videoAbout_tiktok}
          <a
            className={aboutBtnStyle}
            href="https://www.tiktok.com/@enderhell24"
            target="_blank"
            rel="noopener noreferrer"
          >
            {text.videoAbout_toTiktok}
          </a>
        </p>
        <p className="text-center">{text.videoAbout_freeTime}</p>
      </div>
      <div className={aboutDivStyle}>
        <h2 className="text-lg font-bold">{text.frontAboutH2_random}:</h2>
        <p className=" flex flex-col items-center text-center gap-3 mb-2">
          {text.videoAbout_Crash}
          <a
            className={aboutBtnStyle}
            href="https://www.youtube.com/watch?v=EDQzzgvHm6k"
            target="_blank"
            rel="noopener noreferrer"
          >
            {text.videoAbout_toVideo}
          </a>
        </p>

        <p className="flex flex-col items-center text-center gap-3">
          {text.videoAbout_Bonnie}
          <a
            className={aboutBtnStyle}
            href="https://www.youtube.com/watch?v=5HuvN8xV1yw"
            target="_blank"
            rel="noopener noreferrer"
          >
            {text.videoAbout_toVideo}
          </a>
        </p>
      </div>
    </main>
  );
}
