const App = () => {
  // Display a "Like" <button>
  return React.createElement(
    'button',
    { 
      onClick: () => {
        fetch('/api/json')
          .then(response => response.json())
          .then(json => alert(JSON.stringify(json)))
      }
    },
    'Turn off the fire alarm test'
  );
}

const out = document.getElementById('out');


console.log('out is', out);

ReactDOM.render(React.createElement(App), out);