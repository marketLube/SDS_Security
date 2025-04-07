import React from "react";

export const PaginationButtons = ({ pageCount = 3 }) => {
  // TODO:functionalities_pending


  return (
    <div className="flex gap-7 justify-end opacity-60  my-5">
      <p className="text-lg cursor-pointer">{"< Previous"}</p>
      {Array.from({ length: pageCount })?.map((_, i) => (
        <p className="text-lg cursor-pointer" key={i}>{i + 1}</p>
      ))}
      <p className="text-lg cursor-pointer">{"Next >"}</p>
    </div>
  );
};
