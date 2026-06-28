import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  backgroundImage: string;
  title: string;
}

const CategoryCard = ({ backgroundImage, title }: CategoryCardProps) => {
  return (
    <div className="group overflow-hidden rounded-3xl bg-slate-900 shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <div className="overflow-hidden">
        <img
          src={backgroundImage}
          alt={title}
          className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
        />
      </div>

      <div className="flex items-center justify-between p-5">
        <h3 className="text-xl font-bold text-white">{title}</h3>

        <ArrowRight
          className="text-orange-400 transition group-hover:translate-x-2"
          size={22}
        />
      </div>
    </div>
  );
};

export default CategoryCard;