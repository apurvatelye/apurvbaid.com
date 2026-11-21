
export default function PortfolioFilter({
  filters,
  activeFilter,
  setActiveFilter,
}) {
  return (
    <section className="w-full border-b border-zinc-200">
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-8 lg:px-14">

        <div
          className="
            flex
            min-h-[90px]
            items-center
            py-5
            md:min-h-[110px]
            lg:min-h-[150px]
          "
        >
          <div
            className="
              flex
              w-full
              min-w-0
              flex-wrap
              items-center
              justify-center
              gap-2
              sm:gap-3
              md:justify-start
              md:gap-5
              lg:gap-10
            "
          >
            {filters.map((filter) => {
              const active = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={active}
                  className={`
                    shrink-0
                    rounded-full
                    border
                    transition-all
                    duration-300
                    px-3
                    py-2
                    text-xs
                    sm:px-4
                    sm:text-sm
                    md:px-5
                    md:py-2
                    md:text-base
                    lg:text-[20px]

                    ${
                      active
                        ? "border-zinc-400 text-zinc-700"
                        : "border-transparent text-zinc-400 hover:border-zinc-300 hover:text-black"
                    }
                  `}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}




