import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import ThemeToggle from "./components/ThemeToggle";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Box component="header" display="flex" alignItems="center" justifyContent="space-between" mb={8}>
          <div>
            <Typography variant="h4" fontWeight={700} gutterBottom color="text.primary">
             Todo Or Not Todo
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              That is the question.
            </Typography>
          </div>
          <ThemeToggle />
        </Box>

        <main>
          <TodoForm />
          <TodoList />
        </main>

        <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Built by Salman, for Salman.
          </p>
        </footer>
      </div>
    </div>
  );
}
