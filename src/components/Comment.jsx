import React from "react";

const Comment = () => {
  return (
    <div className="flex my-[30px] gap-[10px]">
      <div className="min-w-[40px]">
        <img className="w-[40px] h-[40px] rounded-full bg-[#999]" />
      </div>
      <div className="flex flex-col gap-[10px] text-white">
        <div>
          <p className="text-[13px] font-medium">John Doe</p>
          <span className="text-xs font-normal ml-[5px]">1 day ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsa
          explicabo molestiae dolorum cum quia. Cum, sunt quae. Laborum,
          voluptatum!
        </p>
      </div>
    </div>
  );
};

export default Comment;
