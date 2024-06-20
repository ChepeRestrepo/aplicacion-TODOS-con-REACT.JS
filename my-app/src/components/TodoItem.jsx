import { CreateTodoButton } from "./CreateTodoButton";

function TodoItem({ task }) {
  return (
    <ul>
      <li>
        <span>
          <CreateTodoButton create={"V"} />
        </span>
        <p>{task}</p>
        <span>
          <CreateTodoButton create={"X"} />
        </span>
      </li>
    </ul>
  );
}

export { TodoItem };
