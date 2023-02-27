import React from 'react';
import { Link } from 'react-router-dom';
import imge1 from '../assets/images/Best-Rechargeable-Disposable-Vapes.jpg'
import imge2 from '../assets/images/Guide-To-Different-Types-Of-Vapes-for-2023.webp'

const BlogCard = ({blog}) => {
    const {title, img, des} = blog;
    return (
      <div className="bg-white rounded-lg shadow-lg">
        <img className="rounded-t-lg w-full h-60" src={img} alt="" />
        <div className="px-4 my-3">
          <h2 className="text-xl font-medium text-LightCoral mb-2">{title}</h2>
          <p>
            {`${des.slice(0, 150)}`}...{" "}
            <Link to='/blog-details'>
              <span className="underline text-blue-500">read more</span>
            </Link>
          </p>
        </div>
      </div>
    );
};

export default BlogCard;