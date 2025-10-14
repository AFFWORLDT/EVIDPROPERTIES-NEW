import { InsightsInspiration } from "@/src/view/landing/blog";
import React from "react";

function Blog() {
  return (
    <div>
      <section className="pt-32 pb-12 px-4 bg-white">
        <div className=" mx-auto text-center">
          <h1 className="text-5xl font-serif font-normal mb-6 text-gray-800" style={{ letterSpacing: '0.05em' }}>
            Blog
          </h1>
        </div>
      </section>
      <div className=" mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-center  text-4xl font-mono">
          {" "}
          Living the Dubai Dream: Where Inspiration Meets Information
        </h1>
        <p className="text-center text-gray-600 mt-4">
         Dive into our curated collection of articles, designed to enlighten, inspire, and guide you through Dubai&rsquo;s dynamic real estate market.
        </p>
      </div>
      <InsightsInspiration/>
    </div>
  );
}

export default Blog;
