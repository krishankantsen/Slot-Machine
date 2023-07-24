import logo from './logo.svg';
import './App.css';
import Slot from './Slot'
const emojis = [
  "😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊" 
  ];


function generateRandomEmoji() {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
}
const rx = generateRandomEmoji();
const ry = generateRandomEmoji();
const rz = generateRandomEmoji();
const sx = generateRandomEmoji();
const sy = generateRandomEmoji();
const sz = generateRandomEmoji();
const tx = generateRandomEmoji();
const ty = generateRandomEmoji();
const tz = generateRandomEmoji();

const App =() =>{
  
    const reloadPage = () => {
      window.location.reload()
    }
  return (
    <>
    <h1 className='hst'>🎰Welcome to <span style={{fontWeight:'bold',color:'red'}}>Slot Machine</span> Game 🎰 </h1>
    <div className='slot-outer'>
    <Slot x={rx} y={ry} z={rz} />
    <Slot x={sx} y={sy} z={sz} />
    <Slot x={tx} y={ty} z={tz} />
    <button onClick={reloadPage} className='sb'>SPIN</button>
    
    </div>
    </>
  );
}

export default App;
