import { blogDetails } from "../data/blogDetails";
import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { RelatedPosts } from "../components/Blogs/RelatedPosts";
import { BlogNavigation } from "../components/Blogs/BlogNavigations";

const paragraphs = blogDetails.description.split("\n").filter((p) => p.trim());

export const BlogDetailsPage = () => {
  return (
    <section className=" px-4 sm:px-6 lg:px-8 py-6">
      {/* Back Button */}
      <Link to="/blogs" className="inline-block mb-12 ">
        <div className="w-8 h-8 rounded-full border F border-gray-300 flex items-center justify-center">
          <img className="w-full h-full" src="/icons/prev_page.svg" alt="" />
        </div>
      </Link>

      {/* Title */}
      <h1 className="text-3xl md:text-8xl font-semibold text-gray-900 mb-4">
        {blogDetails?.title}
      </h1>

      {/* Meta Info */}
      <div className="flex items-center gap-4 mb-12">
        <div className="flex items-center gap-2">
          <img src="/icons/Calendar.png" alt="" />
          <span className="text-gray-500">{blogDetails?.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <img src="/icons/Clock.png" alt="" />
          <span className="text-gray-500">{blogDetails?.readTime}</span>
        </div>
      </div>

      {/* Main Image */}
      <div className="w-full rounded-lg overflow-hidden mb-8">
        <img
          src="/images/blog_detail_img.png"
          alt="Surveillance Cameras"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex items-start gap-10  w-full pr-20 ">
        {/* Content */}
        <div className="prose max-w-none w-full md:w-2/3  ">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-700 mb-6 leading-relaxed">
              {paragraph.trim()}
            </p>
          ))}
          <BlogNavigation />
        </div>

        {/* related_Products */}
        <RelatedPosts className="w-1/3 md:block hidden" />
      </div>
    </section>
  );
};
