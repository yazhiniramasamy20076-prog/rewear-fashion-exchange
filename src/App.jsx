
import { useState } from "react";
import {
  Routes,
  Route,
  useNavigate,
  Navigate
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import BrowseClothes from "./pages/BrowseClothes";
import AddListing from "./pages/AddListing";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import "./App.css";

function PlaceholderPage({ title, onNavigate }) {
  return (
    <div className="app">
      <Navbar />

      <div className="dashboard-layout">
        <Sidebar
          activePage={title}
          onNavigate={onNavigate}
        />

        <main className="main-content">
          <p className="greeting">REWEAR SUSTAINABLE FASHION 🌿</p>
          <h1>{title}</h1>
          <p className="form-subtitle">
            This section is being developed.
            Stay tuned for more sustainable fashion features!
          </p>
        </main>
      </div>
    </div>
  );
}

function App() {
  const navigate = useNavigate();
  const [listings, setListings] = useState([]);

  const handleNavigate = (page) => {
    const routes = {
      "Dashboard": "/",
      "Browse Clothes": "/browse",
      "Add Listing": "/add-listing",
      "My Exchanges": "/exchanges",
      "Wishlist": "/wishlist",
      "Messages": "/messages",
      "Settings": "/settings"
    };

    navigate(routes[page] || "/");
  };

  const handleAddListing = (newListing) => {
    setListings((previous) => [newListing, ...previous]);
    navigate("/browse");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Dashboard onNavigate={handleNavigate} />}
      />

      <Route
        path="/browse"
        element={
          <BrowseClothes
            onNavigate={handleNavigate}
            items={listings}
          />
        }
      />

      <Route
        path="/add-listing"
        element={
          <AddListing
            onNavigate={handleNavigate}
            onAddListing={handleAddListing}
          />
        }
      />

      <Route
        path="/exchanges"
        element={
          <PlaceholderPage
            title="My Exchanges"
            onNavigate={handleNavigate}
          />
        }
      />

      <Route
        path="/wishlist"
        element={
          <PlaceholderPage
            title="Wishlist"
            onNavigate={handleNavigate}
          />
        }
      />

      <Route
        path="/messages"
        element={
          <PlaceholderPage
            title="Messages"
            onNavigate={handleNavigate}
          />
        }
      />

      <Route
        path="/settings"
        element={
          <PlaceholderPage
            title="Settings"
            onNavigate={handleNavigate}
          />
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
