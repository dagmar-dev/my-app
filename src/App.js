import Card from './components/Card'
import './App.css';
import infoData from './components/infoData'



function App() {
  const info = infoData.map((data) => {
      return <Card name={data.name} description={data.description} />
  })
  return <div className="App">{info}</div>
}

export default App;
