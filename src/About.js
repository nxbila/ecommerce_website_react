import React from 'react'

import {useProductContext} from './context/ProductContext';

const About = () => {
  const {myName} = useProductContext();
  return <div>About {myName} </div>

  
}

export default About