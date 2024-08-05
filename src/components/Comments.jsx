import React from "react";
import Comment from "./Comment";

const Comments = () => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <img className="w-[50px] h-[50px] rounded-full bg-[#999]" />
        <input
          placeholder="Add a comment ..."
          className="bg-transparent border-none outline-none p-[5px] border-b-[#373737] text-white placeholder:white w-full"
        />
      </div>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default Comments;
