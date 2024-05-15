import React, { useEffect, useRef } from 'react';

function MyComponent() {
  // useRef hook'ini ishlatib, input elementiga referensiyani saqlaymiz
  const inputRef = useRef(null);

  // useEffect orqali, komponent yaratilganda inputga fokus qilamiz
  useEffect(() => {
    // inputRef.current.focus() yordamida inputga fokus qilamiz
    inputRef.current.focus();
  }, []); // useEffect faolligi komponent yaratilganda bir marta amalga oshadi

  return (
    <div className="p-4">
      {/* input elementiga ref atribyutini qo'shamiz */}
      <input 
        type="text" 
        ref={inputRef} // useRef yordamida yaratilgan referensiyani beramiz
        placeholder="Type...." 
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
      />
    </div>
  );
}

export default MyComponent;
