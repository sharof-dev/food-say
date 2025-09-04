import React from "react";
// import { ArrowLeft, Search, X, Grid, Heart, User } from "lucide-react";
import RecipeCard from "../../components/recipe/RecipeCard";

const Home: React.FC = () => {

  const theme = localStorage.getItem("theme")
  console.log(theme);
  

  return (
    <div className="flex flex-col bg-white dark:bg-neutral-900">
      <div className="flex flex-col gap-4 mt-4 px-4">
        <RecipeCard title="Avocado Salad" description="91 lips · 1.05 g" />
        <RecipeCard title="Avocado Salad" description="91 lips · 1.05 g" />
        <RecipeCard title="Avocado Salad" description="91 lips · 1.05 g" />
        <RecipeCard title="Avocado Salad" description="91 lips · 1.05 g" />
        <RecipeCard title="Avocado Salad" description="91 lips · 1.05 g" />
        <RecipeCard title="Avocado Salad" description="91 lips · 1.05 g" />
        <RecipeCard title="Avocado Salad" description="91 lips · 1.05 g" />
        <RecipeCard title="Avocado Salad" description="91 lips · 1.05 g" />
        <RecipeCard title="Avocado Salad" description="91 lips · 1.05 g" />
        <RecipeCard title="Avocado Salad" description="91 lips · 1.05 g" />
        <RecipeCard title="Avocado Salad" description="91 lips · 1.05 g" />
        <RecipeCard title="Avocado Salad" description="91 lips · 1.05 g" />
        <RecipeCard title="Avocado Salad" description="91 lips · 1.05 g" />
      </div>
    </div>
  );
};

export default Home;
