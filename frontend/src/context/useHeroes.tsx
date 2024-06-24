import { useContext } from "react"
import { HeroeContext } from './HeroeContext'


export const useHeroes = () => {

    const context  = useContext(HeroeContext);

    if(!context) throw new Error('useHeroes must be within a HeroesProvider')

    return context

}