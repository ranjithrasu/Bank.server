import { Link } from "react-router-dom";
import { CaretRightOutlined,SearchOutlined  } from "@ant-design/icons";

import "./headerstage2.css"

export default function header2(){
    return(
        <div className="headerstage2">
            <div  className="Bank"><Link to={"/home"} className="bank">Bank</Link></div>
            <div class="dropdown">
        <span>Header1</span>
        <span><CaretRightOutlined /></span>
  <div class="dropdown-content">
  <div className="r1"><h3>Accounts</h3>
    <div className="sub1" ><Link to={"/InterstRate"} className="sub">Interst Rate</Link></div>
    <div className="sub1"><Link to={"/waytobank"} className="sub">Way To Bank With Us</Link></div>
    <div className="sub1"><Link to={"/business"} className="sub">Business Account</Link></div>
    <div className="sub1"><Link to={"/CAlculatorr"} className="sub">Calculator</Link></div>
  </div>
  <div className="r1">
  <h3>Cradit Cards</h3>
    <div className="sub1"><Link to={"/FindTheCard"} className="sub">Find The Card</Link></div>
    <div className="sub1"><Link to={"/CompairAllCards"} className="sub">Compair All Cards</Link></div>
    <div className="sub1"><Link to={"/BalanceTranfer"} className="sub">Balance Tranfer</Link></div>
    <div className="sub1"><Link to={"/CreditCardInquiry"} className="sub">Credit Card Inquiry</Link></div>
  </div>
  <div className="r1">
  <h3>More</h3>
    <div className="sub1"><Link to={"/TermDeposit"} className="sub">Term Deposit</Link></div>
    <div className="sub1"><Link to={"/Insurens"} className="sub">Insurens</Link></div>
    <div className="sub1"><Link to={"/BusinessBanking"} className="sub">Business Banking</Link></div>
    <div className="sub1"><Link to={"/FinancialPlaning"} className="sub">Financial Planing</Link></div>
  </div>
  <div className="r1">
  <h3>Support</h3>
    <div className="sub1"><Link to={"/ActivateACard"} className="sub">Activate A Card</Link></div>
    <div className="sub1"><Link to={"/BusinessPaymentTools"} className="sub">Business Payment Tools</Link></div>
    <div className="sub1"><Link to={"/HardshipAssistance"} className="sub">Hardship Assistance</Link></div>
    <div className="sub1"><Link to={"/InternetBankingAssistance"} className="sub">Internet Banking Assistance</Link></div>
  </div>
  </div>
</div>
<div class="dropdown">
        <span>Header2</span>
        <span><CaretRightOutlined /></span>
  <div class="dropdown-content">
  <div className="r1"><h3>Accounts</h3>
    <div className="sub1" ><Link to={"/InterstRate"} className="sub">Interst Rate</Link></div>
    <div className="sub1"><Link to={"/waytobank"} className="sub">Way To Bank With Us</Link></div>
    <div className="sub1"><Link to={"/business"} className="sub">Business Account</Link></div>
    <div className="sub1"><Link to={"/CAlculatorr"} className="sub">Calculator</Link></div>
  </div>
  <div className="r1">
  <h3>Cradit Cards</h3>
    <div className="sub1"><Link to={"/FindTheCard"} className="sub">Find The Card</Link></div>
    <div className="sub1"><Link to={"/CompairAllCards"} className="sub">Compair All Cards</Link></div>
    <div className="sub1"><Link to={"/BalanceTranfer"} className="sub">Balance Tranfer</Link></div>
    <div className="sub1"><Link to={"/CreditCardInquiry"} className="sub">Credit Card Inquiry</Link></div>
  </div>
  <div className="r1">
  <h3>More</h3>
    <div className="sub1"><Link to={"/TermDeposit"} className="sub">Term Deposit</Link></div>
    <div className="sub1"><Link to={"/Insurens"} className="sub">Insurens</Link></div>
    <div className="sub1"><Link to={"/BusinessBanking"} className="sub">Business Banking</Link></div>
    <div className="sub1"><Link to={"/FinancialPlaning"} className="sub">Financial Planing</Link></div>
  </div>
  <div className="r1">
  <h3>Support</h3>
    <div className="sub1"><Link to={"/ActivateACard"} className="sub">Activate A Card</Link></div>
    <div className="sub1"><Link to={"/BusinessPaymentTools"} className="sub">Business Payment Tools</Link></div>
    <div className="sub1"><Link to={"/HardshipAssistance"} className="sub">Hardship Assistance</Link></div>
    <div className="sub1"><Link to={"/InternetBankingAssistance"} className="sub">Internet Banking Assistance</Link></div>
  </div>
  </div>
  </div>
  <div class="dropdown">
        <span>Header3</span>
        <span><CaretRightOutlined /></span>
  <div class="dropdown-content">
  <div className="r1"><h3>Accounts</h3>
    <div className="sub1" ><Link to={"/InterstRate"} className="sub">Interst Rate</Link></div>
    <div className="sub1"><Link to={"/waytobank"} className="sub">Way To Bank With Us</Link></div>
    <div className="sub1"><Link to={"/business"} className="sub">Business Account</Link></div>
    <div className="sub1"><Link to={"/CAlculatorr"} className="sub">Calculator</Link></div>
  </div>
  <div className="r1">
  <h3>Cradit Cards</h3>
    <div className="sub1"><Link to={"/FindTheCard"} className="sub">Find The Card</Link></div>
    <div className="sub1"><Link to={"/CompairAllCards"} className="sub">Compair All Cards</Link></div>
    <div className="sub1"><Link to={"/BalanceTranfer"} className="sub">Balance Tranfer</Link></div>
    <div className="sub1"><Link to={"/CreditCardInquiry"} className="sub">Credit Card Inquiry</Link></div>
  </div>
  <div className="r1">
  <h3>More</h3>
    <div className="sub1"><Link to={"/TermDeposit"} className="sub">Term Deposit</Link></div>
    <div className="sub1"><Link to={"/Insurens"} className="sub">Insurens</Link></div>
    <div className="sub1"><Link to={"/BusinessBanking"} className="sub">Business Banking</Link></div>
    <div className="sub1"><Link to={"/FinancialPlaning"} className="sub">Financial Planing</Link></div>
  </div>
  <div className="r1">
  <h3>Support</h3>
    <div className="sub1"><Link to={"/ActivateACard"} className="sub">Activate A Card</Link></div>
    <div className="sub1"><Link to={"/BusinessPaymentTools"} className="sub">Business Payment Tools</Link></div>
    <div className="sub1"><Link to={"/HardshipAssistance"} className="sub">Hardship Assistance</Link></div>
    <div className="sub1"><Link to={"/InternetBankingAssistance"} className="sub">Internet Banking Assistance</Link></div>
  </div>
  </div>
  </div>
  <div class="dropdown">
        <span>Header4</span>
        <span><CaretRightOutlined /></span>
  <div class="dropdown-content">
  <div className="r1"><h3>Accounts</h3>
    <div className="sub1" ><Link to={"/InterstRate"} className="sub">Interst Rate</Link></div>
    <div className="sub1"><Link to={"/waytobank"} className="sub">Way To Bank With Us</Link></div>
    <div className="sub1"><Link to={"/business"} className="sub">Business Account</Link></div>
    <div className="sub1"><Link to={"/CAlculatorr"} className="sub">Calculator</Link></div>
  </div>
  <div className="r1">
  <h3>Cradit Cards</h3>
    <div className="sub1"><Link to={"/FindTheCard"} className="sub">Find The Card</Link></div>
    <div className="sub1"><Link to={"/CompairAllCards"} className="sub">Compair All Cards</Link></div>
    <div className="sub1"><Link to={"/BalanceTranfer"} className="sub">Balance Tranfer</Link></div>
    <div className="sub1"><Link to={"/CreditCardInquiry"} className="sub">Credit Card Inquiry</Link></div>
  </div>
  <div className="r1">
  <h3>More</h3>
    <div className="sub1"><Link to={"/TermDeposit"} className="sub">Term Deposit</Link></div>
    <div className="sub1"><Link to={"/Insurens"} className="sub">Insurens</Link></div>
    <div className="sub1"><Link to={"/BusinessBanking"} className="sub">Business Banking</Link></div>
    <div className="sub1"><Link to={"/FinancialPlaning"} className="sub">Financial Planing</Link></div>
  </div>
  <div className="r1">
  <h3>Support</h3>
    <div className="sub1"><Link to={"/ActivateACard"} className="sub">Activate A Card</Link></div>
    <div className="sub1"><Link to={"/BusinessPaymentTools"} className="sub">Business Payment Tools</Link></div>
    <div className="sub1"><Link to={"/HardshipAssistance"} className="sub">Hardship Assistance</Link></div>
    <div className="sub1"><Link to={"/InternetBankingAssistance"} className="sub">Internet Banking Assistance</Link></div>
  </div>
  </div>
  </div>  
  <div class="dropdown">
        <span>Header5</span>
        <span><CaretRightOutlined /></span>
  <div class="dropdown-content">
  <div className="r1"><h3>Accounts</h3>
    <div className="sub1" ><Link to={"/InterstRate"} className="sub">Interst Rate</Link></div>
    <div className="sub1"><Link to={"/waytobank"} className="sub">Way To Bank With Us</Link></div>
    <div className="sub1"><Link to={"/business"} className="sub">Business Account</Link></div>
    <div className="sub1"><Link to={"/CAlculatorr"} className="sub">Calculator</Link></div>
  </div>
  <div className="r1">
  <h3>Cradit Cards</h3>
    <div className="sub1"><Link to={"/FindTheCard"} className="sub">Find The Card</Link></div>
    <div className="sub1"><Link to={"/CompairAllCards"} className="sub">Compair All Cards</Link></div>
    <div className="sub1"><Link to={"/BalanceTranfer"} className="sub">Balance Tranfer</Link></div>
    <div className="sub1"><Link to={"/CreditCardInquiry"} className="sub">Credit Card Inquiry</Link></div>
  </div>
  <div className="r1">
  <h3>More</h3>
    <div className="sub1"><Link to={"/TermDeposit"} className="sub">Term Deposit</Link></div>
    <div className="sub1"><Link to={"/Insurens"} className="sub">Insurens</Link></div>
    <div className="sub1"><Link to={"/BusinessBanking"} className="sub">Business Banking</Link></div>
    <div className="sub1"><Link to={"/FinancialPlaning"} className="sub">Financial Planing</Link></div>
  </div>
  <div className="r1">
  <h3>Support</h3>
    <div className="sub1"><Link to={"/ActivateACard"} className="sub">Activate A Card</Link></div>
    <div className="sub1"><Link to={"/BusinessPaymentTools"} className="sub">Business Payment Tools</Link></div>
    <div className="sub1"><Link to={"/HardshipAssistance"} className="sub">Hardship Assistance</Link></div>
    <div className="sub1"><Link to={"/InternetBankingAssistance"} className="sub">Internet Banking Assistance</Link></div>
  </div>
  </div>
  </div>
  <div className="search">
    <div><button className="search-menubtn">Login</button></div>
    <div className="search-box">
      <span className="search-web"><input type="text" placeholder="i'm looking for..."></input></span>
      <span className="search-icon"><SearchOutlined /></span>
    </div>
    </div> 
        </div>
    )}
