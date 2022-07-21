import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

import "./App.css";
import { Song as SongComponent } from "./Song";
import { TrendingSongsResponse } from "./types/Types";

const App = () => {
  const [songs, setSongs] = useState<TrendingSongsResponse>([]);

  const fetchTrendingSongs = useCallback(async () => {
    const result = await (
      await axios.get<TrendingSongsResponse>(
        "https://api-stg.jam-community.com/song/trending"
      )
    ).data;

    setSongs(result);
  }, []);

  useEffect(() => {
    fetchTrendingSongs();
  }, []);

  return (
    <div className="App">
      <ul>
        {songs.map((song) => (
          <SongComponent song={song} playSong={(id: string) => {}} />
        ))}
      </ul>
    </div>
  );
};

export default App;
