import Favorite from './Favorite';
import './Favorites.css';

const Favorites = ({ favorites }) => {
  return (
    <div className='favorite-container'>
      <h2>Mis Favoritos</h2>
      {favorites.map((favorite) => (
        <Favorite key={favorite.id} favorite={favorite} />
      ))}
    </div>
  );
};

export default Favorites;