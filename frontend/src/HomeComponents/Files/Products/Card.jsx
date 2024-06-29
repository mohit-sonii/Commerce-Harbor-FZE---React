
import "../../Styles/Products/Card.css"

const Card = ({ image, title }) => {
     return (
          <div className="image">
               <div className="image-title">
                    <img src={image} alt="HDPE Image" />
                    <div className="white-box">
                         <p className="card-p">{title}</p>
                    </div>
               </div>
          </div>
     )
}

export default Card