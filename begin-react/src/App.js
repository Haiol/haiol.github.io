import Hello from './Hello';
import './App.css';
import Wrapper from './Wrapper';
import Counter from './Counster';
import InputSample from './InputSample';

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'balck',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  };
  return (
    <div className="App">
       <div style={style}>{name}</div>
      {/* <div className="gray-box">{name}</div> */}
      {/* <Hello name="react" color="red"/>
      <Hello color="pink"/>
      <Hello />
      <Wrapper>
        <Hello name="react" color="red" isSpecial/>
      </Wrapper> */}
      <Counter/>
      <InputSample/>
    </div>
  );
}

export default App;
