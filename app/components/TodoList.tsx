import { getTodos } from '../actions/todoActions';
import Todo from './Todo';
import type { Priority, TodoItem } from '../types/todo';
import type { $Enums } from '@prisma/client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

export default async function TodoList() {
  let todos: TodoItem[] = [];
  let error = null;
  
  try {
    const result = await getTodos();
    todos = (result.todos || []).map((todo: Omit<TodoItem, 'priority'> & { priority: $Enums.Priority }) => ({
      ...todo,
      priority: todo.priority as Priority,
    }));
    error = result.error;
  } catch (err) {
    console.error('Error fetching todos:', err);
    error = 'Failed to connect to the database. Please check your database connection.';
  }

  if (error) {
    return (
      <Alert severity="error" sx={{ my: 3 }}>{error}</Alert>
    );
  }

  if (!todos || todos.length === 0) {
    return (
      <Box textAlign="center" py={8} borderRadius={2} border={1} borderColor="divider" bgcolor="background.paper" sx={{ mb: 4 }}>
        <CircularProgress color="inherit" sx={{ mb: 2 }} />
        <Typography variant="h6" color="text.secondary" gutterBottom>No tasks found</Typography>
        <Typography variant="body2" color="text.secondary">Get started by creating a new task.</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
        Your Tasks
      </Typography>
      <Box>
        {todos.map((todo: TodoItem) => (
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            description={todo.description || undefined}
            isCompleted={todo.isCompleted}
            priority={todo.priority as Priority}
          />
        ))}
      </Box>
    </Box>
  );
} 