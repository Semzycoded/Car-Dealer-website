import truck from "./Assets/tundra2022-24.PNG"
import jeep from "./Assets/4runner 2010-24.PNG"
import van from "./Assets/sienna2021-24.PNG"
import car from "./Assets/camry2018-2024.PNG"
import suv from "./Assets/rav4 2019-24.PNG"
import { Carousel } from "react-bootstrap";

const Banner = ({action, setAction}) => {
  return (
   <>
   {
      action === "search"?<div></div>:<div><div className="hero pt-5">
      <div className="card bg-dark text-white border-0">
        {
          action === "all"?<div><Carousel infinite="true" style={{width:"100%"}} className="skill-slider  carousel-fade">
          <div className="carousel-item">
          <img style={{opacity:"0.2",filter:"alpha(filter = 20)"}} height="400px auto" src={truck} className="card-img" alt="" />                               
          </div>
          <div className="carousel-item">
            <img style={{opacity:"0.2",filter:"alpha(filter = 20)"}} height="400px auto" src={jeep} className="card-img" alt="" />
          </div>
          <div className="carousel-item">
            <img style={{opacity:"0.2",filter:"alpha(filter = 20)"}} height="400px auto" src={van} className="card-img" alt="" />
          </div>
          <div className="carousel-item">
            <img style={{opacity:"0.2",filter:"alpha(filter = 20)"}} height="400px auto" src={car} className="card-img" alt="" />
          </div>
          <div className="carousel-item">
            <img style={{opacity:"0.2",filter:"alpha(filter = 20)"}} height="400px auto" src={suv} className="card-img" alt="" />
          </div>
       </Carousel></div>:<div></div>
        }
        {
          action === "trucks"?<div><img style={{opacity:"0.2",filter:"alpha(filter = 20)"}} height="400px auto" src={truck} className="card-img" alt="" />
  </div>:<div></div>
        }
        {
          action === "jeeps"?<div><img style={{opacity:"0.2",filter:"alpha(filter = 20)"}} height="400px auto" src={jeep} className="card-img" alt="" />
  </div>:<div></div>
        }
        {
          action === "vans"?<div><img style={{opacity:"0.2",filter:"alpha(filter = 20)"}} height="400px auto" src={van} className="card-img" alt="" />
  </div>:<div></div>
        }
        {
          action === "cars"?<div><img style={{opacity:"0.2",filter:"alpha(filter = 20)"}} height="400px auto" src={car} className="card-img" alt="" />
  </div>:<div></div>
        }
        {
          action === "suvs"?<div><img style={{opacity:"0.2",filter:"alpha(filter = 20)"}} height="400px auto" src={suv} className="card-img" alt="" />
  </div>:<div></div>
        }
        <div className="card-img-overlay d-flex flex-column justify-content-center ">
          <div className="container">
            <p className="text-danger">Toyota Brands 2024</p>
            <h5 className="card-title display-3 fs-1 fw-normal mb-0">MODERN-CLASSIC</h5>
            <h5 style={{fontSize:"60px"}} className="card-title display-3 fw-bolder mb-0">INCREDIBLE</h5>
          <p className="card-text lead">
           CHECK OUT ALL THE TRENDS
          </p>
          </div>
        </div>
      </div>
    </div></div>
   }
   </>
  );
};

export default Banner;






