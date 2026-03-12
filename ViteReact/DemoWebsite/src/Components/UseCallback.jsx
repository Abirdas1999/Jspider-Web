import React, { useCallback, useMemo, useState } from 'react'
import UseCallBackChild from './UseCallBackChild'
import CallbackButton from './CallbackButton';

function UseCallback() {
    const [count1,setCount1] = useState(0);
    const [count2,setCount2] = useState(5);
    let handleCount1 = useCallback(()=>{
        setCount1(prev=>prev+1)
    },[])
    let handleCount2 = useCallback(()=>{
        setCount2(prev=>prev+10)
    },[])

    let isEven = useMemo(()=>{
        console.log("Even Function Executed")
        return(count1%2==0)
    },[count1])

  return (
    <div>
        <UseCallBackChild count={count1}/>
        <h5 className='text-danger'>{isEven ? 'Even':'Odd'}</h5>
        <CallbackButton onInc={handleCount1}>Count 1</CallbackButton>

        
        <UseCallBackChild count={count2}/>
        <CallbackButton onInc={handleCount2}>Count 2</CallbackButton>

    </div>
  )
}

export default UseCallback