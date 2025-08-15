import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch("/data.json");
        const recipes = await response.json();
        const foundRecipe = recipes.find((r) => r.id === parseInt(id));
        setRecipe(foundRecipe);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Recipe not found
        </h2>
        <Link to="/" className="text-blue-600 hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link to="/" className="inline-block mb-6 text-blue-600 hover:underline">
        ← Back to Recipes
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 md:h-80 object-cover"
        />

        <div className="p-6 md:p-8">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              {recipe.title}
            </h1>
            <div className="flex space-x-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                ⏱️ {recipe.cookingTime}
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                ⚡ {recipe.difficulty}
              </span>
            </div>
          </div>

          <p className="text-gray-600 mb-6">{recipe.summary}</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b">
                Ingredients
              </h2>
              <ul className="space-y-2">
                {recipe.ingredients?.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-5 h-5 bg-blue-100 text-blue-800 rounded-full mr-2 mt-1 flex items-center justify-center text-xs">
                      ✓
                    </span>
                    <span>{ingredient}</span>
                  </li>
                )) || <li>No ingredients listed</li>}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b">
                Instructions
              </h2>
              <ol className="space-y-4">
                {recipe.instructions?.map((step, index) => (
                  <li key={index} className="flex">
                    <span className="inline-block w-6 h-6 bg-blue-600 text-white rounded-full mr-3 flex-shrink-0 flex items-center justify-center">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                )) || <li>No instructions provided</li>}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
