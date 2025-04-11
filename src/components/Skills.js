
import React from 'react';
import styled from 'styled-components';
import {InnerLayout } from '../style/Layouts';
import Title from "../components/Title";
import ProgressBar from './ProgressBar';
function Skills() {
    return (
        <SkillsStyled>
                <Title title={'My Skills'} span={'My Skills'} />
                <InnerLayout>
                    <div className='skills'>
                        <ProgressBar
                            title={'HTML5'}
                            width={"90%"}
                            text={"70%"}
                        />
                        <ProgressBar
                            title={'JAVASCRIPT'}
                            width={"80%"}
                            text={"70%"}
                        />
                        <ProgressBar
                            title={'REACT'}
                            width={"90%"}
                            text={"70%"}
                        />
                        <ProgressBar
                            title={'SCSS'}
                            width={"90%"}
                            text={"70%"}
                        />
                        <ProgressBar
                            title={'JAVA'}
                            width={"60%"}
                            text={"70%"}
                        />  <ProgressBar
                            title={'PYTHON'}
                            width={"50%"}
                            text={"70%"}
                        />

                        <ProgressBar
                            title={'NODEJS'}
                            width={"70%"}
                            text={"70%"}
                        />
                    </div>
                </InnerLayout>
        </SkillsStyled>
    );
}

const SkillsStyled = styled.section`
.skills{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-row-gap:2rem;
    grid-column-gap:2rem;
    @media screen and (max-width:1200px) {
        grid-template-columns: repeat(1,1fr);

}
}
`;

export default Skills;
