export default function Title() {

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  // };

  return (
    <>
      <label htmlFor="artist-name">
        Artist Name
      </label>

      <form>

        <input
          // name="artistName"
          type="text" 
          placeholder="Dawn of the Squid" 
          id="artist-name" 
        />

        {/* <button type="submit">Submit</button> */}

      </form>      
      
    </>
  );
}
