// dataset 'birthdeathrates' loaded from pen https://codepen.io/jckr/pen/JKXLVe
// form: array of objects with country, birth and death properties
import React from 'react';
//import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,ButtonToolbar} from 'react-bootstrap';
import Butttons from './buttons'; 
import "./chart.css"

import {XYPlot, VerticalBarSeries} from 'react-vis';



class Charts extends React.Component{

    state = {data: [
        {x: 'Q1', y: 8},
        {x: 1, y: 5},
        {x: 2, y: 4},
        {x: 3, y: 9},
        {x: 4, y: 1},
        {x: 5, y: 7},
        {x: 6, y: 6}
    ]}

    randomval = () => {
        setInterval(() =>{
            let obj = [];
            let i;
            for(i=0;i<6;i++){
            var l = Math.floor((Math.random() * 10) + 1);
            let abc= {x:i,y:l};
            obj.push(abc);
            }
            console.log(obj);
            this.setState({data:obj})
        },1000)
        
        
    }
    componentDidMount(){
        this.randomval();
    }
    render(){
        
        return(
            <div className="fontf"><h1 style={{marginLeft:'2vw',marginTop:'3vh'}}>Load Distribution</h1>
            <div style={{marginTop:'8vh',marginLeft:'3vw'}}>
            <XYPlot 
            height={300} 
            width={500}
            color={'#212529'}
            animation={'wobble'}>
            <VerticalBarSeries 
            data={this.state.data} />
            </XYPlot>
            <div style={{marginTop:'5vh',marginLeft:'5vw'}}>
                <Butttons name="Get" shit=""/>
                <Butttons name="Assigned" shit=""/>
            </div>
            </div>
            </div>
        );
    };
}

export default Charts; 

// <SimpleChartWrapper
//   colorRange={[
//     '#19CDD7',
//     '#DDB27C',
//     '#88572C',
//     '#FF991F',
//     '#F15C17',
//     '#223F9A',
//     '#DA70BF',
//     '#125C77',
//     '#4DC19C',
//     '#776E57',
//     '#12939A',
//     '#17B8BE',
//     '#F6D18A',
//     '#B7885E',
//     '#FFCB99',
//     '#F89570',
//     '#829AE3',
//     '#E79FD5',
//     '#1E96BE',
//     '#89DAC1',
//     '#B3AD9E'
//   ]}
//   colorScale="category"
// >
//   <VerticalBarSeries
//     className=""
//     data={[
//       {
//         color: 7,
//         x: 0,
//         y: 10
//       },
//       {
//         color: 9,
//         x: 1,
//         y: 11.780373143304125
//       },
//       {
//         color: 7,
//         x: 2,
//         y: 12.797444657075669
//       },
//       {
//         color: 6,
//         x: 3,
//         y: 13.694136868279582
//       },
//       {
//         color: 9,
//         x: 4,
//         y: 13.081834377729388
//       },
//       {
//         color: 9,
//         x: 5,
//         y: 14.82849747925875
//       },
//       {
//         color: 2,
//         x: 6,
//         y: 16.638501199772215
//       },
//       {
//         color: 6,
//         x: 7,
//         y: 19.346781963309844
//       },
//       {
//         color: 7,
//         x: 8,
//         y: 21.99267740194042
//       }
//     ]}
//     stack={false}
//     style={{}}
//   />
// </SimpleChartWrapper>