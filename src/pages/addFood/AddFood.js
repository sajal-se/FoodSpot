import { useState, useEffect } from "react";
import AddNewFood from "../../components/newFoodList/AddNewFood";

const firebaseApi = "https://food-spot-tre-default-rtdb.europe-west1.firebasedatabase.app/food-items.json";

const AddFood = () => {
  const [food, setFood] = useState([]);
  const addFoodHandler = async (food) => {
    console.log(food);
    const response = await fetch(firebaseApi,
      {
        method: "POST",
        body: JSON.stringify(food),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  const fetchFood = async () => {
    const response = await fetch(firebaseApi);
    const data = await response.json();

    const fetchedFood = [];

    for (const key in data) {
      fetchedFood.push({
        idMeal: key,
        strMeal: data[key].strMeal,
        strCategory: data[key].strCategory,
        strMealThumb: data[key].strMealThumb,
        strIngredient: data[key].strIngredient,
      });
    }
    setFood(fetchedFood);
  };

  useEffect(() => {
    fetchFood();
  }, [fetchFood]);

  return (
    <>
      <section>
        <AddNewFood onAddNewFood={addFoodHandler} />
      </section>
    </>
  );
};

export default AddFood;
