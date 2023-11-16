import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import TodoItem from './TodoItem';


const TodoList = ({items}) => {
    return <List >
        {items.map((item) => (
            <ListItem>
                <TodoItem checked={item.checked} description={item.description} />
            </ListItem>
        ))}
  </List>
}

export default TodoList;    