import './App.css';
import SenadoresList from './SenadoresList.jsx';
function App() {
  return (
    <>
      <div className="flex flex-col justify-center gap-5 ">
        <div><h1 className='text-xl font-bold w-full text-left text-blue-700'>Senado Argentino 2024</h1></div>
        <SenadoresList />
      </div>
    </>
  );
}

export default App;
