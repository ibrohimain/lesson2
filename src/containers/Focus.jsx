import React, { useEffect, useRef, useState } from 'react'

const Focus = () => {
    const inputRef = useRef(null);
    const [count, setCount] = useState(0)

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div class="p-4">
            <input
                ref={inputRef}
                type="text"
                placeholder="Type...."
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
        </div>

    );
};

export default Focus
