import { createContext, useEffect, useState } from "react";
import { findHeroes } from "../api/heroes";
import { Heroe } from "../interface/heroe.interface";

interface HeroeContextValue {
    heroes: Heroe[],
    heroe: Heroe,
    page: string,
    searchHeroes: (search: string) => Promise<void>
    changeShowForHeroes: (_id: string) => void
    changePage: (page: string) => void
}

enum PAGE {
    SEARCH = "SEARCH",
    PROFILE = "PROFILE",
    DESTROY = "DESTROY",
    CREATE = "CREATE"
}

export const HeroeContext = createContext<HeroeContextValue>({
    heroes: [],
    heroe: {} as Heroe,
    page: PAGE[PAGE.SEARCH],
    changeShowForHeroes: (_id: string) => { },
    searchHeroes: async () => {
        throw new Error("searchHeroes() not implemented");
    },
    changePage: (_page: string) => { }
})

interface Props {
    children: React.ReactNode
}

export const HeroeProvider: React.FC<Props> = ({ children }) => {

    const [heroes, setHeroes] = useState<Heroe[]>([])
    const [heroe, setHeroe] = useState<Heroe>({} as Heroe)
    const [page, setPage] = useState<string>(PAGE[PAGE.SEARCH])

    useEffect(() => {
    }, []);

    const searchHeroes = async (search: string) => {

        const heroesResponse = await findHeroes(search)

        heroesResponse.map((item: Heroe) => {
            item.show = true;
            item._id += Math.floor(Math.random() * 1000)
            return item
        })

        setHeroes([...heroesResponse])

    }

    const changeShowForHeroes = (_id: string) => {

        heroes.map((item: Heroe) => {
            if (item._id == _id) {
                setHeroe(item)
            }
            return item
        })

        setPage(PAGE[PAGE.PROFILE])
    }

    const changePage = (page: string) => {
        setPage(page)
    }

    return (
        <HeroeContext.Provider
            value={{
                heroes,
                searchHeroes,
                changeShowForHeroes,
                page,
                heroe,
                changePage
            }}
        >
            {children}
        </HeroeContext.Provider>
    )
}