import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <Link to="/video/test" className="no-underline">
      <div className="w-[340px] mt-11 cursor-pointer">
        <img src="" className="w-full h-[220px] bg-[#999]" />
        <div className="flex mt-4 gap-3">
          <img
            src=""
            //   alt="channel img"
            className="w-9 h-9 rounded-full bg-[#999]"
          />
          <div>
            <h1 className="font-medium text-base text-white">New video</h1>
            <h2 className="text-sm text-[#aaaaaa] my-2">Channel</h2>
            <div className="text-sm flex text-[#aaaaaa] items-center">
              1k views{" "}
              <div className="w-[2px] mx-1 h-[2px] rounded-full bg-[#999]"></div>
              1day ago
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
