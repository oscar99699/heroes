import HeroesSearch from './components/HeroesSearch'
import HeroesList from './components/HeroesList'
import HeroesShow from './components/HeroesShow'
import { HeroeProvider } from './context/HeroeContext'
import BackToSearch from './components/BackToSearch'


function App(){
    return (
        <div className='bg-zinc-900 h-screen  text-white flex items-center justify-center'>
            <div className='bg-gray-950 p-4 w-2/5 h-screen flex flex-col'>
                <HeroeProvider>
                    <HeroesSearch></HeroesSearch>
                    <HeroesList></HeroesList>
                    
                    <BackToSearch></BackToSearch>
                    <HeroesShow></HeroesShow>
                </HeroeProvider>
            </div>
        </div>
    )
}

export default App