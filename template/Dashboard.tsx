import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { Copyright } from './Copyright';
import { TAppBar } from './TAppBar';
import { TDrawer } from './TDrawer';
import TSnackbar from './TSnackbar';
import { useDispatch, useSelector } from "react-redux"
import {
  getITSnackbarSelector,
  getLoaderSelector,
  getAlertSelector
} from "./store/template.selector"
import { getTombola } from 'components/tombola/store/tombola.actions';
import { getCartelle } from 'components/cartelle/store/cartelle.actions';
import { setAlert } from './store/template.store';
import Loader from './Loader';
import TAlert from './TAlert';
import { Color } from '@material-ui/lab';
import { IAlert } from '../interface/alert.interface';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export const Dashboard: React.FC = (props) => {

  const { children } = props;
  const dispatch = useDispatch()

  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  // leggo dallo state del template le informazioni del componente 
  // <TSnackbar> 
  const ITSnackbar = useSelector(getITSnackbarSelector)
  const ILoader = useSelector(getLoaderSelector)
  const IAlert = useSelector(getAlertSelector)

  useEffect(() => {
    // test apertura <TSnackbar>
    //dispatch(setTSnackbar({ open: true, message: "prova" } as ITSnackbar))
    dispatch(getTombola());
    dispatch(getCartelle());
  }, [])

  return (
    <div className={classes.root}>
      <Loader show={ILoader.show} progress={ILoader.progress}/>
      <TAlert message={IAlert.message} open={IAlert.open} severity={IAlert.severity as Color}
        showTime={3000} onClose={() => dispatch(setAlert({ open: false } as IAlert))} />
      <TSnackbar
        open={ITSnackbar.open}
        message={ITSnackbar.message}
        autoHideDuration={ITSnackbar.autoHideDuration}
      />
      <CssBaseline />
      <TAppBar handleDrawerToggle={handleDrawerToggle} open={open} />
      <TDrawer handleDrawerToggle={handleDrawerToggle} open={open} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {children}
          {/*
          <Grid container spacing={3}>
              <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                CHART
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
          */}
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
