import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles( (theme ) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
}));

const Homepage = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Typography variant="h4" component="h1">
                Homepage
            </Typography>
        </div>
    );
};


export default Homepage;