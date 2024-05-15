import React from 'react';
import './App.css';
// import Focus from './containers/Focus';
import ClassCounter from './containers/ClassCounter';
import FunctionCounter from './containers/FunctionCounter';
import Reducer from './containers/Reducer';
import Redux from './containers/Redux';
// import MyComponent from './containers/Comp';

const App = () => {
  return (
    <div className='flex h-screen items-center justify-center gap-10'>
        {/* <Focus/> */}
        {/* <MyComponent/> */}
        {/* <ClassCounter/> */}
        {/* <FunctionCounter/> */}
        {/* <Reducer/> */}
        <Redux/>
    </div>
  );
}

export default App;
