import React, { useEffect, useRef, useState } from 'react'

const FunctionCounter = () => {
    const [count, setCount] = useState(0);
    let timerID = useRef(null);
    console.log(timerID.current, "qiymat");


    useEffect(() => {
        timerID.current = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 1000);
        return () => clearInterval(timerID.current)
    }, []);


    return (
        <div>FunctionCounter :{count}
            <button
                onClick={() => clearInterval(timerID.current)}
                className='w-[120px] h-[40px] bg-blue-500 rounded-[10px] ml-[10px]'

            >
                Stop Function
            </button>
        </div>
    )
}

export default FunctionCounter
