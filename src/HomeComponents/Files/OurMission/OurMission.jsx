
import "../../Styles/OurMission/OurMission.css"
import diamond from "../../../../assets/Icons/DiamondIcon.png"
import Button from "../Button/Button"
import { Link } from 'react-router-dom'


const OurMission = () => {
     return (
          <div id="ourMission">
               <div className="ourMissionContext">
                    <img src={diamond} alt="" />
                    <p className='our'>Our Mission</p>
                    <h2>COMMERCE HARBOR FZE</h2>
                    <p className='desc1'>We are committed to being a leading polymer distributor, providing exceptional value to our customers through the reliable supply of high-quality polymer materials. Our mission is to be a trusted partner in your success, delivering innovative solutions and personalized service that exceed your expectations.</p>
                    <div className="ourMissionButton">
                         <Button  destination ={'/Commerce-Harbor-FZE---React/contact'} text={"GET A QUOTE"} btnColor={"red"} />
                         <Link to="/Commerce-Harbor-FZE---React/products">
                              <button className="transparent">OUR PRODUCTS</button>
                         </Link>
                    </div>
               </div>
          </div>
     )
}

export default OurMission