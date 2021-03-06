import React from 'react';
import { Switch } from "react-router";
import { BrowserRouter } from 'react-router-dom';
import Container from "@material-ui/core/Container"
import Fade from "@material-ui/core/Fade"
import Paper from "@material-ui/core/Paper"

import { makeStyles } from '@material-ui/core/styles';


import { NavBar } from '../components/NavBar';
import { AllRoutes } from '../routes';


const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(2),
    overflow: 'auto',
    height: `calc(100vh - ${theme.spacing(13)}px)`,
    padding: theme.spacing(4),
    opacity: '98%',
  }
}))

const MainContent: React.FC = () => {
  const classes = useStyles();
  return (
    <Container maxWidth='lg'>
      <Paper className={classes.container} elevation={2}>
        <Fade in>
          <Switch>
            {AllRoutes}
          </Switch>
        </Fade>
      </Paper>
    </Container>
  )
}


export const DefaultLayout: React.FC = () => {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <NavBar />
      <MainContent />
    </BrowserRouter>
  )
}