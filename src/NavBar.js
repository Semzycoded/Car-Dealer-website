import { useNavigate } from "react-router-dom"
import Home from "./home"

const NavBar = ({actions, setActions}) =>{
// const navigate = useNavigate()

// const handleHome = () =>{
//   navigate("/")
// }
    return(
        <div style={{background:"black"}} className="Nav fixed-top">
            <div className="p-2 bg-danger text-white" style={{border:"2px solid transparent",boxShadow:"200px",transform: "skew(-23deg)",marginLeft:"-10px",position:"relative"}}>
               <h5>Car Dealer</h5>
            </div>
            <div>
                <div style={{marginTop:"-3px",background:"black"}} className=" text-white px-5">
                    <p id="slogan" className="text-danger">get your best of the best cars here never to regret your favorite car,get the latest trends here,contact us 08136151937</p>
                </div>
                <div style={{marginLeft:"-11px",transform: "skew(-23deg)"}} className="bg-danger text-white px-5">
                 <ul id="nav" style={{height:"30px",marginLeft:"750px"}} className="nav justify-content-end">
                  <li className="nav-item">
                    <a id="navlink" onClick={() => {setActions("home")}} className="nav-link active" aria-current="page">Home</a>
                  </li>
                  <li className="nav-item">
                    <a id="navlink" onClick={() => {setActions("showroom")}} className="nav-link">Showroom</a>
                  </li>
                  <li className="nav-item">
                    <a id="navlink" className="nav-link">Link</a>
                  </li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar