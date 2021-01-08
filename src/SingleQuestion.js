import React, { useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     padding: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.light,
//     color: theme.palette.common.black.dark,
//   },
// }));

const SingleQuestion = ({ question }) => {
  // const classes = useStyles();
  const { title, info } = question;
  console.log(question);
  const [showInfo, setShowInfo] = useState(false);
  return (
    <Paper variant="outlined">
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        className="grid"
      >
        <Grid item>
          <h3>{title}</h3>
        </Grid>

        <Grid item>
          {showInfo ? (
            <RemoveIcon
              color="secondarys"
              onClick={() => setShowInfo(!showInfo)}
            />
          ) : (
            <AddIcon color="primary" onClick={() => setShowInfo(!showInfo)} />
          )}
        </Grid>

        {showInfo && <p>{info}</p>}
      </Grid>
    </Paper>
  );
};

export default SingleQuestion;
