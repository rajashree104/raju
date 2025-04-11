import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from "../style/Layouts";
import Title from "../components/Title"
import ReviewItem from './ReviewItem';
function ReviewsSetion() {
    return (
        // <InnerLayout>
        <ReviewsStyled>
            <Title title={'Reviews'} span={"Reviews"} />
            <InnerLayout>
                <div className='reviews'>
                    <ReviewItem text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod."} />
                    <ReviewItem text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod."} />

                </div>
            </InnerLayout>
        </ReviewsStyled>
        // </InnerLayout>

    )
}

const ReviewsStyled = styled.section`
.reviews{
display:grid;
grid-template-columns: repeat(2, 1fr);
grid-gap: 1.5rem;
width: 100%;
@media screen and (max-width:600px) {
    grid-template-columns: repeat(1, 1fr);
}
}

`;
export default ReviewsSetion