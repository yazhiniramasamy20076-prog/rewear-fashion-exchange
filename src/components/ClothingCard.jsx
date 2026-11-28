
import { useState } from "react";
import { Heart, Repeat } from "lucide-react";

function ClothingCard({ item }) {
  const [liked, setLiked] = useState(false);
  const [requested, setRequested] = useState(false);

  return (
    <div className="clothing-card">
      <div className="clothing-image">
        <img src={item.image} alt={item.name} />

        <button
          className="wishlist-button"
          onClick={() => setLiked(!liked)}
          aria-label="Toggle wishlist"
        >
          <Heart
            size={20}
            fill={liked ? "#315c43" : "none"}
          />
        </button>

        <span className="condition-tag">{item.condition}</span>
      </div>

      <div className="clothing-details">
        <span className="clothing-category">{item.category}</span>
        <h3>{item.name}</h3>
        <p>Size: {item.size} · {item.color}</p>

        <div className="clothing-price">
          <strong>₹{item.price}</strong>
          <span>Pre-loved</span>
        </div>

        <button
          className="exchange-button"
          onClick={() => setRequested(true)}
          disabled={requested}
        >
          <Repeat size={17} />
          {requested ? "Request Sent" : "Request Exchange"}
        </button>
      </div>
    </div>
  );
}

export default ClothingCard;
