export { TodoList };

interface TodoDatum {
  description: string;
}

function TodoList({ todos }: { todos: TodoDatum[] }): JSX.Element {
  return (
    <div>
      {todos.map(({ description }, index) => (
        <div key={index}>{description}</div>
      ))}
    </div>
  );
}
