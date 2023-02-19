import React from "react";
import { FaGithubSquare, FaLinkedinIn} from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'

function Footer(){
    return(
        <div className="py-5 text-center">
            <div className="container max-w-screen-lg mx-auto">
					<div>
						<div className="flex flex-wrap justify-center gap-2">
							<a
							className="text-3xl" 
							href="https://www.linkedin.com/in/damian-lamonski"> 		 
								<FaLinkedinIn />
							</a>
							<a 
							className="text-3xl"
							href="https://www.github.com/Lamonsky">
								<FaGithubSquare />	
							</a>
							<a 
							className="text-3xl"
							href="mailto: damian@lamonski.pl"><IoMail /></a>
						</div>
					</div>
				</div>
            <p className="text-sm mt-2 opacity-50">
                &copy; {new Date().getFullYear()} Damian Lamonski. Wszystkie prawa zastrzeżone. 
            </p>
        </div>
    )
}

export default Footer;