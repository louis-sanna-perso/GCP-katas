import { makeStyles } from "@material-ui/core";
import { TodoList } from './components';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: '1200px',
    margin: 'auto',
    marginTop: '200px',
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TodoList todos={[{ description: "Buy milk" }, { description: "Sell eggs" }]}/>
    </div>
  );
}

export default App;
