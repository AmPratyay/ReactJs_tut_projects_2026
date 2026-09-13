import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {

  console.log(props.users);
  
  return (
    <div className="relative h-full w-80 shrink-0 overflow-hidden rounded-4xl">
      <img
        src={props.users.img}
        alt="People discussing"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <RightCardContent index={props.index} users={props.users}/>
    </div>
  )
}

export default RightCard