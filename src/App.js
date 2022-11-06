import './App.css';
import Catalogue from './components/Catalogue';
import DetailsBar from './components/DetailsBar';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <div className="App">
            <Navbar />

            <div className="main_content">
                <Sidebar />
                <Catalogue />
                <DetailsBar />
            </div>

        </div>
    );
}

export default App;