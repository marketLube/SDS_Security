export const BlogNavigation = () => {
  return (
    <nav className="flex gap-10 justify-end items-end px-0 pt-6 pb-1 w-full border border-black border-opacity-20">
      <div className="flex flex-1 gap-4 items-center">
        <a href="#" className="flex gap-2.5 items-center px-px py-0 w-20">
          <svg
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.75 9L0.75 5L4.75 1"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-base font-medium tracking-normal text-black">
            Previous
          </span>
        </a>
        <p className="flex-1 gap-6 px-px py-0 text-base font-medium tracking-tight leading-5 text-black opacity-60">
          5 Key Features to Look for in a Modern CCTV System
        </p>
      </div>
      <div className="w-px h-7 bg-black opacity-20" />
      <div className="flex flex-1 gap-4 items-center">
        <p className="flex-1 gap-6 px-px py-0 text-base font-medium tracking-tight leading-5 text-black opacity-60">
          The Future of CCTV: How AI is Transforming Security
        </p>
        <a
          href="#"
          className="flex gap-2.5 justify-end items-center px-px py-0 w-20"
        >
          <span className="text-base font-medium tracking-normal text-black">
            Next
          </span>
          <svg
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.25 9L5.25 5L1.25 1"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </nav>
  );
};
