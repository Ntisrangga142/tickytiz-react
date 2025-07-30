import React from 'react'

function ButtonSR({type, msg}) {
  return (
    <button type={type} className="text-[#F7F7FC] bg-[#1D4ED8] w-full h-[64px] rounded text-base font-bold border-none mt-[26px]">{msg}</button>
  )
}

export default ButtonSR