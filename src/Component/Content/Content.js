import React from 'react'
import Left from '../Left_Component/Left'
import Right from '../Right_Component/Right'
import './Content.css'
import ContentBody from '../ContentBody/ContentBody'

export default function Content() {
  return (
    <div className='content'>
        <Left/>
        <ContentBody/>
        <Right/>
    </div>
  )
}
