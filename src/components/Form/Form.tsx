import { useState } from "react";
import { handleSubmit } from "../../functions/handleSubmit"

export default function Form() {

  const [artistName, setArtistName] = useState("");

  return (
    <>
      <form>
        <label htmlFor="artist-name">
          Artist Name
        </label>      
        <input 
          type="text" 
          placeholder="Dawn of the Squid" 
          id="artist-name" 
          onChange={e => setArtistName(e.target.value)}
        />
        <button 
          type="button"
          onClick={() => handleSubmit({artistName})}
        >
          Submit
        </button>
      </form>
      
    </>
  );
}
