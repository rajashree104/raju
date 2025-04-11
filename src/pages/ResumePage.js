import React from 'react'
import Skills from "../components/Skills"
import { MainLayout} from "../style/Layouts"
// import Title from "../components/Title"
// import Resume from '../components/Resume'
import Resume from "../components/Resume"
function ResumePage() {
  return (
    <MainLayout>
      <Skills />
      <Resume />
    </MainLayout>
  )
}

export default ResumePage