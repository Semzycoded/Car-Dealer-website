import useFetch from "./useFetch"


const ShowRoom = () =>{
const{data:cars} = useFetch("http://localhost:3001/cars")
    return(
    <div>

   <div style={{textAlign:"center"}}>
   <h1 style={{marginTop:"100px",borderBottom:"5px black solid",padding:"10px",color:"black",fontFamily:"monospace",fontWeight:"3000"}}>Jeeps</h1>
   </div>
   <div>
    <h2 style={{color:"red",fontFamily:"fantasy"}}>Toyota 4Runner</h2>
   </div>
    <div style={{gap:"30px",backgroundColor:"white",paddingTop:"50px"}}>
            {
                cars &&
                cars
                .filter((e) => e.brand === "4runner")
                .map((e) =>(
                    <div style={{display:"flex",alignItems:"center",border:"5px darkred double"}}>
                        <img className="showimg" style={{width:"50%"}} src={e.image} alt=""/>
                       <div className="px-5 py-5" style={{marginLeft:"50px",background:"linear-gradient(black,darkred,black)",width:"800px",color:"aqua"}}>
                       <h3>Brand: Toyota {e.brand}</h3>
                        <h3>Number of gears: {e.gear}</h3>
                        <h3>Year: {e.year}</h3>
                       </div>
                    </div>
                ))
            }
        </div>

   <div style={{marginTop:"50px"}}>
    <h2 style={{color:"red",fontFamily:"fantasy"}}>Toyota Highlander</h2>
   </div>
    <div style={{gap:"30px",backgroundColor:"white",paddingTop:"50px"}}>
            {
                cars &&
                cars
                .filter((e) => e.brand === "Highlander")
                .map((e) =>(
                    <div style={{display:"flex",alignItems:"center",border:"5px darkred double"}}>
                        <img className="showimg" style={{width:"50%"}} src={e.image} alt=""/>
                       <div className="px-5 py-5" style={{marginLeft:"50px",background:"linear-gradient(black,darkred,black)",width:"800px",color:"aqua"}}>
                       <h3>Brand: Toyota {e.brand}</h3>
                        <h3>Number of gears: {e.gear}</h3>
                        <h3>Year: {e.year}</h3>
                       </div>
                    </div>
                ))
            }
        </div>

   <div style={{marginTop:"50px"}}>
    <h2 style={{color:"red",fontFamily:"fantasy"}}>Toyota BZ4X</h2>
   </div>
    <div style={{gap:"30px",backgroundColor:"white",paddingTop:"50px"}}>
            {
                cars &&
                cars
                .filter((e) => e.brand === "BZ4X")
                .map((e) =>(
                    <div style={{display:"flex",alignItems:"center",border:"5px darkred double"}}>
                        <img className="showimg" style={{width:"50%"}} src={e.image} alt=""/>
                       <div className="px-5 py-5" style={{marginLeft:"50px",background:"linear-gradient(black,darkred,black)",width:"800px",color:"aqua"}}>
                       <h3>Brand: Toyota {e.brand}</h3>
                        <h3>Number of gears: {e.gear}</h3>
                        <h3>Year: {e.year}</h3>
                       </div>
                    </div>
                ))
            }
        </div>
            
    <div style={{textAlign:"center"}}>
   <h1 style={{marginTop:"100px",borderBottom:"5px black solid",padding:"10px",color:"black",fontFamily:"monospace",fontWeight:"3000"}}>Cars</h1>
   </div>

   <div>
    <h2 style={{color:"red",fontFamily:"fantasy"}}>Toyota Camry</h2>
   </div>
    <div style={{gap:"30px",backgroundColor:"white",paddingTop:"50px"}}>
            {
                cars &&
                cars
                .filter((e) => e.brand === "Camry")
                .map((e) =>(
                    <div style={{display:"flex",alignItems:"center",border:"5px darkred double"}}>
                        <img className="showimg" style={{width:"50%"}} src={e.image} alt=""/>
                       <div className="px-5 py-5" style={{marginLeft:"50px",background:"linear-gradient(black,darkred,black)",width:"800px",color:"aqua"}}>
                       <h3>Brand: Toyota {e.brand}</h3>
                        <h3>Number of gears: {e.gear}</h3>
                        <h3>Year: {e.year}</h3>
                       </div>
                    </div>
                ))
            }
        </div>

    <div style={{marginTop:"50px"}}>
    <h2 style={{color:"red",fontFamily:"fantasy"}}>Toyota Corolla</h2>
   </div>
    <div style={{gap:"30px",backgroundColor:"white",paddingTop:"50px"}}>
            {
                cars &&
                cars
                .filter((e) => e.brand === "Corolla")
                .map((e) =>(
                    <div style={{display:"flex",alignItems:"center",border:"5px darkred double"}}>
                        <img className="showimg" style={{width:"50%"}} src={e.image} alt=""/>
                       <div className="px-5 py-5" style={{marginLeft:"50px",background:"linear-gradient(black,darkred,black)",width:"800px",color:"aqua"}}>
                       <h3>Brand: Toyota {e.brand}</h3>
                        <h3>Number of gears: {e.gear}</h3>
                        <h3>Year: {e.year}</h3>
                       </div>
                    </div>
                ))
            }
        </div>

        <div style={{marginTop:"50px"}}>
    <h2 style={{color:"red",fontFamily:"fantasy"}}>Toyota Prius</h2>
   </div>
    <div style={{gap:"30px",backgroundColor:"white",paddingTop:"50px"}}>
            {
                cars &&
                cars
                .filter((e) => e.brand === "Prius")
                .map((e) =>(
                    <div style={{display:"flex",alignItems:"center",border:"5px darkred double"}}>
                        <img className="showimg" style={{width:"50%"}} src={e.image} alt=""/>
                       <div className="px-5 py-5" style={{marginLeft:"50px",background:"linear-gradient(black,darkred,black)",width:"800px",color:"aqua"}}>
                       <h3>Brand: Toyota {e.brand}</h3>
                        <h3>Number of gears: {e.gear}</h3>
                        <h3>Year: {e.year}</h3>
                       </div>
                    </div>
                ))
            }
        </div>

        <div style={{marginTop:"50px"}}>
    <h2 style={{color:"red",fontFamily:"fantasy"}}>Toyota Avalon</h2>
   </div>
    <div style={{gap:"30px",backgroundColor:"white",paddingTop:"50px"}}>
            {
                cars &&
                cars
                .filter((e) => e.brand === "Avalon")
                .map((e) =>(
                    <div style={{display:"flex",alignItems:"center",border:"5px darkred double"}}>
                        <img className="showimg" style={{width:"50%"}} src={e.image} alt=""/>
                       <div className="px-5 py-5" style={{marginLeft:"50px",background:"linear-gradient(black,darkred,black)",width:"800px",color:"aqua"}}>
                       <h3>Brand: Toyota {e.brand}</h3>
                        <h3>Number of gears: {e.gear}</h3>
                        <h3>Year: {e.year}</h3>
                       </div>
                    </div>
                ))
            }
        </div>

        <div style={{marginTop:"50px"}}>
    <h2 style={{color:"red",fontFamily:"fantasy"}}>Toyota 86</h2>
   </div>
    <div style={{gap:"30px",backgroundColor:"white",paddingTop:"50px"}}>
            {
                cars &&
                cars
                .filter((e) => e.brand === "86")
                .map((e) =>(
                    <div style={{display:"flex",alignItems:"center",border:"5px darkred double"}}>
                        <img className="showimg" style={{width:"50%"}} src={e.image} alt=""/>
                       <div className="px-5 py-5" style={{marginLeft:"50px",background:"linear-gradient(black,darkred,black)",width:"800px",color:"aqua"}}>
                       <h3>Brand: Toyota {e.brand}</h3>
                        <h3>Number of gears: {e.gear}</h3>
                        <h3>Year: {e.year}</h3>
                       </div>
                    </div>
                ))
            }
        </div>

        <div style={{marginTop:"50px"}}>
    <h2 style={{color:"red",fontFamily:"fantasy"}}>Toyota Yaris</h2>
   </div>
    <div style={{gap:"30px",backgroundColor:"white",paddingTop:"50px"}}>
            {
                cars &&
                cars
                .filter((e) => e.brand === "yaris")
                .map((e) =>(
                    <div style={{display:"flex",alignItems:"center",border:"5px darkred double"}}>
                        <img className="showimg" style={{width:"50%"}} src={e.image} alt=""/>
                       <div className="px-5 py-5" style={{marginLeft:"50px",background:"linear-gradient(black,darkred,black)",width:"800px",color:"aqua"}}>
                       <h3>Brand: Toyota {e.brand}</h3>
                        <h3>Number of gears: {e.gear}</h3>
                        <h3>Year: {e.year}</h3>
                       </div>
                    </div>
                ))
            }
        </div>
    <div style={{textAlign:"center"}}>
   <h1 style={{marginTop:"100px",borderBottom:"5px black solid",padding:"10px",color:"black",fontFamily:"monospace",fontWeight:"3000"}}>Suvs</h1>
   </div>

   <div>
    <h2 style={{color:"red",fontFamily:"fantasy"}}>Toyota RAV4</h2>
   </div>
    <div style={{gap:"30px",backgroundColor:"white",paddingTop:"50px"}}>
            {
                cars &&
                cars
                .filter((e) => e.brand === "RAV4")
                .map((e) =>(
                    <div style={{display:"flex",alignItems:"center",border:"5px darkred double"}}>
                        <img className="showimg" style={{width:"50%"}} src={e.image} alt=""/>
                       <div className="px-5 py-5" style={{marginLeft:"50px",background:"linear-gradient(black,darkred,black)",width:"800px",color:"aqua"}}>
                       <h3>Brand: Toyota {e.brand}</h3>
                        <h3>Number of gears: {e.gear}</h3>
                        <h3>Year: {e.year}</h3>
                       </div>
                    </div>
                ))
            }
        </div>

        <div style={{marginTop:"50px"}}>
    <h2 style={{color:"red",fontFamily:"fantasy"}}>Toyota C-HR</h2>
   </div>
    <div style={{gap:"30px",backgroundColor:"white",paddingTop:"50px"}}>
            {
                cars &&
                cars
                .filter((e) => e.brand === "C-HR")
                .map((e) =>(
                    <div style={{display:"flex",alignItems:"center",border:"5px darkred double"}}>
                        <img className="showimg" style={{width:"50%"}} src={e.image} alt=""/>
                       <div className="px-5 py-5" style={{marginLeft:"50px",background:"linear-gradient(black,darkred,black)",width:"800px",color:"aqua"}}>
                       <h3>Brand: Toyota {e.brand}</h3>
                        <h3>Number of gears: {e.gear}</h3>
                        <h3>Year: {e.year}</h3>
                       </div>
                    </div>
                ))
            }
        </div>

        <div style={{marginTop:"50px"}}>
    <h2 style={{color:"red",fontFamily:"fantasy"}}>Toyota Venza</h2>
   </div>
    <div style={{gap:"30px",backgroundColor:"white",paddingTop:"50px"}}>
            {
                cars &&
                cars
                .filter((e) => e.brand === "Venza")
                .map((e) =>(
                    <div style={{display:"flex",alignItems:"center",border:"5px darkred double"}}>
                        <img className="showimg" style={{width:"50%"}} src={e.image} alt=""/>
                       <div className="px-5 py-5" style={{marginLeft:"50px",background:"linear-gradient(black,darkred,black)",width:"800px",color:"aqua"}}>
                       <h3>Brand: Toyota {e.brand}</h3>
                        <h3>Number of gears: {e.gear}</h3>
                        <h3>Year: {e.year}</h3>
                       </div>
                    </div>
                ))
            }
        </div>

    <div style={{textAlign:"center"}}>
   <h1 style={{marginTop:"100px",borderBottom:"5px black solid",padding:"10px",color:"black",fontFamily:"monospace",fontWeight:"3000"}}>Vans</h1>
   </div>

   <div>
    <h2 style={{color:"red",fontFamily:"fantasy"}}>Toyota Sienna</h2>
   </div>
    <div style={{gap:"30px",backgroundColor:"white",paddingTop:"50px"}}>
            {
                cars &&
                cars
                .filter((e) => e.brand === "Sienna")
                .map((e) =>(
                    <div style={{display:"flex",alignItems:"center",border:"5px darkred double"}}>
                        <img className="showimg" style={{width:"50%"}} src={e.image} alt=""/>
                       <div className="px-5 py-5" style={{marginLeft:"50px",background:"linear-gradient(black,darkred,black)",width:"800px",color:"aqua"}}>
                       <h3>Brand: Toyota {e.brand}</h3>
                        <h3>Number of gears: {e.gear}</h3>
                        <h3>Year: {e.year}</h3>
                       </div>
                    </div>
                ))
            }
        </div>

        <div style={{textAlign:"center"}}>
   <h1 style={{marginTop:"100px",borderBottom:"5px black solid",padding:"10px",color:"black",fontFamily:"monospace",fontWeight:"3000"}}>Trucks</h1>
   </div>

   <div>
    <h2 style={{color:"red",fontFamily:"fantasy"}}>Toyota Tundra</h2>
   </div>
    <div style={{gap:"30px",backgroundColor:"white",paddingTop:"50px"}}>
            {
                cars &&
                cars
                .filter((e) => e.brand === "Tundra")
                .map((e) =>(
                    <div style={{display:"flex",alignItems:"center",border:"5px darkred double"}}>
                        <img className="showimg" style={{width:"50%"}} src={e.image} alt=""/>
                       <div className="px-5 py-5" style={{marginLeft:"50px",background:"linear-gradient(black,darkred,black)",width:"800px",color:"aqua"}}>
                       <h3>Brand: Toyota {e.brand}</h3>
                        <h3>Number of gears: {e.gear}</h3>
                        <h3>Year: {e.year}</h3>
                       </div>
                    </div>
                ))
            }
        </div>

        <div style={{marginTop:"50px"}}>
    <h2 style={{color:"red",fontFamily:"fantasy"}}>Toyota Tacoma</h2>
   </div>
    <div style={{gap:"30px",backgroundColor:"white",paddingTop:"50px"}}>
            {
                cars &&
                cars
                .filter((e) => e.brand === "Tacoma")
                .map((e) =>(
                    <div style={{display:"flex",alignItems:"center",border:"5px darkred double"}}>
                        <img className="showimg" style={{width:"50%"}} src={e.image} alt=""/>
                       <div className="px-5 py-5" style={{marginLeft:"50px",background:"linear-gradient(black,darkred,black)",width:"800px",color:"aqua"}}>
                       <h3>Brand: Toyota {e.brand}</h3>
                        <h3>Number of gears: {e.gear}</h3>
                        <h3>Year: {e.year}</h3>
                       </div>
                    </div>
                ))
            }
        </div>

    </div>
       
    )
}

export default ShowRoom