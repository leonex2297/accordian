import React, { useState } from "react";
import { Grid, Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
  },
  header: {
    display: "flex",
  },
  grid: {
    border: "1px solid black",
  },
}));

const SingleQuestion = ({ question }) => {
  const classes = useStyles();
  const { title, info } = question;
  console.log(question);
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div>
      <div>
        <Grid className={classes.grid}>
          <Paper className={classes.paper}>
            <header className={classes.header}>
              <h3>{title}</h3>
              <Button
                color="secondary"
                size="small"
                onClick={() => setShowInfo(!showInfo)}
              >
                {showInfo ? <RemoveIcon /> : <AddIcon />}
              </Button>
            </header>
            {showInfo && <p>{info}</p>}
          </Paper>
        </Grid>
      </div>
    </div>
  );
};

export default SingleQuestion;
