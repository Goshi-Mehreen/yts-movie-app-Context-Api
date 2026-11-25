import React from "react";

const LIMIT = 20;

// current page 
function getPages(current, total) {
  if (total <= 8) return Array.from({ length: total }, (_, i) => i + 1);

  // 1st pages: 1..8 aur end 
  if (current <= 4) {
    return [...Array.from({ length: 8 }, (_, i) => i + 1), "…"];
  }

  const start = Math.max(1, current - 3);
  const end = Math.min(total, current + 3);
  const pages = [];

  if (start > 3) pages.push(1, 2, "…");
  else for (let i = 1; i < start; i++) pages.push(i);

  for (let i = start; i <= end; i++) pages.push(i);

  if (end < total) pages.push("…");
  return pages;
}

//  button common styling 
const base = "border border-zinc-800 px-3 py-2 transition-all duration-200";
const normal = "bg-[#1d1d1d] text-white hover:bg-[#6ac045]";
const active = "bg-[#6ac045] border-[#6ac045] text-white";

function Buttons({ page, setPage, totalMovies }) {
  const totalPages = Math.ceil(totalMovies / LIMIT);
  const pages = getPages(page, totalPages);

  return (
    <div>
      <div className="mt-8 text-center">
        <h1 className="text-[#6ac045] text-lg sm:text-xl font-medium tracking-wide">
          2160p 4K YTS YIFY Movies
          <span className="text-zinc-500 font-normal italic">
            (ordered by latest)
          </span>
          <span className="text-[#6ac045]"> - page {page}</span>
        </h1>
      </div>

      <div className="mt-5 flex flex-wrap justify-center items-center gap-1 text-xs font-bold">
        {/* First / Previous sirf page 3 se aage dikhein */}
        {page > 2 && (
          <>
            <button onClick={() => setPage(1)} className={`${base} ${normal}`}>
              &laquo; First
            </button>
            <button
              onClick={() => setPage(page - 1)}
              className={`${base} ${normal}`}
            >
              &laquo; Previous
            </button>
          </>
        )}

        {/* page numbers */}
        {pages.map((p, i) =>
          p === "…" ? (
            <span
              key={`dots-${i}`}
              className="border border-zinc-800 bg-[#1d1d1d] text-zinc-500 px-2 py-2"
            >
              ...
            </span>
          ) : (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`${base} ${p === page ? active : normal}`}
            >
              {p}
            </button>
          )
        )}

        {/* Next end page no show */}
        {page < totalPages && (
          <button
            onClick={() => setPage(page + 1)}
            className={`${base} ${normal}`}
          >
            Next &raquo;
          </button>
        )}
      </div>
    </div>
  );
}

export default Buttons;