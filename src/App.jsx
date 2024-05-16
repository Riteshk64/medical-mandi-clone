import Banner from "./Components/Banner";
import Blogs from "./Components/Blogs";
import Navbar from "./Components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import DetailedBlog from "./Components/DetailedBlog";

function App() {
  return (
    <Router>
      <div className="text-center">
        {/* Conditionally render Banner and Navbar based on the route */}
        <Routes>
          <Route
            element={
              <div>
                <Banner />
                <Navbar />
                <Outlet />
              </div>
            }
          >
            <Route path="/" element={<Blogs />} />
            <Route path="/Blogs" element={<DetailedBlog />} />
          </Route>
          <Route path="*" element={<div>Error 404: Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
