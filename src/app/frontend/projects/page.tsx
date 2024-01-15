'use client'
import ProjectSection from '@/components/frontend/home/projects/ProjectSection'
import ShowMoreBtn from '@/components/frontend/home/projects/showMoreBtn';
import { mainStyle } from '@/components/frontend/home/stylesConst'
import React, { useState } from 'react'

export default function Projects(){
  const [show,setShow] = useState(false);
  return (
    <main className={mainStyle}>
      <ProjectSection ProjectsMax={show ? Infinity : 6}/>
      <ShowMoreBtn Show={show} SetShow={setShow}/>
    </main>
  )
}
