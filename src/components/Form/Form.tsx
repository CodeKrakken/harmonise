import { handleSubmit } from "../../functions/handleSubmit"

export default function Form() {

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
        />
        <button 
          type="button"
          onClick={handleSubmit}
        >Submit</button>
      </form>
      
    </>
  );
}
