import React, {useState, useEffect} from "react"; 

import {Input, Slider} from "antd"

// import PieChart from "./2piechart";

import TableInput from './2table'

function LoanEmiCalculator ({value, setValue, setColor}) {

const [princ, setPrinc] = useState(50000)

const [intr, setIntr] = useState(7)

const [months, setMonths] = useState(12)

const procFee = 0;

const [results, setResults] =useState()

const loanAmount =(value) =>{

setPrinc(value);


EmiCalculator();

};

const changeinterest= (value)=>{
     setIntr(value)
      EmiCalculator();
};

const changeTenure = (value)=>{ 
    setMonths (value)
     EmiCalculator();
}
const EmiCalculator = () => {

    var i = intr / 12 / 100;
    
    var result = {};
    
    result.emi = princ * i / (1 - (Math.pow(1 / (1 + i), months)));
    
    result.processingFee = procFee * princ / 100;
    
    result.totalIntrest = result.emi * months - princ;
    
    result.totalPayment = result.emi* months;
    
    result.quaterAmt = princ / 4;
    
    result.q1 = 0;
    
    result.q2 = 0;
    
    result.q3= 0;
    
    result.q4 = 0;
    
    var x = result.totalPayment;

    result.row = new Array();
    
    result.anual = new Array();
    
    result.row[0] = {};
    
    result.row[0].os = x;
    
    result.row[0].pb = princ;
    
    result.row[0].ip = princ * i;
    
    result.row[0].pp = result.emi -result.row[0].ip;
    
    var pos = 1;
    
    while (x > 0)  {
        x = x - result.emi;

result.row[pos] = {}

result.row[pos].os = result.row[pos - 1].os - result.emi;

result.row [pos].pb = result.row[pos - 1].pb-result.emi + result.row [pos- 1].ip;

result.row[pos]. ip = result.row[pos].pb * i;

result.row[pos].pp = result.emi - result.row[pos].ip;

if (result.q1 == 0 && result.row [pos] .pb < result.quaterAmt * 3) { result.q1 = pos;

}

if (result.q2 == 0 && result.row[pos].pb < result.quaterAmt * 2) { result.q2 = pos = result.q1;

}
if (result.q3 == 0 && result.row [pos].pb < result.quaterAmt) { result.q3= pos- result.q2- result.q1; } 

if (result.q4 == 0 && result.row[pos].pb < 0) { result.q4 = pos - result.q3 - result.q2- result.q1;}

pos = pos + 1;

}

var tempIP = 0;

var tempPP = 0;

for (i = 0; i < result.row.Length-1; i++) { 
result.row[i]={id:i+1, ... result.row[i]}; 

tempIP = tempIP + result. row[i].ip;

tempPP = tempPP + result.row[i].pp;

if ((i + 1) % 12 == 0) {

var posYear = parseInt(i/12);
var posYear = parseInt(i / 12);

result.anual[posYear] = {}; result.anual [posYear]. ip = tempIP;

result.anual [posYear]. pb = result.row [posYear * 12].pb;

result.anual [posYear].pp = tempPP;

tempIP = 0;

tempPP = 0;

} }

let res=result.row.filter((data)=>data.id <= months && data);

result.row=res;

setResults(result);
}
    useEffect (()=>{ EmiCalculator(); }, [princ, intr, months])
    
    return (
    <>
    <div className={"main"}>
    
    <div className={"main_container"}> <div>
    
    <div className={"sub_container"}>
         <div className={"input"}> <div>
    
    <h3>Loan Amount ()</h3> </div>
    
    <div className={"input_tag"}>
    
    <Input type={"number"} value={princ} />
    
    </div>
    </div>
    
    <Slider onChange={loanAmount} min={50000} max={4000000} defaultValue={50000}/> <div className={"text"}>
    
    <div> 50K</div>

    <div>40L</div>
</div>
</div>

<div className={"sub_container"}>

<div className={"input"}>

<div>

<h3>Interest Rate (p.a)</h3>
</div>

<div className={"input_tag"}>

<Input type={'number'} value={intr} />

</div>

</div>

<Slider onChange={changeinterest} step={0.5} min={7} max={24} defaultValue={7} />

<div className={"text"}>

<div>7%</div>

<div>24%</div>

</div>

</div>

<div className={"sub_container"}>

<div className={ "input"}>

<div>

<h3>Tenure (months)</h3>

</div>

<div className={"input_tag"}>

<Input type={'number'} value={months} />

</div>

</div>

<Slider onChange={changeTenure} min={12} max={60} defaultValue={12} /> <div className={"text"}>
    <div> 12 </div>

<div>60</div>

</div>
</div>
</div>

<div>
<div className={"emi_container"}>

<div className={"header"}>Equated Monthly Installments (EMI)</div>
<div className={ "amount"}>

{results &&

<h1>Rs.{Math.round(results.emi)}</h1>}

</div>

<div className={"button"}>Get Instant Funds</div>

</div>

</div>

</div>

{/* <div>

<PieChart result={results ? results: ''} value={value} setValue={setValue} setColor={setColor}/>

</div> */}

</div>

<div className={"table"}>

<TableInput results={results ? results:''} value={value} setValue={setValue} setColor={setColor}/>

</div>
</>
)
}
export default LoanEmiCalculator;