'use client';

import { useState, FormEvent } from 'react';
import { Priority } from '../types/todo';
import { addTodo } from '../actions/todoActions';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';

export default function TodoForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<Priority>(Priority.MEDIUM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Title is required');
      return;
    }
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);
    try {
      const result = await addTodo({
        title: title.trim(),
        description: description.trim() || undefined,
        priority
      });
      if (result.error) {
        setError(result.error);
      } else {
        setTitle('');
        setDescription('');
        setPriority(Priority.MEDIUM);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      }
    } catch (error: unknown) {
      console.error('Error adding todo:', error);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4, mb: 4, borderRadius: 2 }}>
      <Typography variant="h6" component="h2" gutterBottom>
        Add New Task
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>
        )}
        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>Task added successfully!</Alert>
        )}
        <TextField
          id="title"
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What needs to be done?"
          fullWidth
          required
          margin="normal"
          disabled={isSubmitting}
        />
        <TextField
          id="description"
          label="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add details about the task..."
          fullWidth
          multiline
          rows={3}
          margin="normal"
          disabled={isSubmitting}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="priority-label">Priority</InputLabel>
          <Select
            labelId="priority-label"
            id="priority"
            value={priority}
            label="Priority"
            onChange={(e) => setPriority(e.target.value as Priority)}
            disabled={isSubmitting}
          >
            <MenuItem value={Priority.LOW}>Low</MenuItem>
            <MenuItem value={Priority.MEDIUM}>Medium</MenuItem>
            <MenuItem value={Priority.HIGH}>High</MenuItem>
          </Select>
        </FormControl>
        <Box display="flex" justifyContent="flex-end" mt={2}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Adding...' : 'Add Task'}
          </Button>
        </Box>
      </Box>
    </Paper>
  );
} 