
import "../../Styles/OurMission/OurMission.css"
import diamond from "../../../../assets/Icons/DiamondIcon.png"
import Button from "../Button/Button"


const OurMission = () => {
     return (
          <div id="ourMission">
               <div className="ourMissionContext">
                    <img src={diamond} alt="" />
                    <p className='ourServices ourMission'>OUR Mission</p>
                    <h2>COMMERCE HARBOR FZE</h2>
                    <p className='desc1'>We are committed to being a leading polymer distributor, providing exceptional value to our customers through the reliable supply of high-quality polymer materials. Our mission is to be a trusted partner in your success, delivering innovative solutions and personalized service that exceed your expectations.</p>
                    <div className="ourMissionButton">
                         <Button text={"GET A QUOTE"} btnColor={"red"}/>
                         <button className="transparent">OUR PRODUCTS</button>
                    </div>
               </div>
          </div>
     )
}

export default OurMission