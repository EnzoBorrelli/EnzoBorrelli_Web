"use client";
import {
  aboutBtnStyle,
  aboutDivStyle,
  frontBtnColor,
  mainStyle,
} from "@/components/stylesConst";
import useLang from "@/languages/useLang";
import Image from "next/image";
import Link from "next/link";
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
          {text.frontAbout_firstP2}
          <br />
          {text.frontAbout_firstP3}
          <br />
          {text.frontAbout_firstP4}
          <br />
          {text.frontAbout_firstP5}
          <br />
        </p>
      </div>
      <div className={aboutDivStyle}>
        <h2 className="text-lg font-bold">{text.frontAboutH2_moreAbout}</h2>
        <p className="flex flex-col items-center text-center gap-2">
          {text.frontAbout_MC_P}
          <Image
            src="/images/extras/mapmaking_2012.png"
            width={300}
            height={250}
            alt="mapmaking"
            loading="lazy"
          />
        </p>
        <p className="flex flex-col items-center text-center gap-2">
          {text.frontAbout_Clang}
          <Image
            src="/images/extras/arduinocc.png"
            width={250}
            height={250}
            alt="arduino"
            loading="lazy"
          />
        </p>
        <p className="text-center flex flex-col items-center my-4 gap-2">
          {text.frontAbout_firstHTML}
          <a
            className={`${aboutBtnStyle} ${frontBtnColor}`}
            href="https://enzoborrelli.github.io/informe-en-html/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {text.frontAbout_toProjBtn}
          </a>
        </p>
        <p className="text-center flex flex-col items-center my-4 gap-2">
          {text.frontAbout_reactProj}
          <a
            className={`${aboutBtnStyle} ${frontBtnColor}`}
            href="https://emrobots.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {text.frontAbout_to2ndProjBtn}
          </a>
        </p>
        <p className="text-center">{text.frontAbout_freeTime}</p>
      </div>
      <div className={aboutDivStyle}>
        <h2 className="text-lg font-bold">{text.frontAboutH2_random}:</h2>
        <p className="text-center">{text.frontAbout_Sendo}</p>
        <Image
          src="/images/extras/sendo.png"
          width={250}
          height={250}
          alt="logo"
          loading="lazy"
        />
        <p className="flex flex-col items-center text-center">
          {text.frontAbout_YTChannel}
          <span className={`${aboutBtnStyle} ${frontBtnColor}`}>
            <Link href="*/video/about" as="/video/about">
              {text.frontAbout_toVideo}
            </Link>
          </span>
        </p>
      </div>
    </main>
  );
}
