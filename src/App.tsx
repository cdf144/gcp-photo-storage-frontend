import Header from "./components/Header.tsx";
import Home from "./components/Home.tsx";

function App() {
    return (
        <div className="flex h-screen flex-col">
            <Header />
            <Home />
        </div>
    );
}

export default App;
