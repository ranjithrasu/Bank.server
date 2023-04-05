import Suffix from "./suffix";

function Personalinput(){
    return(
        
        <div>
        <div className="namedetails">
            <div>
            <p>First Name</p>
            <input type="text" className='input' />
            </div>
            <div>
            <p>Middle Name(optional)</p>
            <input type="text" className='input' />
            </div>
            <div>
            <p>Last Name</p>
            <input type="text" className='input' />
            </div>
            <div>
                <Suffix></Suffix>
            </div>    
        </div>
        <div className="details1">
            <div >
            <p>Security Number</p>
            <input type="password" className='input' />
            </div>
            <div className="DOB">
            <p>Date Of Birth</p>
            <input type="text" className='input' />
            </div>
            </div>
        <div className="textttt">
            <div className="texthead">
            <h5>IMPORTANT INFORMATION ABOUT OPENING A NEW ACCOUNT AT OUR BANK</h5>
            </div>          
            <div className="textpara">
            <p>To help the United States government fight terrorism and money laundering, federal law requires us to obtain, verify, and record information that identifies each person that opens an account. What this means for you: when you open an account, we will ask for your name, a street address, date of birth, and an identification number, such as a Social Security number, that federal law requires us to obtain. We may also ask to see your driver’s license or other identifying documents that will allow us to identify you. We appreciate your cooperation.</p>
            </div>
        </div>
        </div>
        
    )
} 
export default Personalinput;