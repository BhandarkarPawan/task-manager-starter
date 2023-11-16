import Typography from "@mui/material/Typography";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

// Tasks to complete:
// 1. Create a Header component using Material UI (AppBar)
// 2. Create a Todo Item component and customize styling using Tailwind
// 3. Create two lists: Pending and Completed Tasks with Static Props
// 4. Make the lists work with dynamic props & prop drilling
// 5. Create a Modal component using Material UI
// 6. Add the newly created task to the state
// 7. Persist and read state from local storage

function App() {
    const [items, setItems] = useState([
        {
            checked: false,
            description: "Learn React",
        },
        {
            checked: false,
            description: "Buy some coffee",
        },
        {
            checked: true,
            description: "Go for a walk",
        },
    ]);

    const pendingItems = items.filter((item) => !item.checked);
    const completedItems = items.filter((item) => item.checked);

    return (
        <div className="App">
            <Header />
            <Typography
                variant="h6"
                gutterBottom
                className="text-left p-4 pb-0 text-red-600 font-bold"
            >
                Pending
            </Typography>
            <TodoList items={pendingItems} />
            <Typography
                variant="h6"
                gutterBottom
                className="text-left p-4 pb-0 text-blue-600 font-bold"
            >
                Completed
            </Typography>
            <TodoList items={completedItems} />
        </div>
    );
}

export default App;
