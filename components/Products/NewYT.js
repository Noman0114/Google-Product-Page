import React from "react";

const NewYT = () => {
  return (
    <>
    <div className="newyt-content">
      <div className="newyt-right">
        <h4>Get more comfortable interviewing</h4>
        <p>
          See how Interview Warmup uses machine learning to make it easier to
          practice for interviews and discover ways to improve
        </p>
        <a href="">Learn more</a>
      </div>
      <div className="newyt-left">
        <iframe
          height="400"
          src="https://www.youtube.com/embed/KKfAuQrwzTY?si=mJBLMtKNcFYfgDdB"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <div className="google-img">
<img src="/google-icons.png" alt="" />
    </div>
    </>
  );
};

export default NewYT;
