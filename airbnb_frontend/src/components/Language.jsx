import React, { useRef } from 'react'

function Language({onClose}) {
  const modelRef = useRef()
  const closeModel = (e) =>{
    if (modelRef.current === e.target) {
      onClose()
    }
  }
  return (
    <div ref={modelRef} onClick={closeModel} className='fixed inset-0 bg-white bg-opacity-30 backdrop-blur-sm z-40'>
      <div className='w-[50%] bg-white mx-auto text-center py-10 border mt-[15%] relative'>
        <h1>You can change you <span className='text-[#FF385C]'>Language</span> in this tab!</h1>
        <i className="fa-solid fa-x absolute left-2 top-2" onClick={onClose}/>
      </div>
    </div>
  )
}

export default Language