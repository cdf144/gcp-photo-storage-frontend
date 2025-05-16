import Header from './components/Header.tsx'
import Home from './components/Home.tsx'
import Footer from './components/Footer.tsx';
import Storage from './components/Collections.tsx';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Storage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
