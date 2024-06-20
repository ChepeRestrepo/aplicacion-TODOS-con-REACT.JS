import "./App.css";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";

let defaultTodos = [
  {
    text: "Picar cebolla",
    completed: false,
  },
  {
    text: "Aprender react",
    completed: false,
  },
  {
    text: "Cocinar con ella",
    completed: false,
  },
  {
    text: "Jugar con principe",
    completed: false,
  },
];

function App() {
  return (
    <div className="App">
      <TodoCounter completed={3} total={10} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem task={todo.text} key={todo.text} />
        ))}
      </TodoList>
    </div>
  );
}

export default App;
