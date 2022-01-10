import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

import { makeStyles  } from '@material-ui/core/styles'

const useStyles = makeStyles( (theme ) => ({
    header: {
        '& > *': {
            margin: theme.spacing(0),
            marginBottom: '10px',
            borderRadius: '4px'
        },
    },
}))

const Header = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.header}>
            <div className="bg-black">
                <Link to={"/"}>
                    <Button variant="outlined"> Home </Button>
                </Link>
                <Link to={"quiz"}>
                    <Button variant="outlined"> Start a Quiz </Button>
                </Link>
            </div>
        </div>
    );
}

export default Header;