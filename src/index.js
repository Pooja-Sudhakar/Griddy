// import React from 'react';
// import ReactDOM from 'react-dom';

// const App =()=>{
//     return(
//         <div>Hi there</div>
//     );
// }

// ReactDOM.render(<App/>,document.querySelector("#root"));

import React from 'react';
import ReactDOM from 'react-dom';
import GoogleApiWrapper from './simplemap';
//import Line from './line';

const App = () =>{
    return(
       
         <GoogleApiWrapper/>
        

    //   <div id="root"/>
    
    );
};

ReactDOM.render(<App/>,document.querySelector("#root"));