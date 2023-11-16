import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import TodoItem from './TodoItem';


const TodoList = ({items, handleCheck}) => {
    return <List >
        {items.map((item) => (
            <ListItem key={item.index}>
                <TodoItem checked={item.checked} description={item.description} handleCheck={handleCheck} idx={item.index} />
            </ListItem>
        ))}
  </List>
}

export default TodoList;    