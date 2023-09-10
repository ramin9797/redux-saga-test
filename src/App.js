import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseCount, getNews, increaseCount } from './redux/actions/actionCreator';

function App() {
  
  const counter = useSelector(state=>state);
  console.log(counter);
  const dispatch = useDispatch()

  const increase = ()=>{
    dispatch(increaseCount())
  }

  const getAllNews = ()=>{
    dispatch(getNews())
  }

  const decrease = ()=>{dispatch(decreaseCount())}

  return (
    <div className="App">
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={getAllNews}>getNews</button>
      <h1>{counter?.count}</h1>    
    </div>
  );
}

export default App;
