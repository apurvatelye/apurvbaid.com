// import { useEffect, useState } from "react";
// import api from "../../services/api";
// import { resolveApiMedia } from "../../utils/apiMedia";
// import Hero from "../Hero";
// import PortfolioFilter from "./PortfolioFilter";
// const PortfolioHero = ({ activeFilter, setActiveFilter, filters }) => {
//  const [banner,setBanner]=useState("");
//  useEffect(()=>{api.get("/page-banners/portfolio").then(({data})=>setBanner(resolveApiMedia(data?.imageUrl))).catch(()=>{});},[]);
//  return <div className="relative">{banner&&<img src={banner} alt="Portfolio banner" className="absolute inset-0 h-full w-full object-cover"/>}{banner&&<div className="absolute inset-0 bg-black/50"/>}<div className="relative [&_section]:bg-transparent"><Hero firstLine="Portfolio" secondLine="interior Designer" paragraph={<>We are a design studio specializing in architecture and interiors, redefining the art of spatial storytelling with bold ideas and creative exploration.</>} leftBottomText="Scroll to Explore" leftBottomIcon="⌄" rightBottomText={<PortfolioFilter filters={filters} activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>}/></div></div>;
// };
// export default PortfolioHero;

import { useEffect, useState } from "react";
import api from "../../services/api";
import { resolveApiMedia } from "../../utils/apiMedia";
import Hero from "../Hero";

const PortfolioHero = () => {
    const [banner, setBanner] = useState("");

    useEffect(() => {
        api.get("/page-banners/portfolio")
            .then(({ data }) => {
                setBanner(resolveApiMedia(data?.imageUrl));
            })
            .catch((error) => {
                console.error("Portfolio banner loading failed:", error);
            });
    }, []);

    return (
        <div className="relative w-full overflow-hidden bg-black">

            {/* Background Image */}
            {banner && (
                <img
                    src={banner}
                    alt="Portfolio banner"
                    className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                    "
                />
            )}

            {/* Dark Overlay */}
            {banner && (
                <div className="absolute inset-0 bg-black/50" />
            )}

            {/* Hero Content */}
            <div className="relative [&_section]:bg-transparent">
                <Hero
                    firstLine="Portfolio"
                    secondLine="interior Designer"
                    paragraph={
                        <>
                            We are a design studio specializing in
                            architecture and interiors, redefining
                            the art of spatial storytelling with
                            bold ideas and creative exploration.
                        </>
                    }
                    leftBottomText="Scroll to Explore"
                    leftBottomIcon="⌄"
                    rightBottomText={null}
                />
            </div>

        </div>
    );
};

export default PortfolioHero;
