import React from "react";
import { blogList } from "../../data/blogData";
import { BlogCard } from "../ui/Cards";
import { PrimaryButton } from "../ui/Button";

export const BlogSection = () => {
    return (
        <section>
            <h2 className="text-start mb-8">Blogs</h2>

            <div className="w-full ">
                {blogList?.map((data, index) => (
                    <BlogCard data={data} key={index} />
                ))}
            </div>
            <PrimaryButton>Read All Blogs</PrimaryButton>
        </section>
    );
};
