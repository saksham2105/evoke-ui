import EvokeUI from './evoke-ui';
import logo from './logo.png';
import Login from './components/Login';
import Component from './components/Component';
import { Counter } from './components/Counter';
// In your component:
const Greeting = ({ name }) => <p>Welcome {name}!</p>;
export default class App extends EvokeUI.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name : "Rajan"
    };
    this.incrementCount = this.incrementCount.bind(this);
    this.changeName = this.changeName.bind(this);
  }

  componentDidMount() {
    console.log('Component mounted');
  }
   
  kalu() {
    console.log("Kalu");
  }
  ramesh() {
    console.log("Ramesh");
  }

  incrementCount() {
    this.setState({ count: this.state.count + 1 }, () => {
      console.log("New count:", this.state.count);
    });
  }

  changeName() {
    this.setState({ name: "Saksham" }, () => {
    });
  }



  render() {
    return (
      <div>
        <header>
        <img src={logo}  />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Evoke UI
        </a>
      </header>
        <br /><br /><br />
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.changeName}>Change Name</button>
    <button className="myButton" onClick={this.kalu}>Invoke Kalu</button>
  <a href="sasaa" onClick={this.ramesh}>Ramesh</a>
  <span>Span Count {this.state.count.toString()}</span>
  <p>Name : {this.state.name}</p>
  <Greeting name={"App"}/>
  <Login message={this.state.name}/>
  <Component />
  <Counter name={this.state.name}/>
  <input type="text" value={this.state.name} />
  <h1>Hello Moto</h1>
  </div>
    )
  }
}