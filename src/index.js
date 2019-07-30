import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import cats from './data.json';

function App() {
  console.log(cats);

  let catElements = cats.map(elem => {
    return (<CatProfile key={elem.id} name={elem.name} description={elem.description} />)
  });
  return (
    <div>
      <h1> Welcome to my App. </h1>
      {catElements}
    </div>
  )
}

function CatProfile(props) {
  let myStyle = {
    padding: 20,
    margin: 20,
    borderStyle: 'solid',
    backgroundColor: 'pink'
  }
  return (
    <div style={myStyle}>
      <h1>{props.name}</h1>
      <p> {props.description} </p>
    </div>
  );
}

ReactDOM.render(<App />, 
  document.getElementById('root'));


