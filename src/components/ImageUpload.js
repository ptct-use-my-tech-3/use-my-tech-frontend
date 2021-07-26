import { CardContent, CardMedia, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
    img: {
        width: 'auto',
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)] : {
            width: 300,
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    }
}));

const ImageUpload = props => {
    const classes = useStyles();

    const handleUploadClick = e => {
        e.preventDefault();
        props.updateListing({
            ...props.listing,
            image: URL.createObjectURL(e.target.files[0])
        })
    };

    return (
        <React.Fragment>
            <CardContent>
                <Grid direction='column'>
                    <input
                    accept='image/*'
                    id='contained-button-file'
                    name='image'
                    multiple
                    type='file'
                    onChange={handleUploadClick}
                    />

                    <CardMedia>
                        <Paper>
                            <img className={classes.img} src={props.listing.image}/>
                        </Paper>
                    </CardMedia>
                </Grid>
            </CardContent>
        </React.Fragment>
    );
}

export default ImageUpload;