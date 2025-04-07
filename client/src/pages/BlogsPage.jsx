import React, { useState } from "react";
import { Categories } from "../components/Blogs/Categories";
import { blogList } from "../data/blogData";
import { BlogCard } from "../components/ui/Cards";
import { PaginationButtons } from "../components/ui/PaginationButtons";

const categoriesList = ["Bussiness", "CCTV", "Security", "Tag4"];

export const BlogsPage = () => {
  return (
    <div>
      {/* banner */}
      <div className="">
        <img
          className="w-full max-h-96 object-cover object-[0%_45%]  "
          src="https://s3-alpha-sig.figma.com/img/6d0a/7d1c/4dd2b3307a3e45df62ff32e41c10cd2f?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VwxkQEZhrrdXyQK~giwGhkNLBx~MKudpglrkSt8OSOvIcpNZN0AQNegJiSeSoqpB2AaC7Akml-QGBHTeRfhLLUdSCh-XbG1BUGjYqVmXwfJnzz0Yunv41aeynrZuKb~sxtNE1KyBL1jmr1UmeWhPsC4YfJwFF9o8Ya5VX5mDnoBI4DKWiBaylDbRk0QO0~QG6clWSW4ob3-qadJ8tFoB3dW~hsKSEQKh2hguUypds6veJc4y6ZBKHnkcYrX5lTOVmQt8Geza2TRYhUeWhAvD38IhBXeXFfnPZ4uWuX2EXJbDhvCo3cV4PbmqO0pcuHHfmBZ-GftbdqX7fyu8hapF0g__"
          alt="banner-img"
        />
      </div>

      <section>
        <p className="text-md md:text-xl opacity-60">Blogs</p>
        <h2>News & Insights on Modern Security</h2>

        {/* categories */}
        <Categories categories={categoriesList} />
      </section>

      {/* blog lists */}
      <section className="!pt-0 ">
        <div className="border-b-1 border-border-primary  grid grid-cols-2 md:grid-cols-1 place-items-start  gap-x-4 md:gap-0 ">
          {[...blogList, ...blogList.reverse()]?.map((data, index, arr) => {
            if (index == arr.length - 1)
              return (
                <BlogCard
                  data={data}
                  key={index}
                  className={"md:flex-row-reverse"}
                  hasDate={true}
                  hasBorderBottom={false}
                />
              );
            return (
              <BlogCard
                data={data}
                key={index}
                className={"md:flex-row-reverse"}
                hasDate={true}
              />
            );
          })}
        </div>
        <PaginationButtons />
      </section>
    </div>
  );
};
