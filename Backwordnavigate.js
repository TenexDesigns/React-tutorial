/*
This is to explaine how to navigate backwords in a link
The useNavigate hook retuns a function that we call on the onClick event.THis function takes in a parameter e.g -1 to naviage backwords or the pathe to the desiered page
e.g '/about'




*/




import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
    const navigate = useNavigate()
  return (
    <div>About

<button onClick={()=> navigate(-1)}>Go back</button>

    </div>
  )
}

export default About
