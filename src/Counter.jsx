import { useState } from "react";
import './Styles.css';
import { IconButton } from '@mui/material';

export function Counter(){
    let [Like , setLike] = useState(0)
    let [Dislike, setDislike] = useState(0)

    const incrementLike =()=>setLike(Like+1);
    const incrementDislike =()=>setDislike(Dislike+1);
    return(
      <div className="counter">
        <IconButton aria-label="Like" color="primary" onClick={incrementLike}>
        👍{Like}
        </IconButton>
        <IconButton aria-label="Like" color="primary" onClick={incrementDislike}>
        👎{Dislike}
        </IconButton>
      </div>
    )
}