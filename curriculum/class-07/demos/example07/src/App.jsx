import { useState } from "react"

export default function App() {

    const [count, setCount] = useState(5);
    const [lastButton, setLastButton] = useState("");

    function increment() {
        setCount(count + 1);
        setLastButton("+");
    }

    function decrement () {
        setCount(count - 1);
        setLastButton("-");
    }

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      <p>última acción: {lastButton}</p>
    </div>
  );
}

// export default class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//     this.increment = this.increment.bind(this);
//     this.decrement = this.decrement.bind(this);
//   }

//   increment() {
//     this.setState({count: this.state.count + 1});
//   }

//   decrement() {
//     this.setState({count: this.state.count - 1});
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.decrement}>-</button>
//         <span>{this.state.count}</span>
//         <button onClick={this.increment}>+</button>
//       </div>
//     )
//   }
// }
