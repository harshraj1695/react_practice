function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    if (reactElement.props.href) {
        domElement.setAttribute('href', reactElement.props.href);
    }
    if (reactElement.props.target) {
        domElement.setAttribute('target', reactElement.props.target);
    }
    domElement.innerHTML = reactElement.children;
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'http://google.com',
        target: '_blank'
    },
    children: 'click me'
};

const mainContainer = document.querySelector('#root');
customRender(reactElement, mainContainer);
