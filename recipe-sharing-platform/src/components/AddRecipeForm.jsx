import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddRecipeForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    cookingTime: "",
    difficulty: "Easy",
    ingredients: "",
    instructions: "",
    image: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Recipe title is required";
    if (!formData.summary.trim()) newErrors.summary = "Summary is required";
    if (!formData.cookingTime.trim())
      newErrors.cookingTime = "Cooking time is required";
    if (!formData.ingredients.trim())
      newErrors.ingredients = "Ingredients are required";
    if (!formData.instructions.trim())
      newErrors.instructions = "Instructions are required";

    // Additional validation for ingredients format
    if (
      formData.ingredients.trim() &&
      formData.ingredients.split("\n").filter((i) => i.trim()).length < 2
    ) {
      newErrors.ingredients = "Please enter at least 2 ingredients";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Process form data
      const newRecipe = {
        ...formData,
        ingredients: formData.ingredients.split("\n").filter((i) => i.trim()),
        instructions: formData.instructions.split("\n").filter((i) => i.trim()),
        id: Date.now(), // Temporary ID
      };

      console.log("Form submitted:", newRecipe);
      // In a real app, you would send this to your backend API
      alert("Recipe submitted successfully!");
      navigate("/");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        Add New Recipe
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-md p-6"
      >
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Recipe Title *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="e.g. Spaghetti Carbonara"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-600">{errors.title}</p>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="summary"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Short Summary *
          </label>
          <textarea
            id="summary"
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            rows={2}
            className={`w-full px-3 py-2 border rounded-md ${
              errors.summary ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="A brief description of your recipe"
          />
          {errors.summary && (
            <p className="mt-1 text-sm text-red-600">{errors.summary}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label
              htmlFor="cookingTime"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Cooking Time *
            </label>
            <input
              type="text"
              id="cookingTime"
              name="cookingTime"
              value={formData.cookingTime}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md ${
                errors.cookingTime ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="e.g. 30 mins"
            />
            {errors.cookingTime && (
              <p className="mt-1 text-sm text-red-600">{errors.cookingTime}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="difficulty"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Difficulty Level
            </label>
            <select
              id="difficulty"
              name="difficulty"
              value={formData.difficulty}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="ingredients"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Ingredients * (one per line)
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            rows={4}
            className={`w-full px-3 py-2 border rounded-md ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            }`}
            placeholder={`1 cup flour\n2 eggs\n1 tsp salt`}
          />
          {errors.ingredients && (
            <p className="mt-1 text-sm text-red-600">{errors.ingredients}</p>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="instructions"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Instructions * (one step per line)
          </label>
          <textarea
            id="instructions"
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            rows={6}
            className={`w-full px-3 py-2 border rounded-md ${
              errors.instructions ? "border-red-500" : "border-gray-300"
            }`}
            placeholder={`Step 1: Mix ingredients\nStep 2: Bake for 30 minutes`}
          />
          {errors.instructions && (
            <p className="mt-1 text-sm text-red-600">{errors.instructions}</p>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
