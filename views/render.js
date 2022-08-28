import ReactDOM from 'react-dom';
import React from 'react';

//const root = ReactDOM.createRoot(document.getElementById('root'));

export function renderDOM(app) {
  //uncomment if it still doesn't work
  //root.render(
  ReactDOM.render(
    <React.StrictMode>{app}</React.StrictMode>,
    document.getElementById('root')
  );
}

export function renderView(parent, Views) {
  parent.state = parent.state || {};
  const {view, ContentView} = parent.state;
  const View = view === 'Wrapper'
    ? ContentView
    : Views[view];
  const Wrapper = Views['Wrapper'];
  const props = {...parent.props, ...parent.state, parent};
  const content = <View {...props} />;
  return <Wrapper {...{content}} />;
}