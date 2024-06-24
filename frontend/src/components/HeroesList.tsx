import { useHeroes } from "../context/useHeroes";
import { blackHole,createUniverse } from "../api/heroes";
import { useEffect, useState } from "react";

function HeroesList() {

    const { heroes,changeShowForHeroes,page } = useHeroes();

    const [isDestroy,setIsDestroy] = useState(false)

    useEffect(() => {

        const checkBlackHole = async () => {
            const data : any = await blackHole();
            setIsDestroy(data.total==0)
        }

        checkBlackHole()

    }, [])

    const saveUniverse = async () => {

        if (confirm("Quieres usar esta rosa?") == true) {
            await createUniverse();
            alert("haz salvado al universo!!(se volvio a crear la base de datos de MongoDB)")
            location.reload();
        } 

    }

    if(page!="SEARCH") return null

    if(isDestroy){
        return (
            <>
                 <div className="flex flex-wrap m-5 justify-center font-bold">
                    <h6 className="animate-bounce ">No Existe el Universo</h6>
                </div>
                <figure onClick={()=>saveUniverse()}
                        className=" animate-jump-in m-3 max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" 
                        >
                        <a href="#">
                            <img className="rounded-lg" src="https://images.freeimages.com/images/large-previews/76b/rose-1396237.jpg" alt="image description" />
                        </a>
                    </figure>
            </>
           
                      
        )
    }

    if(heroes.length==0) return (
        <div className="flex flex-wrap m-5 justify-center font-bold">
            <h6 className="animate-bounce ">No existe ningun Hero con ese nombre!!</h6>
        </div>
    )

    const handleClick = (_id:string) => {
        changeShowForHeroes(_id)
    }

    return (
        <div>
        <div className="flex flex-wrap m-5 justify-center">
            {heroes.map((heroe) => (
                    <figure onClick={() => handleClick(heroe._id)} key={heroe._id} 
                        className={heroe.show? " animate-jump-in m-3 max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" : 
                            "animate-jump-out  animate-duration-10000 m-3 max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" }
                        >
                        <a href="#">
                            <img className="rounded-lg" src={heroe.images.sm} alt="image description" />
                        </a>
                        <figcaption className="absolute px-4 text-lg text-white bottom-6">
                            <p>{heroe.name}</p>
                        </figcaption>
                    </figure>
            ))}
        </div>
        </div>
    )
}

export default HeroesList