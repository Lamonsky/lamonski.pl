import React from "react";

function Intro(){
    return(
        <div className="flex items-center justify-center flex-col text-center pt-20">
            <h1 className="text-4xl md:text-7x1 dark:text-white mb-1 md:mb-3 font-bold ">Damian Lamonski</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Informatyk, początkujący programista oraz Web Developer</p>
            <p className="text-sm max-w-xl mb-6 font-bold">
                <table class="table-auto border-spacing-2">
                    <tr>
                        <th>
                            <img 
                            src="/assets/autoportret.jpg"
                            className="object-contain h-96 w-192"
                            />
                        </th>
                        <th>
                            <p className="text-sm max-w-xl mb-6 font-bold">
                                Jestem {new Date().getFullYear() - 1997}-letnim informatykiem szkolącym się w kierunku programisty oraz Web Developera. Większość aplikacji które piszę rozwiązuje problemy które w danym momencie potrzebuję rozwiązać, bądź które podpatrzyłem jako boty do różnych aplikacji i chciałem spróbować swoich sił i spróbować coś podobnego od podstaw. Dopiero od niedawna założyłem własnego GitHuba, jednak z czasem będą pojawiać się tam kolejne projekty. 
                            </p>
                        </th>
                    </tr>
                </table>
            </p>

        </div>
    )
}

export default Intro;