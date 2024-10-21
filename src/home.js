import Banner from "./banner"
import Cars from "./cars"
import { useState } from "react"
import ShowRoom from "./showroom"
const Home = ({actions}) =>{
const [action, setAction] = useState("all")
    return(
        <div>
           {
            actions === "home"?<div>
                <Banner action={action} setAction={setAction}/>
                <Cars action={action} setAction={setAction}/>
            </div>:<div></div>
           }
           {
            actions === "showroom"?<div>
               <ShowRoom/>
            </div>:<div></div>
           }
        </div>
    )
}

export default Home