import EvokeUI from "../evoke-ui";

export default class Login extends EvokeUI.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: props.message,
    };
    this.sonu = this.sonu.bind(this);
  }

  sonu() {
    this.setState({ message: "Ramesh" }, () => {
      
    });
    console.log('Sonu invoked');
  };

  componentDidMount() {
    console.log('Component mounted');
  }

  render() {
    return (
      <div>
        <h3>Login Flow</h3>
        <h1>{this.state.message}</h1>
        <button onClick={this.sonu}>Invoke Sonu</button>
      </div>
    );
  }
}
