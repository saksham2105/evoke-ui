// file: src/qnd-react.js
import EvokeUIDom from "./evoke-ui-dom";

const createElement = (type, props = {}, ...children) => {

  children = children.flat();

  if (props && props.onClick) {
    props.onClick = props.onClick;
  }


  // if type is a Class then
  // 1. create a instance of the Class
  // 2. call the render method on the Class instance
  if (type.prototype && type.prototype.isEvokeUIClassComponent) {
    const componentInstance = new type(props);

    // remember the current vNode instance
    componentInstance.__vNode = componentInstance.render();

    // add hook to snabbdom virtual node to know whether it was added to the actual DOM
    // componentInstance.__vNode.props.hook = {
    //   create: () => {
    //     componentInstance.componentDidMount()
    //   }
    // }

    return componentInstance.__vNode;
  }
  // if type is a function then call it and return it's value
  if (typeof (type) == 'function') {
    return type(props);
  }

  const vnode = {
    type, 
    props, 
    children,
  };

  return vnode;
};

// component base class
class Component {
  constructor() { }

  componentDidMount() { }

  setState(partialState) {

    const updatedState = {
      ...this.state,
      ...partialState
    };
  
    // Update the component's state
    this.state = updatedState;
  
    // Re-render the component to get a new virtual DOM
    const newVNode = this.render();
  
    // Compare the new virtual DOM with the old one and update the actual DOM
    EvokeUIDom.updateElement( newVNode);
  
    // Update the reference to the new virtual DOM
  }

  render() { }
}

// add a static property to differentiate between a class and a function
Component.prototype.isEvokeUIClassComponent = true;

// to be exported like React.createElement, React.Component
const EvokeUI = {
  createElement,
  Component,
};

export default EvokeUI;
