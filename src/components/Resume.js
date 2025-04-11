import React from 'react'
import { InnerLayout } from "../style/Layouts"
import Title from "../components/Title"
import styled from 'styled-components';
import SmallTitle from '../components/SmallTitle'
import { FaBriefcase } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";
import ResumeItem from './ResumeItem';


function Resume() {
    const briefcase = <FaBriefcase />
    const school = <IoSchoolSharp />

    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
                
            <InnerLayout>
                <div className='small-title'>
                    <SmallTitle icon={briefcase} title={'Working Expreience'} />
                </div>
                <div className='resume-content'>
                    <ResumeItem
                        year={'2015 -2020'}
                        title={"computer science Teacher"}
                        subtitle={"Utkal University"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."}
                    />

                    <ResumeItem
                        year={'2020 -2022'}
                        title={"Full Stack DEveloper"}
                        subtitle={"Nuez Technology"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."}
                    />

                    <ResumeItem
                        year={'2022 -2025'}
                        title={"Frontend Developer"}
                        subtitle={"Nuez Technology  "}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."}
                    />
                    <ResumeItem
                        year={'2025 -Present'}
                        title={"User Interface Designer"}
                        subtitle={"Google Inc "}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."}
                    />
                </div>
                <div className='small-title  u-small-title-bottom'>
                    <SmallTitle icon={school} title={'Working Expreience'} />
                </div>

                <div className='resume-content'>
                    <ResumeItem
                        year={'2015 -2020'}
                        title={"computer science Teacher"}
                        subtitle={"Utkal University"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."}
                    />

                    <ResumeItem
                        year={'2020 -2022'}
                        title={"Full Stack DEveloper"}
                        subtitle={"Nuez Technology"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."}
                    />

                    <ResumeItem
                        year={'2022 -2025'}
                        title={"Frontend Developer"}
                        subtitle={"Nuez Technology  "}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."}
                    />
                 <div className='u-margin-bottom'>
                 <ResumeItem
                        year={'2025 -Present'}
                        title={"User Interface Designer"}
                        subtitle={"Google Inc "}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."}
                    />
                 </div>
                </div>
            </InnerLayout>
        </ResumeStyled>
    )
}
const ResumeStyled = styled.section`

.small-title{
    padding-bottom: 3rem;
}
.u-small-title-bottom{
    margin-top: 4rem;
}
.resume-content{
    border-left: 1px solid var(--border-color);

}
`;
export default Resume