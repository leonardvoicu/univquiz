import React from "react";
import "./Home.css";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import AppContext from "../AppContext";
import { selectCategory, storeQuiz } from "../reducer";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const categoryList = [
  {
    value: 0,
    title: "General knowledge"
  },
  {
    value: 1,
    title: "Sports"
  },
  {
    value: 2,
    title: "Animals"
  }
];

function Home() {
  const classes = useStyles();
  const { state, dispatch } = React.useContext(AppContext);
  const [path, setPath] = React.useState("");

  const [selectedCategory, setSelectedCategory] = React.useState(
    categoryList[0]
  );

  React.useEffect(() => {
    return () => {
      const category = categoryList.filter(c => c.value === selectedCategory);
      dispatch(selectCategory(category[0]));
    };
  }, [selectedCategory]);

  const handleChange = event => {
    const sc = event.target.value;
    setSelectedCategory(sc);
  };

  const onButtonClick = e => {
    fetchData();
  };

  const fetchData = async () => {
    axios
      .get(
        `https://opentdb.com/api.php?amount=10&category=${state.selectedCategory.value}`
      )
      .then(response => {
        const quiz = response.data.results;
        dispatch(storeQuiz(quiz));
      })
      .then(() => {
        setPath("quiz");
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="App">
      {path && <Redirect to={path} />}
      <header className="App-header">
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Select category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedCategory.value}
            onChange={handleChange}
          >
            {categoryList.map(category => (
              <MenuItem
                value={category.value}
                key={`category-${category.value}`}
              >
                {category.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <div className="home">
          <div className="button" onClick={onButtonClick}>
            Start
          </div>
          {/* <div className="button" onClick={onButtonClick}>
            Start
          </div>
          <div className="button" onClick={onButtonClick}>
            Start
          </div> */}
        </div>
      </header>
    </div>
  );
}

export default Home;
