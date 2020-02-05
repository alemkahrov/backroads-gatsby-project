import React from 'react'
import styled from 'styled-components'

const SectionTitle = ({ title, subtitle, className }) => {
  return (
    <div className={className}>
      <h3>
        <span className="title">{title}</span>
        <span>{subtitle}</span>
      </h3>
    </div>
  )
}

export default styled(SectionTitle)`
 text-transform: uppercase;
 font-size: 2.6rem;
 margin-bottom: 2rem;
 margin-bottom: 2rem;
 h3 {
   text-align: center;
   letter-spacing: 5px;
   margin-right: -5px;
   color: var(--primaryColor);
   .title {
     color: var(--mainBlack);
   }
   span {
     display: block;
     @media screen and (min-width: 576px) {
       display: inline-block;
       margin: 0 0.35rem;
     }
   }
 }
`

