import blackGradientOverlay from "../../assets/overlay_Image.png";
import { Heart, Star } from "lucide-react";

interface CafeCardProps {
  backgroundImage: string;
  title: string;
  website: string;
  discount: number;
}

const CafeCard = ({
  backgroundImage,
  title,
  website,
  discount,
}: CafeCardProps) => {
  return (
    <a
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block h-72 overflow-hidden rounded-3xl bg-cover bg-center shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Discount */}
      <div className="absolute left-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white shadow">
        {discount}% OFF
      </div>

      {/* Wishlist */}
      <button
        onClick={(e) => e.preventDefault()}
        className="absolute right-4 top-4 rounded-full bg-white/90 p-2 transition hover:scale-110"
      >
        <Heart size={18} className="text-red-500" />
      </button>

      {/* Overlay */}
      <div
        className="flex h-full flex-col justify-end p-5"
        style={{
          backgroundImage: `url(${blackGradientOverlay})`,
        }}
      >
        <p className="text-sm font-semibold uppercase tracking-wider text-orange-400">
          BrewVerse Special
        </p>

        <h3 className="mt-1 text-2xl font-bold text-white">
          {title}
        </h3>

        <div className="mt-2 flex items-center gap-2">
          <Star size={16} fill="#f59e0b" color="#f59e0b" />
          <span className="text-sm text-white">4.9 Rating</span>
        </div>

        <div className="mt-5 rounded-xl bg-orange-500 py-3 text-center font-semibold text-white transition hover:bg-orange-600">
          Visit Cafe
        </div>
      </div>
    </a>
  );
};

export default CafeCard;