import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "../src/components/Menu";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Video from "./pages/Video";
function App() {
  return (
    <div className="flex">
      <BrowserRouter>
        <Menu />
        <main className="flex-[7] bg-[#181818]">
          <Navbar />
          <div className="w-11/12 mx-auto">
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="video">
                  <Route path=":id" element={<Video />} />
                </Route>
              </Route>
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
