import { makeStyles } from "@material-ui/core";
import { TodoList } from "./components";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: "1200px",
    margin: "auto",
    marginTop: "200px",
  },
});

function App(): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TodoList />
    </div>
  );
}

export default App;
