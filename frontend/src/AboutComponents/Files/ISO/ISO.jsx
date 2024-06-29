
import "../../Styles/ISO/ISO.css"
const ISO = ({ backgroundImage, heading, subHeading, logo }) => {
     return (
          <>
               <div id="iso" style={{ backgroundImage: `url(${backgroundImage})` }}>
                    <div className="innerISO">
                         <div className="innerHeading">
                              <h1>{heading}</h1>
                              <p>{subHeading}</p>
                         </div>
                         <img src={logo} alt="" />
                    </div>
               </div>
          </>
     )
}

export default ISO