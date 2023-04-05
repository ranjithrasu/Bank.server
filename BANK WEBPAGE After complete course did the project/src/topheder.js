import { BrowserRouter,Routes,Route } from "react-router-dom"

import Header from "./header"

export default function Topheader(){
    return(<div>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Header/>}></Route>
        </Routes>
        
        </BrowserRouter>
    </div>

    )
}