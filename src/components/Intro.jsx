import React from "react";

function Intro(){
    return(
        <div className="flex items-center justify-center flex-col text-center pt-20">
            <h1 className="text-4xl md:text-7x1 dark:text-white mb-1 md:mb-3 font-bold ">Damian Lamonski</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Informatyk, początkujący programista oraz Web Developer</p>
            <div className="flex flex-col md:flex-row">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <img 
                        src="/assets/autoportret.jpg"
                        className="sm:justify-self-center object-contain h-96 w-192 lg:justify-self-right sm:relative"
                    />
                    <div 
                        className="flex m-auto text-md font-bold"
                    >
                                Jestem {new Date().getFullYear() - 1997}-letnim informatykiem szkolącym się w kierunku programisty oraz Web Developera. Większość aplikacji które piszę rozwiązuje problemy które w danym momencie potrzebuję rozwiązać, bądź które podpatrzyłem jako boty do różnych aplikacji i chciałem spróbować swoich sił i spróbować coś podobnego od podstaw. Dopiero od niedawna założyłem własnego GitHuba, jednak z czasem będą pojawiać się tam kolejne projekty. 
                        </div>
                </div>
            </div>

        </div>
    )
}

export default Intro;
