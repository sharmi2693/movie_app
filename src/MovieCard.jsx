import './Styles.css';
import { Counter } from './Counter';
import { useState } from 'react';
import { IconButton } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

export function MovieCard(props) {
    const [show, setShow] = useState(true);
    const ratingStyles = {
        color: props.rating >= 8.5 ? "green" : "red"
    }
    return (
        <div className='movie-container'>
            <Card>
                <img className='movie-poster' src={props.poster} alt={props.alt} />
            <CardContent>
                <div className='movie-spec'>
                <h2 className='movie-name'>{props.index + 1}.{props.name}</h2>
                <IconButton color='primary' aria-label='Toggle-Description' onClick={() => setShow(!show)}>
                    {show ? <ExpandLessIcon fontSize="large" /> : <ExpandMoreIcon fontSize="large" />}
                </IconButton>
                <IconButton color='primary' aria-label='Movie-Info'>
                    <InfoIcon fontSize="medium"/>
                </IconButton>
                <h3 style={ratingStyles} className='movie-rating'>⭐{props.rating}</h3>
                
            </div>
            </CardContent>
            
            {show ? <p className='movie-summary'>{props.summary}</p>:null}
            
            <CardActions>
                <Counter />
            </CardActions>
            </Card>
        </div>
    )
}