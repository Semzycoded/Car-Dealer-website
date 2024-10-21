import useFetch from "./useFetch"
import search from "./Assets/search.svg"
import arrow from "./Assets/arrow-right.svg"
import arrow1 from "./Assets/arrowleftblack.svg"
import { NavLink } from "react-router-dom"
import SearchBar from "./search"


const Cars = ({action, setAction}) =>{
    const{data:cars} = useFetch("http://localhost:3001/cars")
    return(
        <div>
            {
                action === "search"?<div></div>:<div><div className="my-4" style={{display:"flex",gap:"50px",justifyContent:"center"}}>
                <button className="btn btn-outline-danger px-3 py-2" onClick={() => {setAction("all")}}>All</button>
                <button className="btn btn-outline-danger px-3 py-2" onClick={() => {setAction("suvs")}}>SUVs</button>
                <button className="btn btn-outline-danger px-3 py-2" onClick={() => {setAction("vans")}}>Vans</button>
                <button className="btn btn-outline-danger px-3 py-2" onClick={() => {setAction("jeeps")}}>Jeeps</button>
                <button className="btn btn-outline-danger px-3 py-2" onClick={() => {setAction("trucks")}}>Trucks</button>
                <button className="btn btn-outline-danger px-3 py-2" onClick={() => {setAction("cars")}}>Cars</button>

                <button className="btn btn-outline-danger px-3 py-2"  onClick={() => {setAction("search")}}><img src={search} alt=""/></button>
               </div></div>
            }
          
            {action === "all"?<div><div className="products">
                <div className="flashred">
                    <div className="flashdiv">
                    <h5>Jeeps</h5>
                    </div>
                    <div className="seeall"><p><b>SEE ALL </b></p><img  className="seeimg" src={arrow} height="16px" alt=""/></div>
                </div>  
                    <div className="line">
                    {
                        cars &&
                        cars
                        .filter((e) => e.name === "jeep")
                        .map((e) =>(
                            // <NavLink to={`/products/${e.id}`}>
                            <div className="productimg">
                            <img src={e.image} width="160px" className="product" alt=""/>
                            <p className="producttext1">Toyota {e.brand} </p><p className="producttext2">{e.price1} </p><p className="producttext3">{e.price2} </p>
                            </div>
                            // </NavLink>
                        ))
                    }
    
                    </div>
                </div>
               <div className="products">
               <div className="flashred">
                    <div className="flashdiv">
                    <h5>Cars</h5>
                    </div>
                    <div className="seeall"><p><b>SEE ALL </b></p><img  className="seeimg" src={arrow} height="16px" alt=""/></div>
                </div>         
                    <div className="line">
                    {
                        cars &&
                        cars
                        .filter((e) => e.name === "car")
                        .map((e) =>(
                            // <NavLink to={`/products/${e.id}`}>
                            <div className="productimg">
                            <img src={e.image} width="160px" className="product" alt=""/>
                            <p className="producttext1">Toyota {e.brand} </p><p className="producttext2">{e.price1} </p><p className="producttext3">{e.price2} </p>
                            </div>
                            // </NavLink>
                        ))
                    }
    
                    </div>
                </div>
    
               <div className="products">
               <div className="flashred">
                    <div className="flashdiv">
                    <h5>SUVs</h5>
                    </div>
                    <div className="seeall"><p><b>SEE ALL </b></p><img  className="seeimg" src={arrow} height="16px" alt=""/></div>
                </div>        
                    <div className="line">
                    {
                        cars &&
                        cars
                        .filter((e) => e.name === "suv")
                        .map((e) =>(
                            // <NavLink to={`/products/${e.id}`}>
                            <div className="productimg">
                            <img src={e.image} width="160px" className="product" alt=""/>
                            <p className="producttext1">Toyota {e.brand} </p><p className="producttext2">{e.price1} </p><p className="producttext3">{e.price2} </p>
                            </div>
                            // </NavLink>
                        ))
                    }
    
                    </div>
                </div>
               <div className="products">
               <div className="flashred">
                    <div className="flashdiv">
                    <h5>Vans</h5>
                    </div>
                    <div className="seeall"><p><b>SEE ALL </b></p><img  className="seeimg" src={arrow} height="16px" alt=""/></div>
                </div>  
                    <div className="line">
                    {
                        cars &&
                        cars
                        .filter((e) => e.name === "van")
                        .map((e) =>(
                            // <NavLink to={`/products/${e.id}`}>
                            <div className="productimg">
                            <img src={e.image} width="160px" className="product" alt=""/>
                            <p className="producttext1">Toyota {e.brand} </p><p className="producttext2">{e.price1} </p><p className="producttext3">{e.price2} </p>
                            </div>
                            // </NavLink>
                        ))
                    }
    
                    </div>
                </div>
    
               <div className="products">
               <div className="flashred">
                    <div className="flashdiv">
                    <h5>Trucks</h5>
                    </div>
                    <div className="seeall"><p><b>SEE ALL </b></p><img  className="seeimg" src={arrow} height="16px" alt=""/></div>
                </div>  
                    <div className="line">
                    {
                        cars &&
                        cars
                        .filter((e) => e.name === "truck")
                        .map((e) =>(
                            // <NavLink to={`/products/${e.id}`}>
                            <div className="productimg">
                            <img src={e.image} width="160px" className="product" alt=""/>
                            <p className="producttext1">Toyota {e.brand} </p><p className="producttext2">{e.price1} </p><p className="producttext3">{e.price2} </p>
                            </div>
                            // </NavLink>
                        ))
                    }
    
                    </div>
                </div></div>:<div></div>}
            {
                action === "jeeps"?<div><div className="products">
                  <div className="flashred">
                    <div className="flashdiv">
                    <h5>Jeeps</h5>
                    </div>
                    <div className="seeall"><p><b>SEE ALL </b></p><img  className="seeimg" src={arrow} height="16px" alt=""/></div>
                </div>          
                    <div className="line">
                    {
                        cars &&
                        cars
                        .filter((e) => e.name === "jeep")
                        .map((e) =>(
                            // <NavLink to={`/products/${e.id}`}>
                            <div className="productimg">
                            <img src={e.image} style={{}} width="160px" className="product" alt=""/>
                            <p className="producttext1">Toyota {e.brand} </p><p className="producttext2">{e.price1} </p><p className="producttext3">{e.price2} </p>
                            </div>
                            // </NavLink>
                        ))
                    }
    
                    </div>
                </div></div>:<div></div>
            }
            {
                action === "cars"?<div> <div className="products">
                  <div className="flashred">
                    <div className="flashdiv">
                    <h5>Cars</h5>
                    </div>
                    <div className="seeall"><p><b>SEE ALL </b></p><img  className="seeimg" src={arrow} height="16px" alt=""/></div>
                </div>          
                    <div className="line">
                    {
                        cars &&
                        cars
                        .filter((e) => e.name === "car")
                        .map((e) =>(
                            <NavLink to={`/cars/${e.id}`}>
                            <div className="productimg">
                            <img src={e.image} width="160px" className="product" alt=""/>
                            <p className="producttext1">Toyota {e.brand} </p><p className="producttext2">{e.price1} </p><p className="producttext3">{e.price2} </p>
                            </div>
                            </NavLink>
                        ))
                    }
    
                    </div>
                </div></div>:<div></div>
            }
            {
                action === "suvs"?<div><div className="products">
                 <div className="flashred">
                    <div className="flashdiv">
                    <h5>SUVs</h5>
                    </div>
                    <div className="seeall"><p><b>SEE ALL </b></p><img  className="seeimg" src={arrow} height="16px" alt=""/></div>
                </div>         
                    <div className="line">
                    {
                        cars &&
                        cars
                        .filter((e) => e.name === "suv")
                        .map((e) =>(
                            // <NavLink to={`/products/${e.id}`}>
                            <div className="productimg">
                            <img src={e.image} width="160px" className="product" alt=""/>
                            <p className="producttext1">Toyota {e.brand} </p><p className="producttext2">{e.price1} </p><p className="producttext3">{e.price2} </p>
                            </div>
                            // </NavLink>
                        ))
                    }
    
                    </div>
                </div></div>:<div></div>
            }
            {
                action === "vans"?<div> <div className="products">
                 <div className="flashred">
                    <div className="flashdiv">
                    <h5>Vans</h5>
                    </div>
                    <div className="seeall"><p><b>SEE ALL </b></p><img  className="seeimg" src={arrow} height="16px" alt=""/></div>
                </div>  
                    <div className="line">
                    {
                        cars &&
                        cars
                        .filter((e) => e.name === "van")
                        .map((e) =>(
                            // <NavLink to={`/products/${e.id}`}>
                            <div className="productimg">
                            <img src={e.image} width="160px" className="product" alt=""/>
                            <p className="producttext1">Toyota {e.brand} </p><p className="producttext2">{e.price1} </p><p className="producttext3">{e.price2} </p>
                            </div>
                            // </NavLink>
                        ))
                    }
    
                    </div>
                </div></div>:<div></div>
            }
            {
                action === "trucks"?<div><div className="products">
                  <div className="flashred">
                    <div className="flashdiv">
                    <h5>Trucks</h5>
                    </div>
                    <div className="seeall"><p><b>SEE ALL </b></p><img  className="seeimg" src={arrow} height="16px" alt=""/></div>
                </div>         
                    <div className="line">
                    {
                        cars &&
                        cars
                        .filter((e) => e.name === "truck")
                        .map((e) =>(
                            // <NavLink to={`/products/${e.id}`}>
                            <div className="productimg">
                            <img src={e.image} width="160px" className="product" alt=""/>
                            <p className="producttext1">Toyota {e.brand} </p><p className="producttext2">{e.price1} </p><p className="producttext3">{e.price2} </p>
                            </div>
                            // </NavLink>
                        ))
                    }
    
                    </div>
                </div></div>:<div></div>
            }
            {
                action === "search"?<div>
                    <img onClick={() => {setAction("all")}} style={{marginTop:"70px",position:"relative"}} src={arrow1} alt="" />
                    <SearchBar/></div>:<div></div>
            }
        </div>
    )
}

export default Cars