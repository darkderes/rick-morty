
export default function Characters(props) {
  const {characters,setCharacters} = props; 

  const resetCharacther = () => {
    setCharacters(null)
  }
  return (
    <div className="characters">
        <h2>Characters</h2>
        <span className="back-home" onClick={resetCharacther}>Volver a Home</span>
        <div className='container-characters'>
            {
            characters.map((character, index) => (
                <div key={index} className='character-container'>
                <img src={character.image} alt={character.name} />
                <h3>{character.name}</h3>
              
                </div>
            ))
            }
        </div>
    </div>
  )
}
