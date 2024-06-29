import product1 from "../../../../assets/ProductImages/HDPE.jpg"
import product2 from "../../../../assets/ProductImages/LDPE.jpg"
import product3 from "../../../../assets/ProductImages/PP.jpg"
import product4 from "../../../../assets/ProductImages/PET-Flakes.jpg"
import product5 from "../../../../assets/ProductImages/LDPE-Regrind.jpg"
import product6 from "../../../../assets/ProductImages/LDPE-Recycled.jpg"
import Button from "../Button/Button"
import '../../Styles/Products/Products.css'
import Card from "./Card"
const Products = () => {


     return (
          <div id="product-section">
               <div id="cards">
                    <Card image={product1} title={"HDPE"} />
                    <Card image={product2} title={"LDPE"} />
                    <Card image={product3} title={"PP"} />
                    <Card image={product4} title={"PET Flakes"} />
                    <Card image={product5} title={"LDPE Regrind"} />
                    <Card image={product6} title={"LDPE Recycled"} />
               </div>
               <div className="product-button">
                    <Button destination = {'/products'} text={"VIEW ALL PRODUCTS"} btnColor={"#1d1d1d"}/>
               </div>
          </div>
     )
}

export default Products