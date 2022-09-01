import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import type { IChirp } from '../utils/interfaces';


const ChirpCard: React.FC<ChirpCardProps> = ({chirp}) => {

    const history = useNavigate();
    const handleListClick = () => history(`/details/${chirp.id}`);
    

    return (
        <li onClick={handleListClick} className="list-group-item py-2">
            <h4>@{chirp.username}</h4>
            <hr/>
            <p>{chirp.message}</p>
            <hr />
            <small className="text muted pr-12">{chirp.location}</small>
            
            <div><small className="text muted pl-12">{chirp.created_at}</small></div>
        </li>
    );
};

interface ChirpCardProps {
    chirp: IChirp
}

export default ChirpCard;
