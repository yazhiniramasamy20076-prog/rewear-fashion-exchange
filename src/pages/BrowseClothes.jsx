
import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ClothingCard from "../components/ClothingCard";

const clothes = [
  {
    id: 1,
    name: "Floral Summer Dress",
    category: "Dresses",
    size: "M",
    color: "Pink",
    price: 450,
    condition: "Like New",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600"
  },
  {
    id: 2,
    name: "Casual Denim Jacket",
    category: "Jackets",
    size: "L",
    color: "Blue",
    price: 650,
    condition: "Good",
    image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=600"
  },
  {
    id: 3,
    name: "Classic White Outfit",
    category: "Tops",
    size: "S",
    color: "White",
    price: 350,
    condition: "Like New",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600"
  },
  {
    id: 4,
    name: "Elegant Casual Outfit",
    category: "Dresses",
    size: "M",
    color: "Beige",
    price: 550,
    condition: "Good",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600"
  },
  {
    id: 5,
    name: "Everyday Fashion Wear",
    category: "Tops",
    size: "L",
    color: "Neutral",
    price: 300,
    condition: "Like New",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600"
  },
  {
    id: 6,
    name: "Denim Fashion Jeans",
    category: "Bottoms",
    size: "M",
    color: "Blue",
    price: 500,
    condition: "Good",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600"
  }
];

function BrowseClothes({ onNavigate, items = [] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredClothes = useMemo(() => {
    return [...items, ...clothes].filter((item) => {
      const matchesCategory =
        category === "All" || item.category === category;

      const matchesSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <div className="app">
      <Navbar />

      <div className="dashboard-layout">
        <Sidebar
          activePage="Browse Clothes"
          onNavigate={onNavigate}
        />

        <main className="main-content browse-content">
          <p className="greeting">SUSTAINABLE FASHION MARKETPLACE 🌿</p>

          <div className="browse-heading">
            <div>
              <h1>Browse Clothes</h1>
              <p>Find your next favourite outfit while giving clothes a second life.</p>
            </div>
          </div>

          <div className="browse-search">
            <Search size={20} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search dresses, tops, jackets..."
            />
            <SlidersHorizontal size={20} />
          </div>

          <div className="category-filters">
            {["All", "Dresses", "Tops", "Jackets", "Bottoms"].map((item) => (
              <button
                key={item}
                className={category === item ? "selected" : ""}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="listing-heading">
            <h2>Discover Pre-loved Fashion</h2>
            <span>{filteredClothes.length} items found</span>
          </div>

          <div className="clothing-grid">
            {filteredClothes.map((item) => (
              <ClothingCard key={item.id} item={item} />
            ))}
          </div>

          {filteredClothes.length === 0 && (
            <div className="empty-results">
              <h3>No clothes found</h3>
              <p>Try another search or category.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default BrowseClothes;
