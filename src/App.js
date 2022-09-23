import { useEffect, useState } from 'react';
import './App.css';
import Palettes from './components/Palette/Palettes';
import Tags from './components/Tag/Tags';
import { getColorPalettes, getTags } from './service';
import Favorite from './components/Favorite/Favorite';
import Palette from './components/Palette/Palette';
import Favorites from './components/Favorite/Favorites';
import {FavoritesContext} from './contex/FavoriteContex'

function App() {
  const [colorPalettes, setColorPalettes]= useState([])
  const [tags, setTags]= useState([])
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    getColorPalettes()
      .then((data) => {
        setColorPalettes(data);
        setFavorites((data) => data.filter((palette) => palette.liked));
      })
      .catch((err) => console.log(err));

    getTags()
      .then((data) => setTags(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <FavoritesContext.Provider value={{favorites, setFavorites}}>
     <div className="App">
        <header>
          <h1>Color Palette Proyect</h1>
        </header>
        <div className='main-conteiner'>
          <Tags tags={tags} /> 
          <Palettes palettes = {colorPalettes} />
          <Favorites favorites={favorites}/>
        </div>
      </div>
    </FavoritesContext.Provider>
  );
}

export default App;
