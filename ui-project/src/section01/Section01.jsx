import React from 'react'
import Navbar from './Navbar'
import Page01Content from './Page01Content'

const Section01 = (props) => {
  return (
    <div className='h-screen w-full'>
      <Navbar />
      <Page01Content users={props.users}/>
    </div>
  )
}

export default Section01
