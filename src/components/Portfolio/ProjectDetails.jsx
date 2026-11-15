import { useEffect, useState } from "react";
import api from "../../services/api";
import { useParams, useNavigate } from "react-router-dom";

import Hero from "./ProjectDetails/Hero";
import ProjectInfo from "./ProjectDetails/ProjectInfo";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => { let alive=true; setLoading(true); api.get(`/projects/${id}`).then(({data})=>{if(alive)setProject({...data,title:data.projectName || data.heading,coverImage:data.image,images:data.images?.length?data.images:[data.image],philosophy:data.description});}).catch(()=>{if(alive)setProject(null);}).finally(()=>{if(alive)setLoading(false);}); return ()=>{alive=false}; },[id]);

  useEffect(() => {
    if (!project) return;
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [id, project]);

  if (loading) return <div className="min-h-screen bg-black text-white flex items-center justify-center">Loading project...</div>;
  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-light">Project Not Found</h1>
          <button onClick={() => navigate("/portfolio")} className="mt-6 border border-white/40 px-6 py-3 text-sm hover:bg-white hover:text-black transition">
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return <><Hero key={project.id} project={project} /><ProjectInfo project={project} /></>;
}
