import Sidebar from './Sidebar';
import Header from './Header';



const App = () => {
    return <div style={{ fontFamily: "Roboto, Indie Flower, sans-serif" }} className="h-screen grid grid-cols-[1fr_9fr] grid-rows-[1fr_10fr]">
        < Header className='shadow-xl row-start-1 row-end-2 col-start-2 col-end-3' />
        < Sidebar className="row-start-1 row-end-3 col-start-1 col-end-2 bg-red-500" />
    </div >
}

export default App; 
