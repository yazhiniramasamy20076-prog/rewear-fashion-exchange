
import { Search, Bell, UserCircle, Leaf } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">
        <Leaf size={27} />
        <span>REWEAR</span>
      </div>

      <div className="search-box">
        <Search size={18} />
        <input
          type="text"
          placeholder="Search clothes, brands..."
        />
      </div>

      <div className="nav-actions">
        <Bell size={22} />
        <div className="profile">
          <UserCircle size={30} />
          <span>My Profile</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
