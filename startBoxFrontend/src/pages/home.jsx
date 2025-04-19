
import { useState } from "react"
import "./pageCss/home.css"


const Home1 = () =>{

    const [mouseOnHomeOne , SetMouseOnHomeOne] = useState("false")


    const handleMouseEnter = () => {
        SetMouseOnHomeOne(true);
    };

    const handleMouseLeave = () => {
        SetMouseOnHomeOne(false);
    };

    return(
        <div className={`home-1 ${mouseOnHomeOne===true ? "home-1-mouse-enter":"home-1-mouse-leave"}`}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="home-1-cont"  >
                <button className="home-1-cont-button-1">Explore our 2024 Year in Review</button>
                <h1>Built to scale <br /> all private funds</h1>
                <h5>AngelList provides investors and innovators with the tools to grow.</h5>
                <button className="home-1-cont-button-2">Contact sales</button>
            </div>

            <div className="home-2-cont-1">
                <div className="home-2-cont-1-box home-2-cont-1-box-1">

                </div>

                <div className="home-2-cont-1-box home-2-cont-1-box-2">

                </div>
                

                <div className="home-2-cont-1-box home-2-cont-1-box-3">

                </div>

                <div className="home-2-cont-1-box home-2-cont-1-box-4">

                </div>
            </div>

        </div>
    )
}




const Home =() =>{
    return(
        <div id="home">
            <Home1/>
        </div>
    )
}


export default Home ;