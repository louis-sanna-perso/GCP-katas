import { TodoList } from './components';

function App() {
  return (
    <div>
      <TodoList todos={[{ description: "Buy milk" }, { description: "Sell eggs" }]}/>
    </div>
  );
}

export default App;
