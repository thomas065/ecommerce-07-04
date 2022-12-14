import logo from './logo.svg';
import './App.css';

/*
  JSX (JavaScript XML): Allows us to use JS to write HTML

  React translates [XML -> JS] -> HTML
    [] = JSX

  let div = createElement('div')
  div.attributes.class = 'App';
  div.appendChild(<header>);

  <header class="MyClass" id=""><body>
  <asdf attr="asdf">
*/
/*
  <App /> = App();
*/

/*
  Props: Data passed from a parent component to a child component
    - Object of information
    - Read-only

    {
      title: 'Home Page',
      foo: 'bar',
      num: 1
      ...
    }
*/

function SubTitle(data) {
  // data.title = 'New Title'; // not allowed
  let title = data.title;
  return (
    <h2>{title.toUpperCase()}</h2>
  )
}

function App() {
  let x = 'abc';
  return (
    <div className="App">
      <h1>E-commerce Store - Toys</h1>
      <SubTitle title="Home Page" foo="bar" num={1} x={x} func={() => {}} />
      <SubTitle title="About Page" />
      <SubTitle title="Products" />
    </div>
  );
}

export default App;
