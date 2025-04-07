import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const BlogNavigation = () => {
  return (
    <>
      {/* Desktop Version */}
      <div className="hidden sm:flex items-center justify-between py-6 mt-8 border-t border-gray-200">
        <div className="flex items-center gap-4">
          <IoIosArrowBack className="text-gray-400" size={18} />
          <span className="text-gray-500 font-medium">Previous</span>
          <span className="text-gray-600 ml-1">
            5 Key Features to Look for in a Mo...
          </span>
        </div>

        <div className="w-[1px] h-5 bg-gray-200" />

        <div className="flex items-center gap-4">
          <span className="text-gray-600">
            The Future of CCTV: How AI is Tran...
          </span>
          <span className="text-gray-500 font-medium">Next</span>
          <IoIosArrowForward className="text-gray-400" size={18} />
        </div>
      </div>

      {/* Mobile Version */}
      <div className="sm:hidden flex items-center justify-between py-4 mt-6 border-t border-gray-200">
        <div className="flex items-center gap-2 ">
          <IoIosArrowBack className="text-gray-400" size={16} />
          <span className="text-sm text-gray-600">5 Key Features t...</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">The Future of CC...</span>
          <IoIosArrowForward className="text-gray-400" size={16} />
        </div>
      </div>
    </>
  );
};
