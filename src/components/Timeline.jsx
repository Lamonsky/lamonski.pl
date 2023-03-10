import React from "react";
import timeline from "./data/timeline";
import TimelineItem from "./TimelineItem";
import Title from "./Title";

function Timeline(){
    return(
        <div className="flex flex-col md:flex-row justify-center my-5">
            <div className="w-full md:w-7/12">
                <Title>Doświadczenie</Title>
                {timeline.map(item => (
                   <TimelineItem 
                       year={item.year}
                       title={item.title}
                       duration={item.duration}
                       details={item.details}
                       company={item.company}
                   />
                ))}    
             </div>                   
        </div>
    )
}

export default Timeline;