import { useHeroes } from "../context/useHeroes";
import { destroyUniverse } from "../api/heroes";

function HeroesShow() {

    const { heroe, page } = useHeroes()

    if (page != "PROFILE") return null


    const destoyUniverse = async () => {

        if (confirm("Quieres usar el Guantelete?") == true) {
            await destroyUniverse();
            alert("Haz destruido al universo entero (base de datos) , no sólo a la mitad, bye")
            location.reload();
        }

    }


    if (heroe.name == "Thanos") {
        return (
            <div >
                <section className=" mt-5 ">

                    <section className="w-full mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">

                        <div className="mt-6 w-fit mx-auto" onClick={() => destoyUniverse()}>
                            <img src="https://www.pngall.com/wp-content/uploads/5/Thanos-Hand-PNG-Image-File.png"
                                className="rounded-full w-28 " alt="profile picture" srcset="" />
                        </div>

                        <div className="mt-8 ">
                            <h2 className="text-white font-bold text-2xl tracking-wide">Guantelete de Thanos , (No lo uses!!!)</h2>
                        </div>

                    </section>


                </section>
            </div>
        )
    }


    return (
        <div>
            <section className=" animate-fade-down animate-duration-5000 mt-5 ">

                <section className="w-full mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">

                    <div className="mt-6 w-fit mx-auto">
                        <img src={heroe.images.md} className=" animate-fade-right animate-duration-[2000ms] rounded-full w-28 " alt="profile picture" srcset="" />
                    </div>

                    <div className="mt-8 ">
                        <h2 className="text-white font-bold text-2xl tracking-wide">{heroe.name}</h2>
                    </div>
                    <p className="text-emerald-400 font-semibold mt-2.5" >
                        {heroe.biography.fullName}
                    </p>


                    {
                        Object.keys(heroe.powerstats).map((key) => [key, heroe.powerstats[key]]).map((stat) => (
                            <>
                                <div className="h-1 w-full bg-black mt-8 rounded-full">
                                    <div className="h-1 rounded-full w-95px bg-yellow-500 "></div>
                                </div>

                                <div className="mt-3 text-white text-sm">
                                    <span className="text-gray-400 font-semibold"> {stat[0]} </span>
                                    <span> {stat[1]}%</span>
                                </div>
                            </>
                        ))
                    }


                </section>


            </section>
        </div>
    )
}

export default HeroesShow;