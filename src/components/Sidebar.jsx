
import {
  LayoutDashboard,
  Shirt,
  PlusCircle,
  Repeat,
  Heart,
  MessageCircle,
  Settings
} from "lucide-react";

function Sidebar({ activePage = "Dashboard", onNavigate }) {
  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Browse Clothes", icon: Shirt },
    { name: "Add Listing", icon: PlusCircle },
    { name: "My Exchanges", icon: Repeat },
    { name: "Wishlist", icon: Heart },
    { name: "Messages", icon: MessageCircle },
    { name: "Settings", icon: Settings }
  ];

  return (
    <aside className="sidebar">
      <h3>MENU</h3>

      {menuItems.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.name}
            onClick={() => {
              onNavigate?.(item.name);
            }}
            className={`sidebar-item ${
              activePage === item.name ? "active" : ""
            }`}
          >
            <Icon size={20} />
            <span>{item.name}</span>
          </div>
        );
      })}

      <div className="eco-note">
        <h4>Wear Green 🌱</h4>
        <p>Small fashion choices create a better planet.</p>
      </div>
    </aside>
  );
}

export default Sidebar;
