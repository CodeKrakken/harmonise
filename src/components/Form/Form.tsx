import { useState } from "react";
import { handleSubmit } from "../../functions/handleSubmit"

export default function Form() {

  const [artistName, setArtistName] = useState("");
  
  const metadata = {
    inputId     : 'artist-name',
    fieldLabel  : 'Artist Name',
    type        : 'text',
    placeholder : 'Dawn of the Squid',
    buttonText  : 'Submit'
  }

  return (
    <form>

      <label htmlFor={metadata.inputId}>
        {metadata.fieldLabel}
      </label>

      <input 
        type        ={metadata.type}
        placeholder ={metadata.placeholder} 
        id          ={metadata.inputId} 
        onChange    ={e => setArtistName(e.target.value)}
      />

      <button 
        type        ="button"
        onClick     ={() => handleSubmit({artistName})}
      >
        {metadata.buttonText}
      </button>

    </form>
  );
}
