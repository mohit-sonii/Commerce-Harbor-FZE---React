import {React, useEffect} from 'react'
import Info from '../../HomeComponents/Files/Info/Info'
import "./Products.css"
import LandingPage from "../../ProductComponents/Files/LandingPage/LandingPage"
import VirginImage from "../../../assets/ProductImages/VirginBanner.png"
import ProductCategory from '../../ProductComponents/Files/ProductCategory/ProductCategory'
import Card from "../../ProductComponents/Files/Card/Card"
import PE from "../../../assets/VirginProduct/PE.png"
import PP from "../../../assets/VirginProduct/PP.png"
import PVC from "../../../assets/VirginProduct/PVC.png"
import PET from "../../../assets/VirginProduct/PET.png"
import PC from "../../../assets/VirginProduct/PC.png"
import PS from "../../../assets/VirginProduct/PS.png"
import RecycleImage from "../../../assets/ProductImages/RecycleBanner.png"
import PETFlakes from "../../../assets/RecycleProduct/PET-Flakes.png"
import HDPE from "../../../assets/RecycleProduct/HDPE.png"
import rPVC from "../../../assets/RecycleProduct/rPVC.png"
import rPP from "../../../assets/RecycleProduct/rPP.png"
import rPE from "../../../assets/RecycleProduct/rPE.png"
import rPS from "../../../assets/RecycleProduct/rPS.png"
import ProductBanner from "../../../assets/Thumbnail/ProductsThumbnail.png"
import { useLocation } from "react-router-dom"
const Products = () => {

     const { scrolling } = useLocation();
     useEffect(() => {
          window.scrollTo(0, 0);
     }, [scrolling])
     return (
          <>
               <LandingPage title={"PRODUCTS"} image={ProductBanner} />
               <div id="Info">
                    <Info p1={'Raw plastic materials are the fundamental building blocks used in the manufacturing of plastic products. These materials are derived from various sources and undergo processing to create the diverse range of plastics we encounter daily'} p2={'Each raw material possesses distinct characteristics, making it suitable for specific applications. These raw materials are molded, extruded, or processed differently to create an extensive range of plastic items that are integral to modern life. These raw materials have revolutionized modern industry and daily life due to their versatility, affordability, and ease of production'} />
               </div>
               <ProductCategory category={'VIRGIN'} image={VirginImage} />
               <div id="Info" className='VirginInfo'>
                    <Info p1={'These plastics have never undergone any prior processing or use, ensuring their purity and integrity. With no prior exposure to contaminants or degradation, our virgin raw plastics guarantee superior quality and performance, making them an ideal choice for a wide range of manufacturing applications. Virgin plastic is often chosen for its purity and consistency, making it suitable for a wide range of applications, including food packaging, medical devices, consumer goods, and more.'} />
               </div>
               <div id="CardsForVirgin">
                    <Card image={PE} dir={'right'} description={'Polyethylene (PE) is one of the most common and widely used raw materials in the realm of plastic manufacturing. It is known for its excellent chemical resistance, versatility, low friction, and high impact strength. It is widely used in packaging, automotive components, and construction materials. '} />

                    <Card image={PP} description={'Polypropylene (PP) is a versatile and durable thermoplastic with a high melting point. It finds extensive use in packaging, automotive parts, textiles, and medical devices due to its lightweight nature and cost-effectiveness. Its adaptability makes it a popular choice across diverse industries.'} />

                    <Card image={PVC} dir={'right'} description={'Polyvinyl Chloride (PVC) is a versatile plastic derived from vinyl chloride monomers. It can be both rigid and flexible, serving numerous purposes. Rigid PVC is used in construction materials and pipes, while flexible PVC is applied in products like vinyl flooring and inflatable structures. PVC is known for its durability and chemical resistance.'} />

                    <Card image={PET} description={'Polyethylene Terephthalate (PET) is a common plastic raw material with excellent transparency and recyclability. Derived from ethylene glycol and terephthalic acid, PET is primarily used for beverage bottles and food containers. Its properties make it suitable for storing liquids and perishable goods while remaining environmentally friendly due to its recyclability.'} />

                    <Card image={PC} dir={'right'} description={`Polycarbonate (PC) is a durable thermoplastic raw material known for its clarity, impact resistance, and high-temperature stability. It's derived from bisphenol A (BPA) and phosgene. PC is widely used in eyewear lenses, automotive parts, electronics, and medical devices due to its optical clarity and exceptional toughness, making it suitable for demanding applications.`} />

                    <Card image={PS} description={'Polystyrene (PS) is a synthetic polymer known for its lightweight and insulation properties. It is derived from styrene monomers and is commonly used in disposable items like packaging materials, foam cups, and food containers. It is a lightweight and rigid polymer that is commonly used in food packaging, disposable containers, and insulation materials.'} />
               </div>
               <ProductCategory category={'RECYCLED'} image={RecycleImage} />
               <div id="Info" className='RecycleInfo'>
                    <Info p1={'Recycled raw plastic materials are sustainable alternatives created from post-consumer or post-industrial plastic waste.These recycled plastics play a vital role in reducing plastic waste, conserving resources, and lessening the environmental impact of plastic production, while also promoting a circular economy and environmental sustainability.'} />
               </div>
               <div id="CardsForRecycle">
                    <Card image={PETFlakes} dir={'right'} description={'PET flakes are small pieces of recycled Polyethylene Terephthalate (PET) plastic. Produced by crushing and cleaning post-consumer PET bottles, these flakes are used in the manufacturing of textiles, packaging materials, and even food-grade containers. PET flakes contribute to environmental sustainability by reducing plastic waste and conserving resources. '} />

                    <Card image={HDPE} description={'High-Density Polyethylene (HDPE) regrind refers to recycled HDPE plastic material that has been reclaimed from post-consumer or post-industrial sources. It undergoes a grinding process to reduce it to small particles, making it suitable for reuse in various applications. HDPE regrind is valued for its environmental sustainability and versatility in manufacturing.'} />

                    <Card image={rPVC} dir={'right'} description={'Recycled PVC (rPVC) is a sustainable raw material made from reclaimed post-consumer or post-industrial PVC products, like pipes and vinyl flooring. It undergoes a recycling process to reduce waste and conserve resources. rPVC is used in manufacturing construction materials, such as pipes, profiles, and roofing, promoting environmental responsibility.'} />

                    <Card image={rPP} description={'Recycled polypropylene (rPP) is a sustainable plastic material created from post-consumer or post-industrial PP products, like packaging and automotive components. Through recycling processes, it is transformed into reusable raw material. rPP is employed in various applications, including plastic pallets, bins, and other durable products, contributing to resource conservation and waste reduction.'} />

                    <Card image={rPE} dir={'right'} description={`Recycled Polyethylene (rPE) is a sustainable plastic material obtained from post-consumer or post-industrial PE products, such as plastic bags and film. It is processed and reformed into raw material for various applications, including packaging, agricultural films, and trash can liners. rPE helps reduce plastic waste and promotes resource conservation.`} />


                    <Card image={rPS} description={'Recycled polystyrene (rPS) is an environmentally friendly raw material produced from post-consumer or post-industrial polystyrene products like packaging and disposable items. It undergoes recycling processes to create reusable material. rPS finds applications in picture frames, office supplies, and insulation, offering a sustainable solution while reducing plastic waste.'} />

               </div>
          </>
     )
}

export default Products