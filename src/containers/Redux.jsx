// Redux.js
import React, { useReducer } from 'react';
import { constants } from '../constants/type';

const initialState = {
    count: 0,
    bgColor: 'bg-white', // Initial background color class
};

const reducer = (state, action) => {
    switch (action.type) {
        case constants.INCREMENT:
            return {
                ...state,
                count: state.count < 150 ? state.count + 1 : state.count,
            };
        case constants.DECREMENT:
            return {
                ...state,
                count: state.count > 0 ? state.count - 1 : state.count, // Pastga olib ketishni to'xtatish
            };
        case constants.CHANGE_COLOR:
            return {
                ...state,
                bgColor: action.payload,
            };
        default:
            return state;
    }
};

const Redux = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { count, bgColor } = state;

    return (
        <div className={`flex flex-col items-center rounded-lg p-4 shadow-md justify-center min-h-screen ${bgColor}`}>
            <span className="text-2xl font-semibold mb-4">Count: {count}</span>
            <div className='flex space-x-4 mb-4'>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => dispatch({ type: constants.INCREMENT })}
                >
                    +1
                </button>
                <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => dispatch({ type: constants.DECREMENT })}
                >
                    -1
                </button>
            </div>
            <div className='flex space-x-4'>
                <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => dispatch({ type: constants.CHANGE_COLOR, payload: 'bg-green-500' })}
                >
                    Green
                </button>
                <button
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => dispatch({ type: constants.CHANGE_COLOR, payload: 'bg-yellow-500' })}
                >
                    Yellow
                </button>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => dispatch({ type: constants.CHANGE_COLOR, payload: 'bg-blue-500' })}
                >
                    Blue
                </button>
                <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => dispatch({ type: constants.CHANGE_COLOR, payload: 'bg-red-500' })}
                >
                    Red
                </button>
            </div>
        </div>
    );
};

export default Redux;
