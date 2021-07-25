import react, {useState} from 'react';
import {Grid,
        AppBar,
        Paper,
        Typography,
        TextField,
        FormControlLabel, 
        Button,
        Checkbox} 
        from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import React from 'react';
import ImageUpload from './ImageUpload';


const useStyles = makeStyles(theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)] : {
            width: 800,
            marginLeft: 'auto',
            marginRight: 'auto'
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    }
}));


const CreateListing = props => {
    const classes = useStyles();

    const defaultListing = {
        'id':          '',
        'name':        '',
        'description': '',
        'cost':        0,
        'image':       undefined,
        'tags':        ''
    };

    const [listing, updateListing] = useState(defaultListing);

    const handleChange = e => {
        const {name, value} = e.target;
        console.log(value);
        updateListing(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        // POST to server
    };

    return (
        <form autoComplete='off'>
            <React.Fragment>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography component='h1' variant='h4' align='left'>
                            Create a Lisiting
                        </Typography>
                        <Grid container spacing={1} justify='center'>
                            <TextField
                                required
                                id='listingName'
                                value={listing.name}
                                onChange={handleChange}
                                name='name'
                                placeholder='Enter a Listing Title'
                                label='Listing Title'
                                fullWidth>
                            </TextField>

                            <ImageUpload updateListing={updateListing} listing={listing}/>

                            <TextField
                                required
                                id='listingDescription'
                                value={listing.description}
                                onChange={handleChange}
                                name='description'
                                placeholder='Enter an Item description'
                                label='Listing Description'
                                fullWidth
                                multiline
                                rows={8}
                                rowsMax={8}>
                            </TextField>
                            
                            <TextField
                                required
                                id='listingCost'
                                value={listing.cost}
                                onChange={handleChange}
                                type='number'
                                name='cost'
                                placeholder='100'
                                label='Price'>
                            </TextField>

                            <TextField
                                required
                                id='listingTags'
                                value={listing.tags}
                                onChange={handleChange}
                                name='tags'
                                label='Tags'
                                fullWidth>
                            </TextField>

                            <Button variant='contained'> Create Listing </Button>
                        </Grid>
                    </Paper>
                </main>
            </React.Fragment>
        </form> 
    );
}

export default CreateListing;