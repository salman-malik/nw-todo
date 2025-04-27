"use client";

import { useState } from "react";
import { Priority } from "../types/todo";
import { toggleTodoCompletion, updateTodo, deleteTodo } from "../actions/todoActions";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";


type TodoProps = {
  id: string;
  title: string;
  description?: string;
  isCompleted: boolean;
  priority: Priority;
};

const priorityColors: Record<Priority, "default" | "primary" | "warning" | "error"> = {
  [Priority.LOW]: "primary",
  [Priority.MEDIUM]: "warning",
  [Priority.HIGH]: "error",
};

export default function Todo({ id, title, description, isCompleted, priority }: TodoProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editDescription, setEditDescription] = useState(description || "");
  const [editPriority, setEditPriority] = useState(priority);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleToggleComplete = () => {
    toggleTodoCompletion(id, !isCompleted);
  };

  const handleSaveEdit = () => {
    updateTodo(id, {
      title: editTitle,
      description: editDescription,
      priority: editPriority,
    });
    setIsEditing(false);
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    await deleteTodo(id);
  };

  const handleCancelDelete = () => {
    setIsDeleting(false);
  };

  if (isEditing) {
    return (
      <Paper elevation={2} sx={{ p: 3, mb: 2 }}>
        <Stack spacing={2}>
          <TextField
            id={`title-${id}`}
            label="Title"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            fullWidth
            required
          />
          <TextField
            id={`description-${id}`}
            label="Description"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            fullWidth
            multiline
            rows={2}
          />
          <FormControl fullWidth>
            <InputLabel id={`priority-label-${id}`}>Priority</InputLabel>
            <Select
              labelId={`priority-label-${id}`}
              id={`priority-${id}`}
              value={editPriority}
              label="Priority"
              onChange={(e) => setEditPriority(e.target.value as Priority)}
            >
              <MenuItem value={Priority.LOW}>Low</MenuItem>
              <MenuItem value={Priority.MEDIUM}>Medium</MenuItem>
              <MenuItem value={Priority.HIGH}>High</MenuItem>
            </Select>
          </FormControl>
          <Box display="flex" justifyContent="flex-end" gap={1}>
            <Button onClick={() => setIsEditing(false)} variant="outlined" color="inherit">
              Cancel
            </Button>
            <Button onClick={handleSaveEdit} variant="contained" color="primary">
              Save
            </Button>
          </Box>
        </Stack>
      </Paper>
    );
  }

  if (isDeleting) {
    return (
      <Paper elevation={2} sx={{ p: 3, mb: 2 }}>
        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          Delete this task?
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {title}
        </Typography>
        <Box display="flex" justifyContent="flex-end" gap={1}>
          <Button onClick={handleCancelDelete} variant="outlined" color="inherit">
            Cancel
          </Button>
          <Button onClick={handleDelete} variant="contained" color="error">
            Delete
          </Button>
        </Box>
      </Paper>
    );
  }

  return (
    <Paper
      elevation={1}
      sx={{
        p: 3,
        mb: 2,
        opacity: isCompleted ? 0.7 : 1,
        bgcolor: isCompleted ? "action.hover" : "background.paper",
      }}
    >
      <Box display="flex" alignItems="flex-start">
        <Checkbox
          checked={isCompleted}
          onChange={handleToggleComplete}
          sx={{ mt: 0.5 }}
        />
        <Box flex={1} ml={2}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography
              variant="subtitle1"
              sx={{
                textDecoration: isCompleted ? "line-through" : "none",
                color: isCompleted ? "text.disabled" : "text.primary",
                fontWeight: 500,
              }}
            >
              {title}
            </Typography>
            <Chip
              label={priority.charAt(0) + priority.slice(1).toLowerCase()}
              color={priorityColors[priority]}
              size="small"
              sx={{ fontWeight: 500 }}
            />
          </Box>
          {description && (
            <Typography
              variant="body2"
              sx={{
                mt: 0.5,
                textDecoration: isCompleted ? "line-through" : "none",
                color: isCompleted ? "text.disabled" : "text.secondary",
              }}
            >
              {description}
            </Typography>
          )}
          <Box display="flex" justifyContent="flex-end" gap={1} mt={2}>
            <Button
              onClick={() => setIsEditing(true)}
              size="small"
              variant="text"
              color="primary"
            >
              Edit
            </Button>
            <Button
              onClick={() => setIsDeleting(true)}
              size="small"
              variant="text"
              color="error"
            >
              Delete
            </Button>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
} 