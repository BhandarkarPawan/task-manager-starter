import "./App.css";
import Header from "./components/Header";

// Tasks to complete:
// 1. Create a Header component using Material UI (AppBar)
// 2. Create a Todo Item component and customize styling using Tailwind
// 3. Create two lists: Pending and Completed Tasks with Static Props
// 4. Make the lists work with dynamic props & prop drilling
// 5. Create a Modal component using Material UI
// 6. Add the newly created task to the state
// 7. Persist and read state from local storage

function App() {
    return (
        <div className="App">
            <Header />
        </div>
    );
}

export default App;
