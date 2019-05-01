import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Divider } from '@material-ui/core';
//import WeightMeasurementDate from './WeightMeasurementDate'
import {NavLink} from "react-router-dom";
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit'
import { blue, grey, lightBlue } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import WeightMeasurementGraph from './WeightMeasurementGraph';
import moment from 'moment';
import axios from 'axios'
import { URL_STRING } from '../config.js'




const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3
    },
  });

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newMeasurement: 0,
            date: moment(new Date()).format("YYYY-MM-DD"),
            currentMeasurements: [],

        };

      };
    render () {

        const { classes } = this.props;

        return (
        <div className={classes.WeightMeasurement}>
        <Grid container spacing={24}>
            <Grid item xs>
                <Typography variant="h4" gutterBottom component="h2" align="center">
                    Complete Fitness Tracker
                </Typography>
                <Typography variant="subtitle1" gutterBottom component="h4" align="center">
                    Tool for tracking weighltlifting and cardio workouts along with nutrition and weight 
                </Typography>
            </Grid>
        </Grid>
        <Divider/>
        <br/>
        <Grid container spacing={24} justify="center" alignItems="center">
            <Grid item >
            <TextField
                id="standard-name"
                label="New Measurment"
                className={classes.textField}
                value={this.state.newMeasurement}
                onChange={e => this.setState({newMeasurement: e.target.value})}
                margin="normal"
            />
            </Grid>
            <Grid item >
            <TextField
                id="date"
                type="date"
                label="Date"
                value={this.state.date}
                className={classes.textField}
                onChange={e => this.setState({date: e.target.value})}
                margin="normal"
            />
            </Grid>
            <Grid item>
                <Button variant="contained" size="large" color="primary" className={classes.margin} onClick={this.addWeightMeasurement}>
                    Submit
                </Button>
            </Grid>
        </Grid>
        <br/>
        <WeightMeasurementGraph currentMeasurements={this.state.currentMeasurements}/>
       </div>
    );
    }
}

export default withStyles(styles)(Home);