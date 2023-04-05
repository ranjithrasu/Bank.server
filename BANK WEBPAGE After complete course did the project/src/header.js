import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./header/home"
import Form from "./header/form "
import Calculator from "./header/calculator"
import Message from "./header/message"
import Calls from "./header/calls"
import Locaton from "./header/location"
import Mail from "./header/Maill"
import Intrustrate from "./header/Interstrate"
import Wayto from "./header/waytobankwithus"
import CAlculatorr from "./header/calculatorr"
import Businessaccount from "./header/Bisinessaccount"
import FindTheCArd from "./header/Findthecard"
import CompairAllCards from "./header/compairallcards"
import Balancetransfer from "./header/Balancetranfer"
import CraditCardInquiry from "./header/craditcardinquiry"
import TermDeposit from "./header/termdeposit"
import Insurens from "./header/insurense"
import BusinessBanking from "./header/businessbanking"
import FinancialPlaning from "./header/financialplaning"
import Activateacard from "./header/activateacard"
import BusinessPaymentTools from "./header/businesspaymenttools"
import HardshipAssistance from "./header/hardshipassistance"
import InternetBanking from "./header/internrtbanking"

import "./header.css"
export default function header() {
    return(
        <div className="header1">
            <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home/>}></Route> 
            <Route path="/home" element={<Home/>}></Route> 
               <Route path="/form" element={<Form/>}></Route>
                <Route path="/Calculator" element={<Calculator/>}></Route>
                <Route path="/call" element={<Calls/>}></Route>
                <Route path="/mail" element={<Mail/>}></Route>
                <Route path="/message" element={<Message/>}></Route>
              <Route path="/location" element={<Locaton/>}></Route>
              <Route path="/InterstRate" element={<Intrustrate/>}></Route>
              <Route path="/waytobank" element={<Wayto/>}></Route>
              <Route path="/business" element={<Businessaccount/>}></Route>
              <Route path="/CAlculatorr" element={<CAlculatorr/>}></Route>
              <Route path="/FindTheCard" element={<FindTheCArd/>}></Route>
              <Route path="/CompairAllCards" element={<CompairAllCards/>}></Route>
              <Route path="/BalanceTranfer" element={<Balancetransfer />}></Route>
              <Route path="/CreditCardInquiry" element={<CraditCardInquiry/>}></Route>
              <Route path="/TermDeposit" element={<TermDeposit/>}></Route>
              <Route path="/Insurens" element={<Insurens/>}></Route>
              <Route path="/BusinessBanking" element={<BusinessBanking/>}></Route>
              <Route path="/FinancialPlaning" element={<FinancialPlaning />}></Route>
              <Route path="/ActivateACard" element={<Activateacard />}></Route>
              <Route path="/BusinessPaymentTools"element={<BusinessPaymentTools/>}></Route>
              <Route path="/HardshipAssistance" element={<HardshipAssistance/>}></Route>
              <Route path="/InternetBankingAssistance" element={<InternetBanking/>}></Route>
             
          
              
            </Routes>
            </BrowserRouter>

        </div>
    )
    
}