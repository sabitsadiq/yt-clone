import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
  return (
    <div className="sticky top-0 h-14 bg-[#202020]">
      <div className="relative w-full h-full px-5 flex items-center justify-end">
        <div className="flex items-center justify-between p-[5px] border border-[#ccc] rounded absolute w-[40%] right-0 left-0 m-auto">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent border-none outline-none"
          />
          <SearchOutlinedIcon />
        </div>
        <button className="px-[15px] py-1 bg-transparent border border-[#3ea6ff] text-[#3ea6ff] rounded-sm flex items-center gap-1 font-medium cursor-pointer">
          <AccountCircleIcon />
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
