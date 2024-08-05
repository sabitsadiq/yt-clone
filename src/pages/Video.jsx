import React from "react";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Comments from "../components/Comments";

const Video = () => {
  return (
    <div className="flex gap-6 mt-8">
      <div className="flex-[5]">
        <div className="bg-[#999]">
          <img src="" className="w-full h-[420px]" />
        </div>
        <h1 className="font-normal mt-5 mb-2 text-lg text-white">New Videos</h1>
        <div className="flex items-center justify-between">
          <div className="text-sm flex text-[#aaaaaa] items-center">
            1k views{" "}
            <div className="w-[2px] mx-1 h-[2px] rounded-full bg-[#999]"></div>
            1day ago
          </div>
          <div className="flex items-center gap-4 text-white">
            <button className="flex items-center gap-1">
              <ThumbUpOutlinedIcon />
              123
            </button>
            <button className="flex items-center gap-1">
              <ThumbDownOffAltOutlinedIcon />
              Dislike
            </button>
            <button className="flex items-center gap-1">
              <ReplyOutlinedIcon />
              Share
            </button>
            <button className="flex items-center gap-1">
              <AddTaskOutlinedIcon />
              Save
            </button>
          </div>
        </div>
        <div className="my-[15px] border-[0.1px] border-[#373737] w-full"></div>
        <div className="flex justify-between">
          <div className="flex gap-2 text-white">
            <div className="min-w-[50px]">
              <img className="w-[50px] h-[50px] rounded-full bg-[#999]" />
            </div>
            <div>
              <h2 className="font-medium">Channel</h2>
              <h5 className="text-xs mb-2">200K subscribers</h5>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                nesciunt quisquam saepe praesentium, expedita obcaecati. Neque
                illum error, dolor.
              </p>
            </div>
          </div>
          <button className="bg-[#cc1a00] text-white text-medium rounded-[3px] px-5 py-[10px] h-max cursor-pointer">
            SUBSCRIBE
          </button>
        </div>
        <div className="my-[15px] border-[0.1px] border-[#373737] w-full"></div>
        <Comments />
      </div>
      <div className="flex-[2]">Recommendation</div>
    </div>
  );
};

export default Video;
