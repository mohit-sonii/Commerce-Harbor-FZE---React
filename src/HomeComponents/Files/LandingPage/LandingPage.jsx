import { React, useEffect, useState } from 'react'
import '../../Styles/LandingPage/LandingPage.css'
import Button from "../Button/Button"
// import picture1 from "../../../../assets/Thumbnail/Picture1.png"
// import picture2 from "../../../../assets/Thumbnail/Picture2.png"
// import picture3 from "../../../../assets/Thumbnail/Picture3.png"
// import picture4 from "../../../../assets/Thumbnail/Picture4.png"


const LandingPage = () => {
     // const [backgroundIndex, setBackgroundIndex] = useState(0)

     // const backgroundImages = [
     //      picture1, picture2, picture3, picture4
     // ]
     // useEffect(() => {
     //      const interval = setInterval(() => {
     //           setBackgroundIndex((prevIndex) => (prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1));
     //      }, 5000); // Change background every 5 seconds (adjust as needed)

     //      // return () => clearInterval(interval);
     // }, []);


     return (
          <>
               <div id="container">
                    <div className="image-container" 
                    // style={{ backgroundImage: `url(${backgroundImages[backgroundIndex]})`,transition: 'background-image 1s ease-in-out' }} 
                    >
                         <div className="image-headings">
                              <p className='heading'>Your Trusted Partner for all Your Polymer Needs</p>
                              <p className='subheading'>we are dedicated to providing the highest quality polymer solutions to meet the needs of a wide range of industries</p>
                              <div className="button">
                                   <Button destination={'/Commerce-Harbor-FZE---React/contact'} text="Get a Free Quote" btnColor={"red"} />
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default LandingPage