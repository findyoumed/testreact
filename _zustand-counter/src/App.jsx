import './App.css'
import CountBox from './Component/CountBox'
import counterStore from './stores/counterStore'

function App() {
  const {count, increase, increaseBy, decrease, decreaseBy, reset} = counterStore();

  return (
    <>
      <div className="container">
        <div className="pager-container">
          <div className="screen-container">
            <div className="screen">
              <h3>count : {count}</h3>
              <CountBox />
            </div>
          </div>
          <div className="button-container">
            <button className="increase-button" onClick={increase}><span className="">+1</span></button>        
            <button className="increase-button" onClick={()=>increaseBy(10)}>+10</button>   
            <button className="decrease-button" onClick={decrease}>-1</button>        
            <button className="decrease-button" onClick={()=>decreaseBy(10)}>-10</button>
            <button className="reset-button" onClick={reset}>↺</button>
          </div>
        </div>
      </div>
              
    </>
  )
}

export default App
