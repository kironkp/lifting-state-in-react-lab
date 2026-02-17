// src/components/IngredientList/IngredientList.jsx

const IngredientList = (props) => {
  return (
    <ul>
      {props.availableIngredients.map((availableIngredient, index) => (
        <li
          key={`${availableIngredient.name}-${index}`}
          style={{ backgroundColor: availableIngredient.color }}
        >
          {availableIngredient.name}
          <button type="button" onClick={() => props.addToBurger(availableIngredient)}>
            +
          </button>
        </li>
      ))}
    </ul>
  )
}

export default IngredientList
