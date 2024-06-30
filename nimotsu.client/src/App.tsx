import NimotsuListItems from './Components/NimotsuPage';
import "./App.css";
function App() {
    
    return (
        <div className="container mx-auto p-4">
            <h1 id="tableLabel" className="text-4xl mb-6">Your Nimotsu!</h1>
            <NimotsuListItems />
        </div>
    );

}

export default App;