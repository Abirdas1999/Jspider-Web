import React from 'react'

function CallbackButton({onInc}) {

    
  return (
    <button className='m-2' onClick={onInc}>Click</button>
  )
}

export default CallbackButton