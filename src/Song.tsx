import axios from "axios";
import React, { useCallback, useState } from "react";
import { TrendingSong } from "./types/Types";

const Song: React.FC<{
  song: TrendingSong;
  isPlaying?: boolean;
  playSong: (id: string) => void;
}> = ({ song, isPlaying = false, playSong }) => {
  const [likedSong, setLikedSong] = useState(false);

  const handleLikeSong = useCallback(async () => {
    if (likedSong) return;

    const options = {
      method: "POST",
      url: "https://api-stg.jam-community.com/interact/like",
      params: { apikey: "___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8" },
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: { id: "f93b2ffd-cafe-11ec-ae5d-022ed69f96e6" },
    };

    try {
      const result = await (await axios.request(options)).status;
      if (result > 200 && result < 300) {
        setLikedSong(true);
      }
    } catch (error) {
      // Add other error handling here
      console.error(error);
    } finally {
      // Hack to have the liked button turn on
      setLikedSong(true);
    }
  }, [song, likedSong]);

  const handlePlaySong = useCallback(() => {
    playSong(song.id);
  }, [song, playSong]);

  return (
    <li>
      <div className="list-content">
        <img className="thumbnail" src={song.cover_image_path} />
        <h3>{song.name}</h3>
        <h4>{song.artist_name}</h4>
        <button
          className={isPlaying ? "button-play" : "button-pause"}
          onClick={handlePlaySong}
        ></button>
        <button
          className={likedSong ? "button-saved" : "button-save"}
          onClick={handleLikeSong}
        ></button>
      </div>
    </li>
  );
};

export { Song };
