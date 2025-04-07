import React from "react";
import { BlogNavigation } from "./BlogNavigations";
import { RelatedPosts } from "./RelatedPosts";

export const BlogContent = () => {
  return (
    <section className="flex flex-col gap-12 items-start px-24 pt-12 pb-24 max-md:px-10 max-md:pt-10 max-md:pb-16 max-sm:px-5 max-sm:pt-8 max-sm:pb-10">
      <img
        src="/icons/prev_page.png"
        alt="Frame 266"
        className="w-[48px] items-center gap-[8px] rounded-[32px] border-[1px] border-[#056399]"
      />
      <div className="flex flex-col gap-12 items-start w-full">
        <article className="flex flex-col gap-6 items-start w-full">
          <h1 className="text-5xl font-medium tracking-tighter text-black max-md:text-4xl max-sm:text-3xl">
            Why Every Business Needs a Smart Surveillance System?
          </h1>
          <div className="flex gap-5 items-start max-sm:flex-wrap">
            <div className="flex gap-2 justify-center items-center">
              <img
                src="/icons/Calendar.png"
                alt="Calendar"
                className="w-[24px] h-[24px] opacity-[0.6]"
              />
              <time className="text-base font-medium tracking-normal text-black opacity-60">
                26 Jan, 2025
              </time>
            </div>
            <div className="w-0 h-6 border border-black opacity-[0.22]" />
            <div className="flex gap-2 justify-center items-center">
              <img
                src="/icons/Clock.png"
                alt="Clock"
                className="w-[24px] h-[24px] opacity-[0.6]"
              />
              <span className="text-base font-medium tracking-normal text-black opacity-60">
                6 mins read
              </span>
            </div>
          </div>
        </article>
        <img
          src="/images/blog_detail_img.png"
          alt="Blog featured image"
          className="h-[600px] max-lg:h-[400px] max-sm:h-[300px] w-full object-cover rounded-[8px]"
        />
      </div>
      <div className="flex gap-10 items-start pt-2 w-full max-md:flex-col">
        <div className="flex flex-col flex-1 gap-7 justify-center items-center">
          <p className="text-lg leading-7 text-black opacity-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat
            volutpat fringilla. Praesent sed neque mi. Phasellus sodales
            hendrerit fermentum. Aliquam vitae dui a lacus egestas varius.
            Nullam eget libero facilisis, vestibulum tellus eu, vulputate
            ligula. Ut vitae elementum dui. Duis tristique tellus eget feugiat
            volutpat. In pretium ligula ut vehicula elementum. Duis non justo
            eros. Maecenas scelerisque augue mi, vitae porta massa ultrices
            eget. Aenean felis ligula, aliquam non lacus sed, condimentum
            lobortis mauris. Maecenas diam tellus, hendrerit et facilisis at,
            tempor ac purus. Phasellus eget massa id massa rutrum cursus. Duis
            eget nisl blandit, posuere urna id, venenatis nunc. Quisque ultrices
            interdum nunc vel suscipit. Nullam ullamcorper lectus at tortor
            consectetur porta. Morbi molestie, turpis eget posuere mollis, risus
            leo rhoncus urna, et aliquet tellus sem eget felis. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Duis orci odio,
            consequat eget viverra in, vehicula accumsan ligula.
          </p>
          <BlogNavigation />
        </div>
        <RelatedPosts />
      </div>
    </section>
  );
};
