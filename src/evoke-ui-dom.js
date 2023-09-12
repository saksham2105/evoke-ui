let rootVNode;
let entryPoint;

function updateVirtualNode(vNode, key, updater) {
  if (vNode.key === key) {
    // Update the virtual node using the updater function
    updater(vNode);
  } else if (vNode.children && vNode.children.length > 0) {
    // Recursively search and update child nodes
    vNode.children.forEach(child => {
      updateVirtualNode(child, key, updater);
    });
  }
}

// React.render(<App />, document.getElementById('root'));
// el -> <App />
// rootDomElement -> document.getElementById('root')
function updateElement(newVNode) {
  //Change properties of newVVode
  updateVirtualNode(entryPoint, newVNode.key, (vNodeToUpdate) => {
    vNodeToUpdate.type = newVNode.type;
    vNodeToUpdate.children = newVNode.children
    vNodeToUpdate.props = newVNode.props;
  });
  //Rerender whole UI
  render(entryPoint, rootVNode);    
}
const render = (el, rootDomElement) => {

  if (typeof el === 'function') {
    el = el();
  }
  entryPoint = el;

  if (rootVNode == null) {
    rootVNode = rootDomElement;
  }

  // Perform DOM updates here, including event binding
  // Example: Attach event listeners for "onClick"
  rootDomElement.innerHTML = '';
  const rootElement = createElementFromVNode(el);

  if (rootElement) {
    rootDomElement.appendChild(rootElement);
  }
}

// Utility function to create a DOM element from a virtual node
function createElementFromVNode(vnode) {
  if (!vnode) {
    // Handle the case where vnode is null or undefined
    return null;
  }

  if (typeof vnode === 'string') {
    // Handle text nodes
    return document.createTextNode(vnode);
  }

  const element = document.createElement(vnode.type);
  if (vnode.key) {
     element.setAttribute("element-key", vnode.key);    
  }

  // Set props (attributes) on the element
  if (vnode.props) {
    for (const prop in vnode.props) {
      if (prop == "className") {
        element.setAttribute("class", vnode.props[prop]);
      }
      if (prop === 'onClick') {
        // Special handling for onClick event
        element.addEventListener('click', vnode.props[prop]);
      } else if (prop === 'style') {
        // Set inline styles
        const styles = vnode.props[prop];
        for (const styleName in styles) {
          element.style[styleName] = styles[styleName];
        }
      } else {
        // Set other props as attributes
        element.setAttribute(prop, vnode.props[prop]);
      }
    }
  }

  // Append child elements recursively
  if (vnode.children && vnode.children.length > 0) {
    vnode.children.forEach(child => {
      const childElement = createElementFromVNode(child);
      if (childElement) {
        element.appendChild(childElement);
      }
    });
  }

  return element;
}

// to be exported like ReactDom.render
const EvokeUIDom = {
  render,
  updateElement
};

export default EvokeUIDom;