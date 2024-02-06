//PascalCasing we should capitalize the first letter of every words
function Message() {
    //we should describe what UI is going to look like where we use this component
    //JSX javascript XML (babeljs.io/repl)
    const name = 'Hana';
    if (name)
     return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1>; 
}

export default Message;