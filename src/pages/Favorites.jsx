import React, { useState, useEffect } from 'react';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import Header from '../components/Header';

function Favorites() {
  const [removeLoader, setRemoveLoader] = useState(false);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      setRemoveLoader(true);
      const favoriteSongs = await getFavoriteSongs();
      setFavorites(favoriteSongs);
      setRemoveLoader(false);
    };
    fetchFavorites();
  }, []);

  useEffect(() => {
    const updateFavorites = async () => {
      const newFavorites = await getFavoriteSongs();
      setFavorites(newFavorites);
    };
    updateFavorites();
  }, [favorites]);

  return (
    <div>
      <Header />
      <div data-testid="page-favorites">
        { removeLoader && <Loading />}
        {favorites.map((song) => (
          <MusicCard
            key={ song.trackId }
            trackId={ song.trackId }
            trackName={ song.trackName }
            previewUrl={ song.previewUrl }
            song={ song }
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
