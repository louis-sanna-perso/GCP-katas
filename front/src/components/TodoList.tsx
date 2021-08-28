export { TodoList };

interface TodoDatum {
    description: string
}

function TodoList({ todos }: { todos: TodoDatum[] }) {
    return <div>{todos.map(({description}) => <div>{description}</div>)}</div>
}