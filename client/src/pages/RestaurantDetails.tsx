import { useParams } from "react-router";
import { restaurants } from "../data/restaurantsData";
import { Star, Clock3, MapPin, Phone } from "lucide-react";

const RestaurantDetails = () => {
  const { slug } = useParams();

  const restaurant = restaurants.find((r) => r.slug === slug);

  if (!restaurant) {
    return (
      <div className="flex h-screen items-center justify-center text-3xl font-bold">
        Restaurant Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d1117] text-white">

      <img
        src={restaurant.image}
        className="h-[450px] w-full object-cover"
        alt={restaurant.name}
      />

      <div className="mx-auto max-w-7xl px-8 py-10">

        <h1 className="text-5xl font-black">
          {restaurant.name}
        </h1>

        <div className="mt-4 flex flex-wrap gap-6">

          <div className="flex items-center gap-2">
            <Star fill="#f59e0b" color="#f59e0b" />
            {restaurant.rating}
          </div>

          <div className="flex items-center gap-2">
            <Clock3 />
            {restaurant.delivery}
          </div>

          <div className="flex items-center gap-2">
            <MapPin />
            {restaurant.location}
          </div>

        </div>

        <p className="mt-8 text-lg text-gray-300">
          {restaurant.description}
        </p>

        <div className="mt-10 rounded-3xl bg-slate-900 p-8">

          <h2 className="text-3xl font-bold">
            Contact
          </h2>

          <div className="mt-6 space-y-4">

            <div className="flex gap-3">
              <Phone />
              {restaurant.phone}
            </div>

            <a
              href={restaurant.website}
              target="_blank"
              className="text-orange-400"
            >
              Visit Website
            </a>

          </div>

        </div>

      </div>
    </div>
  );
};

export default RestaurantDetails;