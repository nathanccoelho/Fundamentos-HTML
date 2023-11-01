
import './App.css'
import Card from './components/card/Card'
import Contador from './components/contador/Contador'
import Tarefa from './components/tarefa/Tarefa'
import Home from './page/home/Home'

function App() {
  
  return (
    <>
        
        <Card titulo ='Anime' descricao= 'One Piece' />
        <Contador/>
        <Tarefa/>
        <Home/>
    </>
  )
}

export default App
