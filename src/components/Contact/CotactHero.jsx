import { useEffect, useState } from "react";
import api from "../../services/api";
import { resolveApiMedia } from "../../utils/apiMedia";
import Hero from "../Hero";
const CotactHero = () => {
 const [banner,setBanner]=useState("");
 useEffect(()=>{api.get("/page-banners/contact").then(({data})=>setBanner(resolveApiMedia(data?.imageUrl))).catch(()=>{});},[]);
 return <div className="relative">{banner&&<img src={banner} alt="Contact page banner" className="absolute inset-0 h-full w-full object-cover"/>}{banner&&<div className="absolute inset-0 bg-black/50"/>}<div className="relative [&_section]:bg-transparent"><Hero firstLine="Contact Us" paragraph="We are a design studio specializing in architecture and interiors, redefining the art of spatial storytelling with bold ideas and creative exploration." leftBottomText="Scroll to Explore" leftBottomIcon="⌄" rightBottomText="Let's Connect"/></div></div>;
};
export default CotactHero;



// import { useEffect, useState } from "react";
// import api from "../../services/api";
// import { resolveApiMedia } from "../../utils/apiMedia";
// import Hero from "../Hero";

// const CotactHero = () => {
//   const [banner, setBanner] = useState("");

//   useEffect(() => {
//     api
//       .get("/page-banners/contact")
//       .then(({ data }) => {
//         setBanner(resolveApiMedia(data?.imageUrl));
//       })
//       .catch(() => {
//         setBanner("");
//       });
//   }, []);

//   return (
//     <div className="relative min-h-screen bg-black overflow-hidden">

//       {/* Background Image */}
//       {banner && (
//         <img
//           src={banner}
//           alt="Contact page banner"
//           className="absolute inset-0 z-0 h-full w-full object-cover"
//         />
//       )}

//       {/* Dark Overlay */}
//       {banner && (
//         <div className="absolute inset-0 z-0 bg-black/50" />
//       )}

//       {/* Hero Content */}
//       <div className="relative z-10 [&_section]:bg-transparent">
//         <Hero
//           firstLine="Contact Us"
//           paragraph="We are a design studio specializing in architecture and interiors, redefining the art of spatial storytelling with bold ideas and creative exploration."
//           leftBottomText="Scroll to Explore"
//           leftBottomIcon="⌄"
//           rightBottomText="Let's Connect"
//         />
//       </div>

//     </div>
//   );
// };

export default CotactHero;
