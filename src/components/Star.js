import React from 'react'
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar, FaRegStar } from "react-icons/fa";
import styled from 'styled-components';

const Star = ({stars, reviews}) => {
    const ratingStar = Array.from({length:2} , (elem, index) => {
        let number = index + 0.5;
    
  return (
    <span key = {index}>
        {stars >= index +1 ? (
            <FaStar className='icon' />
        ) : stars >= number ? (
            <FaStarHalfAlt className='icon'/>
        ) : (
            <FaRegStar className = 'icon' />
        )}
        </span>
  );
});
return(
<Wrapper>
    <div className='icon-style'>
        {ratingStar}
        <p>({reviews} customer reviews)</p>
    </div>
</Wrapper>
)
};
const Wrapper = styled.section`
  .icon-style {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }

  .icon {
    color: orange;
    font-size: 1rem;
  }

  p {
    margin-left: 0.5rem;
    font-size: 0.9rem;
    color: #333;
  }
`;


export default Star