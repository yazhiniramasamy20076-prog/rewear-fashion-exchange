
import {
  Shirt,
  Repeat,
  Heart,
  Leaf
} from "lucide-react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SystemBanner from "../components/SystemBanner";
import TaskCard from "../components/TaskCard";

function Dashboard({ onNavigate })  {
  return (
    <div className="app">
      <Navbar />

      <div className="dashboard-layout">
        <Sidebar
  activePage="Dashboard"
  onNavigate={onNavigate}
/>

        <main className="main-content">
          <SystemBanner />

          <div className="welcome-section">
            <div>
              <p className="greeting">WELCOME TO REWEAR 🌿</p>
              <h1>Discover Sustainable Fashion</h1>
              <p>
                Exchange, reuse and rediscover fashion.
                Make your wardrobe more sustainable.
              </p>
            </div>

            <button
  className="add-button"
  onClick={() => onNavigate("Add Listing")}
>
  + Add New Listing
</button>
          </div>

          <div className="stats-grid">
            <TaskCard
              title="Available Clothes"
              value="128"
              description="Pre-loved fashion items"
              icon={Shirt}
            />

            <TaskCard
              title="My Exchanges"
              value="12"
              description="Total exchange activities"
              icon={Repeat}
            />

            <TaskCard
              title="Wishlist"
              value="08"
              description="Items saved for later"
              icon={Heart}
            />

            <TaskCard
              title="Eco Impact"
              value="24 kg"
              description="Estimated textile waste avoided"
              icon={Leaf}
            />
          </div>

          <section className="recent-section">
            <h2>Start Your Sustainable Journey</h2>
            <p>
              Explore pre-loved clothes and give fashion
              a second life.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
