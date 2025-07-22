import './App.css'
import { Board } from './components/board.component'
import { ReloadButton } from './components/reloadbtn.component'
import { Header } from './components/header.component'

export default function App() {
  return (
    <>
      <Header />
      <Board />
      <ReloadButton />
    </>
  )
}