type Props = {
    ingredients: string[];
  };
  
  export default function MealIngredients({ ingredients }: Props) {
    return (
      <div>
        <h2 className="text-xl font-semibold mt-4 mb-2">Ingredients</h2>
        <div className="flex gap-10">
          <ul className="list-disc space-y-1">
            {ingredients.slice(0, 10).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <ul className="list-disc space-y-1">
            {ingredients.slice(10, 20).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  