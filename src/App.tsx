import Header from "./components/Header.tsx";
import Home from "./components/Home.tsx";

function App() {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <Home />
        </div>
    );
}

export default App;
