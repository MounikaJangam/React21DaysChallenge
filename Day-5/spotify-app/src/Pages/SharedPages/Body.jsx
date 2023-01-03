import React from 'react'
import Header from './Header'
import "./Body.css"
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './SongRow';
import { useDataLayerValue } from '../../DataLayer'


const Body = ({spotify}) => {
  const [{discover_weekly}, dispatch] = useDataLayerValue();
  return (
    <div className='body'>
        <Header spotify={spotify} />

        <div className="body__info">
          <img src={discover_weekly?.images[0].url} alt='Pic' />

          <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
          </div>
        </div>
        <div className="body__songs">
          <div className="body__icon">
            <PlayCircleFilledIcon className='body__shuffle' />
            <FavoriteIcon  fontSize='large' />
            <MoreHorizIcon />
          </div>
          
          {discover_weekly?.tracks.items.map((item) => (
            <SongRow track={item.track} />
        ))}
        </div>
        </div>
  );
}

export default Body