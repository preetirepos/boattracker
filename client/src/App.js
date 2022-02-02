import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Boats from './components/Boats/Boats.js';
import Form from './components/Form/Form.js';
import boats from './images/boats.png';
import useStyles from './styles';

const App = () => {
    const classes = useStyles();
    return (
       <Container maxWidth="lg">
           <AppBar className={classes.appBar} position="static" color="inherit">
               <Typography className={classes.heading} variant="h2" align="center">FishFry Tours Boats</Typography>
               <img className={classes.image} src={boats} alt="boats" height="80" />
           </AppBar>
           <Grow in>
               <Container>
                   <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                       <Grid item xs={12} sm={7}>
                          <Boats />
                       </Grid>
                       <Grid item xs={12} sm={4}>
                           <Form />
                       </Grid>
                   </Grid>
               </Container>
           </Grow>
           </Container>
    );
}

export default App;