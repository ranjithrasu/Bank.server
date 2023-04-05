// import { HalfPieChart } from "half-pie-chart";

// import React from "react";

// function PieChart(props) {

// const results = props.result;

// const priciple = results.totalPayment;

// const interest =results.totalIntrest;

// const data = {
// right: [
//     {
// value: `${Math. round (priciple)}`, 
// color: props.value ?"green" : 'black',

// },],

// left: [
// {
// value: `${Math.round(interest)}`,
//  color:props.value ? '#0080004d': '#0000001a',

// },],};
// return (

//     <div className={"main_container"}> 
   
//     <div>
   
//     <div className={"header"}>Break-up of Total Payment</div>
   
//     </div>
   
//     <div className={"container2"}>
   
//     <div>

//     <HalfPieChart name="rentStatus" 
    
//     right={data.right} I
    
//     left={data.left}
    
//     title="Emi Calculator" />
//     </div>
    
//     <div className={"content"}>
//     <div className={"text"}> 
//     <div className={"dots1"}>
    
// </div>

// <div className={"amount"}>
// Principle Amt
// </div>

// </div>

// <div className={"value"}>

// Rs. {results && Math.round(results.totalPayment)}

// </div>
// </div>

// <div className={"content"}>

// <div className={"text"}>

// <div className={"dots2"}>

// </div>


// <div className={"amount"}>

// Interest Amt

// </div>

// </div>

// <div className={"value"}>

// Rs. {results && Math.round(results.totalIntrest)}

// </div>
// </div>
// </div>
// </div>
// )
// }

// export default PieChart;