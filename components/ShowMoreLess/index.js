import React, { useState } from "react";

const ShowMoreLess = () => {
  const [showmore, setShowmore] = useState(false)

  return (
    <div>
      <p className={!showmore ? "truncate" : ''}>
        In this article, we'll demonstrate how to create a "Read More Read Less"
        button using HTML and CSS. When you want to hide more details while still
        giving readers a sense of what the article or post is about, the read
        more and read less buttons might be useful.
        In this article, we'll demonstrate how to create a "Read More Read Less"
        button using HTML and CSS. When you want to hide more details while still
        giving readers a sense of what the article or post is about, the read
        more and read less buttons might be useful.
        In this article, we'll demonstrate how to create a "Read More Read Less"
        button using HTML and CSS. When you want to hide more details while still
        giving readers a sense of what the article or post is about, the read
        more and read less buttons might be useful.
      </p>

      <button type="button"
          onClick={() => { setShowmore(!showmore) }}
          className="text-green-500 focus:ring-0 focus:outline-none font-medium rounded-lg text-sm">
          {showmore ? 'Read Less' : 'Read More'}
        </button>
    </div>
  );
};

export default ShowMoreLess;