import { Button, makeStyles, TextField } from "@material-ui/core";
import { useState } from "react";

export { TodoList };

const useStyles = makeStyles({
  todoInput: {
    alignItems: "center",
    display: "flex",
  },
  todoItem: {
    alignItems: "center",
    display: "flex",
  },
});

interface TodoDatum {
  id: number;
  description: string;
}

function TodoList(): JSX.Element {
  const classes = useStyles();
  const [newDescription, setNewDescription] = useState<string>("");
  const [todos, setTodos] = useState<TodoDatum[]>([
    { description: "Buy milk", id: getUniqId() },
    { description: "Sell eggs", id: getUniqId() },
  ]);

  return (
    <div>
      <div className={classes.todoInput}>
        <TextField
          variant="outlined"
          value={newDescription}
          onChange={(event) => setNewDescription(event.target.value)}
        />
        <Button onClick={addTodo} color="primary">
          Add
        </Button>
      </div>
      {todos.map(({ description, id }, index) => (
        <div key={id} className={classes.todoItem}>
          <div>{description}</div>
          <Button onClick={() => removeTodo(index)} color="primary">
            Remove
          </Button>
        </div>
      ))}
    </div>
  );

  function addTodo() {
    setTodos([...todos, { description: newDescription, id: getUniqId() }]);
  }

  function removeTodo(index: number) {
    todos.splice(index, 1);
    setTodos([...todos]);
  }
}

let lastUsedId = 0;

function getUniqId() {
  return lastUsedId++;
}
