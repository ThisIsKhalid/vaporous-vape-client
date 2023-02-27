import React from 'react';
import img1 from "../../assets/images/Best-Rechargeable-Disposable-Vapes.jpg";
import img2 from "../../assets/images/Guide-To-Different-Types-Of-Vapes-for-2023.webp";
import img3 from "../../assets/images/How-Do-You-Charge-ELF-BAR-Disposable-Vapes.webp";
import BlogCard from '../../components/BlogCard';


const Blogs = () => {

    const blogs = [
      {
        id: "1",
        title: "Best-Rechargeable-Disposable-Vapes",
        img: img1,
        des: "Vaping has become increasingly popular in recent years, and with so many options on the market, it can be difficult to choose the right device for you. One type of vape that has gained a lot of attention recently is the rechargeable disposable vape. These devices offer the convenience of a disposable vape with the added benefit of being able to recharge the battery. In this blog, we will take a closer look at some of the best rechargeable disposable vapes available on the market today.",
      },
      {
        id: "2",
        title: "Guide-To-Different-Types-Of-Vapes-for-2023",
        img: img2,
        des: "Vaping has become a popular alternative to smoking in recent years, and there are now many different types of vape pens on the market. Choosing the right one can be overwhelming, especially for those who are new to vaping. This guide will help you understand the different types of vape pens available and how to choose the best one for your needs.",
      },
      {
        id: "3",
        title: "How-Do-You-Charge-ELF-BAR-Disposable-Vapes",
        img: img3,
        des: "ELF BAR is a brand that offers a range of disposable vape devices. With its popularity, it's common for users to ask about the charging process for their ELF BAR vapes. In this article, we'll go over everything you need to know about charging your ELF BAR, including how long it takes and the best practices for charging and using your device.",
      },
    ];
    return (
      <div className="px-5 pt-16 bg-NavajoWhite/70">
        <h1 className="text-4xl font-semibold text-LightCoral uppercase text-center">
          Find Out Latest Blog
        </h1>
        <div className="flex items-center justify-center mt-3">
          <input
            className="w-96 py-2 px-5 rounded-lg focus:outline-none focus:border-none bg-gray-700 focus:bg-MediumPurple focus:text-white text-lg"
            type="text"
            name=""
            id=""
            placeholder="search here"
          />
        </div>
        <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {blogs?.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    );
};

export default Blogs;