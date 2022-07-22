import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

import "./App.css";
import { Song as SongComponent } from "./Song";
import { TrendingSongsResponse } from "./types/Types";

const App = () => {
  const [songs, setSongs] = useState<TrendingSongsResponse>([]);
  const [playingSong, setPlayingSong] = useState<string | undefined>(undefined);
  const [audio, setAudio] = useState<HTMLAudioElement | undefined>(undefined);

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
  }, [fetchTrendingSongs]);

  const handlePlaySong = useCallback(
    (id: string) => {
      if (id === playingSong) {
        audio?.pause();
        setPlayingSong(undefined);
      } else {
        const songToPlay = songs.find((song) => song.id === id);
        if (songToPlay) {
          const audioToPlay = new Audio(songToPlay.music_file_path);
          setAudio(audioToPlay);
          audioToPlay.play();
          setPlayingSong(id);
        }
      }
    },
    [songs, playingSong, audio]
  );

  return (
    <div className="App">
      <ul>
        {songs.map((song) => (
          <SongComponent
            key={song.id}
            song={song}
            playSong={handlePlaySong}
            isPlaying={song.id === playingSong}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
