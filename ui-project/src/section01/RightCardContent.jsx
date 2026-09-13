import React from 'react'

const RightCardContent = (props) => {
  return (
  <div className="relative z-10 flex h-full flex-col justify-between p-7">
        {/* Top Content */}
        <div>

          {/* Number */}
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-lg font-bold text-black shadow-md">
            {props.index}
          </div>

          {/* Heading + Description */}
          <div className="mt-8">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              {props.users.title}
            </h2>

            <p className="mt-3 max-w-60 text-sm font-semibold leading-6 text-white">
              {props.users.intro}
            </p>
          </div>

        </div>

        {/* Satisfied Button */}
        <div className="flex w-52 items-center justify-between rounded-full bg-blue-600 px-5 py-3 font-bold text-white shadow-lg transition hover:bg-blue-700">

          {/* Left */}
          <button className="text-sm">
            {props.users.tag}
          </button>

          {/* Right */}
          <button className="flex items-center justify-center text-xl">
            →
          </button>

        </div>

      </div>
  )
}

export default RightCardContent
