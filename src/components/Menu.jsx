import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import RestoreIcon from "@mui/icons-material/Restore";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MovieIcon from "@mui/icons-material/Movie";
import ArticleIcon from "@mui/icons-material/Article";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SettingsIcon from "@mui/icons-material/Settings";
import FlagIcon from "@mui/icons-material/Flag";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Menu = () => {
  return (
    <div className="sticky top-0 flex-1 min-w-52 text-sm bg-[#202020] h-full min-h-screen text-white">
      <div className="py-5 px-[26px]">
        <div className="flex items-center gap-1 font-bold mb-6">
          <img src="" className="h-6" />
          Youtube
        </div>
        <div className="flex items-center py-2 gap-5 cursor-pointer">
          <HomeIcon /> <p>Home</p>
        </div>
        <div className="flex items-center py-2 gap-5 cursor-pointer">
          <ExploreIcon /> <p>Explore</p>
        </div>
        <div className="flex items-center py-2 gap-5 cursor-pointer">
          <SubscriptionsIcon /> <p>Subscription</p>
        </div>
        <div className="my-[15px] border-[0.1px] border-[#373737] w-full"></div>
        <div className="flex items-center py-2 gap-5 cursor-pointer">
          <VideoLibraryIcon /> <p>Library</p>
        </div>
        <div className="flex items-center py-2 gap-5 cursor-pointer">
          <RestoreIcon /> <p>History</p>
        </div>
        <div>
          <p>Sign in to like video, comment and subscribe</p>
          <button className="px-[15px] py-1 bg-transparent border border-[#3ea6ff] text-[#3ea6ff] rounded-sm flex items-center gap-1 font-medium mt-2 cursor-pointer">
            <AccountCircleIcon />
            Sign In
          </button>
        </div>
        <div className="my-[15px] border-[0.1px] border-[#373737] w-full"></div>
        <div className="flex items-center py-2 gap-5 cursor-pointer">
          <LibraryMusicIcon /> <p>Music</p>
        </div>
        <div className="flex items-center py-2 gap-5 cursor-pointer">
          <SportsBasketballIcon /> <p>Sports</p>
        </div>
        <div className="flex items-center py-2 gap-5 cursor-pointer">
          <SportsEsportsIcon /> <p>Gaming</p>
        </div>
        <div className="flex items-center py-2 gap-5 cursor-pointer">
          <MovieIcon /> <p>Movies</p>
        </div>
        <div className="flex items-center py-2 gap-5 cursor-pointer">
          <ArticleIcon /> <p>News</p>
        </div>
        <div className="flex items-center py-2 gap-5 cursor-pointer">
          <LiveTvIcon /> <p>Live</p>
        </div>
        <div className="my-[15px] border-[0.1px] border-[#373737] w-full"></div>
        <div className="flex items-center py-2 gap-5 cursor-pointer">
          <SettingsIcon /> <p>Setting</p>
        </div>
        <div className="flex items-center py-2 gap-5 cursor-pointer">
          <FlagIcon /> <p>Reports</p>
        </div>
        <div className="flex items-center py-2 gap-5 cursor-pointer">
          <HelpOutlineIcon /> <p>Help</p>
        </div>

        <div className="flex items-center py-2 gap-5 cursor-pointer">
          <SettingsBrightnessIcon /> <p>Light Mode</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
