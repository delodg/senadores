import './App.css';
import SenadoresList from './CardSenador.jsx';
function App() {
  return (
    <>
      <div className="flex flex-col justify-center ">
        <div><h1 className='text-xl font-bold'>Senadores Argentinos 2024</h1></div>
        <SenadoresList />
      </div>
    </>
  );
}

export default App;
