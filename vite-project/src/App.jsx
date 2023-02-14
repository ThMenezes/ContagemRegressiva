import Title from './components/Title'
import Counter from './components/Counter'

import NewYear from './assets/newyear.jpg';

import './App.css'

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${NewYear})`}}>
      <div className="container">
        <Title title="Contagem regressiva para o carnaval"/>
        <div className="countdown-container">
          <Counter title="Dias" number={5}/>
          <Counter title="Horas" number={5}/>
          <Counter title="Minutos" number={5}/>
          <Counter title="Segundos" number={5}/>
        </div>
      </div>
    </div>
  );
}

export default App
