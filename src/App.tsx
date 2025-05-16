import Header from './components/Header.tsx'
import Home from './components/Home.tsx'
import Storage from './components/Storage.tsx';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/storage" element={<Storage />} />
      </Routes>
    </div>
  )
}

export default App;
