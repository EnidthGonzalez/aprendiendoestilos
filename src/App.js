import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        {/* <div className= 'bg-red-500 text-blue-300'>Hola mundo tailwind</div> 
        //display flex para que queden seguiditos horizontalemnte y si quiero q se separen por columna
        flex-col-- centrar los componentes: items-center justify-center*/ }
          <div className='flex flex-col md:flex-row'>
            <div className='mx-2 bg-green-500'>Elemento1</div>
            <div className='mx-2 bg-red-800'>Elemento2</div>
            <div className='mx-2 bg-purple-400'>Elemento3</div>
            <div className='mx-2 bg-yellow-700'>Elemento4</div>
            {/* <button className='border-2 border-blue-900 p-4 bg-green-200 text-gray-800 hover:bg-pink-500 rounded-lg shadow-lg'>Haz click aqui</button> */}
            <button className='boton'>Haz click aqui</button>
            <button className='boton'>Este es el boton 2</button>
        </div>
    </div>
    
  );
}

export default App;
