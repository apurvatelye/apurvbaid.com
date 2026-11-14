import { useEffect, useState } from "react";
import api from "../../services/api";
import { resolveApiMedia } from "../../utils/apiMedia";
import Hero from "../Hero";

const AboutHero = () => {
  const [banner, setBanner] = useState("");
  useEffect(() => { api.get("/page-banners/about").then(({data}) => setBanner(resolveApiMedia(data?.imageUrl))).catch(() => {}); }, []);
  return <div className="relative">{banner && <img src={banner} alt="About page banner" className="absolute inset-0 h-full w-full object-cover"/>}<div className="relative [&_section]:bg-transparent">{banner && <div className="absolute inset-0 bg-black/45"/>}<Hero firstLine="Who we are?" /></div></div>;
};
export default AboutHero;
