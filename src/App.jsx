import Sidebar from './Sidebar';
import Header from './Header';

const App = () => {
    return <div className='h-[100vh] grid grid-rows-2'>
        <Header></Header>
        <Sidebar styles="bg-red-500"></Sidebar>
    </div>
}

export default App;
