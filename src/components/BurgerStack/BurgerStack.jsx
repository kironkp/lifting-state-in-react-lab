// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (props) => {
  return (
    <ul>
      {props.stack.map((stackItem, index) => (
        <li key={`${stackItem.name}-${index}`} style={{ backgroundColor: stackItem.color }}>
          {stackItem.name}
          <button type="button" onClick={() => props.removeFromBurger(index)}>
            X
          </button>
        </li>
      ))}
    </ul>
  )
}

export default BurgerStack
