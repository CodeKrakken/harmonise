export default function Title() {

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
        <button type="button">Submit</button>
      </form>
      
    </>
  );
}
