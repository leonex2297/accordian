import React, { useState } from "react";
import questions from "./Data";
import { Grid, Paper, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SingleQuestion from "./SingleQuestion";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(0.5),
  },
}));

function App() {
  const classes = useStyles();
  const [ques, setQues] = useState(questions);
  return (
    <Container>
      <Grid container justify="center" align="center">
        <Grid item lg={6}>
          <Paper elevation={3} className={classes.paper}>
            <h3> Question and answer about login</h3>
            <section>
              {ques.map((question) => {
                return <SingleQuestion key={ques.id} question={question} />;
              })}
            </section>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
