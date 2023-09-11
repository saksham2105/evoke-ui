import EvokeUI from '../evoke-ui';

const Greeting = ({ name }) => <p>Welcome {name}!</p>;

const sonu = () => {
 console.log("Sonu invoked");
};

export function Login() {
    return <div>
            <button onClick={sonu}>Invoke Sonu</button>
          <Greeting name={"Login"}/>
    </div>
}