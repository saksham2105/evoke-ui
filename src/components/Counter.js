import EvokeUI, {useState} from "../evoke-ui";

export function Counter(props) {
    // Declare a state variable 'count' with an initial value of 0
  
    const [count, setCount] = useState(0);

  // Event handler to increment the count
   const increment = () => {
    console.log(count)
    // Use the 'setCount' function to update the 'count' state variable
    setCount(count + 1);
   };
   return (
    <div>
        <p>Name : {props.name}</p>
      <p>Count: {count.toString()}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
  }
  
  