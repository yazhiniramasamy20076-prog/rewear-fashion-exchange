
import { useState } from "react";
import { Upload, Leaf, ImagePlus } from "lucide-react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function AddListing({ onNavigate, onAddListing }) {
  const [form, setForm] = useState({
    name: "",
    category: "Tops",
    size: "M",
    color: "",
    price: "",
    condition: "Like New",
    description: ""
  });

  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImageFile(file);
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!imageFile) {
      alert("Please upload a clothing image.");
      return;
    }

    const newListing = {
      ...form,
      id: Date.now(),
      price: Number(form.price),
      image,
      condition: form.condition
    };

    onAddListing(newListing);

    alert("Your clothing listing has been published!");

    setForm({
      name: "",
      category: "Tops",
      size: "M",
      color: "",
      price: "",
      condition: "Like New",
      description: ""
    });

    setImage("");
    setImageFile(null);
  };

  return (
    <div className="app">
      <Navbar />

      <div className="dashboard-layout">
        <Sidebar
          activePage="Add Listing"
          onNavigate={onNavigate}
        />

        <main className="main-content add-listing-content">

          <p className="greeting">SUSTAINABLE FASHION 🌿</p>

          <h1>Add New Clothing Listing</h1>

          <p className="form-subtitle">
            Give your pre-loved clothes a new home.
          </p>

          <div className="listing-form-container">

            <form onSubmit={handleSubmit}>

              <div className="upload-section">
                <h3>Clothing Photograph</h3>

                <label className="upload-box">
                  {image ? (
                    <img
                      src={image}
                      alt="Clothing preview"
                      className="image-preview"
                    />
                  ) : (
                    <>
                      <ImagePlus size={42} />
                      <h4>Upload Clothing Image</h4>
                      <p>Click here to select a photo</p>
                      <span>JPG, PNG or WEBP</span>
                    </>
                  )}

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImage}
                    required
                    hidden
                  />
                </label>
              </div>

              <div className="form-grid">

                <div className="form-group">
                  <label>Clothing Name *</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Example: Floral Summer Dress"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Category *</label>
                  <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                  >
                    <option value="Tops">Tops</option>
                    <option value="Dresses">Dresses</option>
                    <option value="Bottoms">Bottoms</option>
                    <option value="Jackets">Jackets</option>
                    <option value="Ethnic Wear">Ethnic Wear</option>
                    <option value="Accessories">Accessories</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Clothing Size *</label>
                  <select
                    name="size"
                    value={form.size}
                    onChange={handleChange}
                  >
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                    <option value="Free Size">Free Size</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Colour *</label>
                  <input
                    name="color"
                    value={form.color}
                    onChange={handleChange}
                    placeholder="Example: Green"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Expected Price (₹) *</label>
                  <input
                    type="number"
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                    placeholder="Enter amount"
                    min="1"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Clothing Condition *</label>
                  <select
                    name="condition"
                    value={form.condition}
                    onChange={handleChange}
                  >
                    <option value="Brand New">Brand New</option>
                    <option value="Like New">Like New</option>
                    <option value="Good">Good</option>
                    <option value="Fair">Fair</option>
                  </select>
                </div>

              </div>

              <div className="form-group description-group">
                <label>Description</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Describe your clothing, its material, style and other details..."
                  rows="4"
                />
              </div>

              <div className="form-note">
                <Leaf size={21} />
                <p>
                  By listing pre-loved clothing, you help promote
                  circular fashion and reduce textile waste.
                </p>
              </div>

              <button type="submit" className="publish-button">
                <Upload size={18} />
                Publish Listing
              </button>

            </form>
          </div>

        </main>
      </div>
    </div>
  );
}

export default AddListing;
