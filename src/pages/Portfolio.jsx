// import { useEffect, useState } from "react";
// import api from "../services/api";
// import PortfolioHero from "../components/Portfolio/PortfolioHero";
// import PortfolioGrid from "../components/Portfolio/PortfolioGrid";


// const Portfolio = () => {
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => { api.get("/projects").then(({data}) => setProjects(Array.isArray(data) ? data.filter(p => p.active !== false) : [])).catch(err => console.error("Portfolio API error",err)).finally(() => setLoading(false)); }, []);
//   const filters = ["All", ...new Set(projects.map((project) => project.category).filter(Boolean))];

//   return (
//     <div className="w-full bg-black">
//       <PortfolioHero activeFilter={activeFilter} setActiveFilter={setActiveFilter} filters={filters} />
//       {loading ? <div className="py-20 text-center text-white/50">Loading projects...</div> : projects.length ? (
//         <PortfolioGrid projects={projects} activeFilter={activeFilter} />
//       ) : (
//         <div className="flex min-h-[40vh] items-center justify-center px-6 text-center">
//           <p className="text-sm text-white/50">No projects available.</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Portfolio;



import { useEffect, useState } from "react";
import api from "../services/api";

import PortfolioHero from "../components/Portfolio/PortfolioHero";
import PortfolioFilter from "../components/Portfolio/PortfolioFilter";
import PortfolioGrid from "../components/Portfolio/PortfolioGrid";

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get("/projects")
            .then(({ data }) => {
                setProjects(
                    Array.isArray(data)
                        ? data.filter((p) => p.active !== false)
                        : []
                );
            })
            .catch((err) => {
                console.error("Portfolio API error", err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const filters = [
        "All",
        ...new Set(
            projects
                .map((project) => project.category)
                .filter(Boolean)
        ),
    ];

    return (
        <div className="w-full bg-black">

            {/* Portfolio Hero Banner */}
            <PortfolioHero />

            {/* Portfolio Category Filter */}
            <div className="
                relative
                z-30
                w-full
                border-b
                border-white/10
                bg-black
            ">
                <div className="
                    mx-auto
                    flex
                    w-full
                    max-w-[1800px]
                    items-center
                    justify-between
                    px-5
                    py-5
                    sm:px-8
                    lg:px-14
                    lg:py-7
                ">
                    <span className="
                        text-xs
                        uppercase
                        tracking-[3px]
                        text-white/50
                        sm:text-sm
                    ">
                        Explore Projects
                    </span>

                    <PortfolioFilter
                        filters={filters}
                        activeFilter={activeFilter}
                        setActiveFilter={setActiveFilter}
                    />
                </div>
            </div>

            {/* Portfolio Grid */}
            {loading ? (
                <div className="py-20 text-center text-white/50">
                    Loading projects...
                </div>
            ) : projects.length ? (
                <PortfolioGrid
                    projects={projects}
                    activeFilter={activeFilter}
                />
            ) : (
                <div className="
                    flex
                    min-h-[40vh]
                    items-center
                    justify-center
                    px-6
                    text-center
                ">
                    <p className="text-sm text-white/50">
                        No projects available.
                    </p>
                </div>
            )}

        </div>
    );
};

export default Portfolio;
