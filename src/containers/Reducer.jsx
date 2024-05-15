import React, { useReducer } from 'react';

// Ranglarni yangilash uchun yordamchi funksiya
const calculateColor = (redCount, blueCount) => {
    const red = Math.min(255, redCount * 10);
    const blue = Math.min(255, blueCount * 10);
    console.log(`Calculating color with redCount: ${redCount}, blueCount: ${blueCount}`);
    return `rgb(${red}, 0, ${blue})`;
};

const initialState = {
    count: 0,
    redCount: 0,
    blueCount: 0,
    bgColor: 'rgb(0, 0, 0)',
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            console.log('Incrementing count');
            return { ...state, count: state.count + 1 };
        case 'decrement':
            console.log('Decrementing count');
            return { ...state, count: state.count > 0 ? state.count - 1 : 0 };
        case 'incrementRed':
            console.log('Incrementing redCount');
            const newRedCountInc = state.redCount + 1;
            return {
                ...state,
                redCount: newRedCountInc,
                bgColor: calculateColor(newRedCountInc, state.blueCount)
            };
        case 'decrementRed':
            console.log('Decrementing redCount');
            const newRedCountDec = state.redCount > 0 ? state.redCount - 1 : 0;
            return {
                ...state,
                redCount: newRedCountDec,
                blueCount: state.blueCount > 0 ? state.blueCount - 1 : 0,
                bgColor: calculateColor(newRedCountDec, state.blueCount > 0 ? state.blueCount - 1 : 0)
            };
        case 'incrementBlue':
            console.log('Incrementing blueCount');
            const newBlueCountInc = state.blueCount + 1;
            return {
                ...state,
                blueCount: newBlueCountInc,
                bgColor: calculateColor(state.redCount, newBlueCountInc)
            };
        case 'decrementBlue':
            console.log('Decrementing blueCount');
            const newBlueCountDec = state.blueCount > 0 ? state.blueCount - 1 : 0;
            return {
                ...state,
                blueCount: newBlueCountDec,
                redCount: state.redCount > 0 ? state.redCount - 1 : 0,
                bgColor: calculateColor(state.redCount > 0 ? state.redCount - 1 : 0, newBlueCountDec)
            };
        default:
            return state;
    }
};

const TableColorBox = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    console.log(`Current state:`, state);

    return (
        <div className="max-w-[1550px] w-[1550px] flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="max-w-[500px] w-[450px] mx-auto h-[500px] border rounded-lg shadow-2xl overflow-hidden" style={{ backgroundColor: state.bgColor }}>
                <div className="flex items-center justify-center w-full h-[70%] border-b bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg">
                    <span className="text-[80px] font-bold text-white drop-shadow-lg">{state.count}</span>
                </div>
                <div className="w-full h-[30%] flex items-center justify-evenly bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg">
                    <div className="flex flex-col justify-center items-center w-[100px] h-[80px] border cursor-pointer rounded-lg shadow-md bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg">
                        <span className="font-semibold text-white">Count</span>
                        <div className="w-full flex justify-center gap-[3px]">
                            <button className="w-[40px] h-[40px] border rounded bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300" onClick={() => dispatch({ type: 'increment' })}>+1</button>
                            <button className="w-[40px] h-[40px] border rounded bg-red-500 text-white hover:bg-red-600 transition-all duration-300" onClick={() => dispatch({ type: 'decrement' })}>-1</button>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center w-[100px] h-[80px] border cursor-pointer rounded-lg shadow-md bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg">
                        <span className="font-semibold text-white">Red</span>
                        <div className="w-full flex justify-center gap-[3px]">
                            <button className="w-[40px] h-[40px] border rounded bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300" onClick={() => dispatch({ type: 'incrementRed' })}>+1</button>
                            <button className="w-[40px] h-[40px] border rounded bg-red-500 text-white hover:bg-red-600 transition-all duration-300" onClick={() => dispatch({ type: 'decrementRed' })}>-1</button>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center w-[100px] h-[80px] border cursor-pointer rounded-lg shadow-md bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg">
                        <span className="font-semibold text-white">Blue</span>
                        <div className="w-full flex justify-center gap-[3px]">
                            <button className="w-[40px] h-[40px] border rounded bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300" onClick={() => dispatch({ type: 'incrementBlue' })}>+1</button>
                            <button className="w-[40px] h-[40px] border rounded bg-red-500 text-white hover:bg-red-600 transition-all duration-300" onClick={() => dispatch({ type: 'decrementBlue' })}>-1</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TableColorBox;
