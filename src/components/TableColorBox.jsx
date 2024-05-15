import React, { useState } from 'react'

const TableColorBox = () => {
    const [count, setCount] = useState(0)

    function counter() {
        setCount(count + 1)
    }

    function unCounter() {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <>
            <div className='w-[500px] h-[500px] border rounded'>
                <div className='flex items-center justify-center w-[100%] h-[70%] border rounded'>
                    <span className='text-[80px] font-semibold'>{count}</span>
                </div>
                <div className='w-[100%] h-[30%] border flex items-center justify-evenly'>
                    <div className='flex flex-col justify-center items-center w-[100px] h-[80px] border cursor-pointer'>
                        <span className='font-semibold text-right'>Count</span>
                        <div className='w-[100%] flex justify-center gap-[3px]'>
                            <button className='w-[40px] h-[40px] border rounded bg-blue-500' onClick={counter}>+1</button>
                            <button className='w-[40px] h-[40px] border rounded bg-red-500' onClick={unCounter}>-1</button>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center w-[100px] h-[80px] border cursor-pointer'>
                        <span className='font-semibold text-right'>Red</span>
                        <div className='w-[100%] flex justify-center gap-[3px]'>
                            <button className='w-[40px] h-[40px] border rounded bg-blue-500'>+1</button>
                            <button className='w-[40px] h-[40px] border rounded bg-red-500'>-1</button>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center w-[100px] h-[80px] border cursor-pointer'>
                        <span className='font-semibold text-right'>Blue</span>
                        <div className='w-[100%] flex justify-center gap-[3px]'>
                            <button className='w-[40px] h-[40px] border rounded bg-blue-500'>+1</button>
                            <button className='w-[40px] h-[40px] border rounded bg-red-500'>-1</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TableColorBox
