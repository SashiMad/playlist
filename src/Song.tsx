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
      data: `id=${song.id}`,
    };

    try {
      const result = await (await axios.request(options)).status;
      if (result >= 200 && result < 300) {
        setLikedSong(true);
      }
    } catch (error) {
      // Add other error handling here
      console.error(error);
    }
  }, [song, likedSong]);

  const handlePlaySong = useCallback(() => {
    playSong(song.id);
  }, [song, playSong]);

  return (
    <li>
      <div className="list-content">
        <img
          className="thumbnail"
          src={song.cover_image_path}
          alt="Album Cover"
        />
        <h3>{song.name}</h3>
        <h4>{song.artist_name}</h4>
        <button
          className={isPlaying ? "button-pause" : "button-play"}
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
