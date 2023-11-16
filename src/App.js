import Typography from "@mui/material/Typography";
import { useState } from "react";
import "./App.css";
import AddTaskModal from "./components/AddTaskModal";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

// Tasks to complete:
// 1. Create a Header component using Material UI (AppBar)
// 2. Create a Todo Item component and customize styling using Tailwind
// 3. Create two lists: Pending and Completed Tasks with Static Props
// 4. Make the lists work with dynamic props & prop drilling
// 5. Create a button component using Material UI
// 6. Create a Modal component using Material UI
// 7. Add the newly created task to the state
// 8. Persist and read state from local storage

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

    const handleCheck = (index, state) => {
        const newItems = [...items];
        newItems[index].checked = state;
        setItems(newItems);
    };

    const addTask = (task) => {
        const newItems = [...items, { checked: false, description: task }];
        setItems(newItems);
    };

    const pendingItems = items
        .map((item, index) => ({ ...item, index }))
        .filter((item) => !item.checked);

    const completedItems = items
        .map((item, index) => ({ ...item, index }))
        .filter((item) => item.checked);

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
            <TodoList items={pendingItems} handleCheck={handleCheck} />
            <Typography
                variant="h6"
                gutterBottom
                className="text-left p-4 pb-0 text-blue-600 font-bold"
            >
                Completed
            </Typography>
            <TodoList items={completedItems} handleCheck={handleCheck} />
            <AddTaskModal addTask={addTask} />
        </div>
    );
}

export default App;
