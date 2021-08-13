import React from 'react'
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCalendarAlt, faBookOpen, faStar, faChevronLeft, faChevronRight, faAppStore } from '@fortawesome/free-solid-svg-icons';

export default function Dashboard(props) {
    const data = props.data;
    return (
        <div className="flex flex-col flex-wrap overflow-hidden bg-gray-200 h-full content-around items-center p-3">

            <Paper className="w-full overflow-hidden p-4 m-1 mt-3 ">
                <span className="text-blue-400 font-sans font-bold"><FontAwesomeIcon icon={faCalendarAlt}/> Rhyme this word?</span>
                <p className="font-bold text-blue-400 font-sans font-medium text-center p-4 text-4xl">Crayons</p>
                <div className="text-blue-400 font-sans text-center pt-4">← Next Word →</div>
            </Paper>

            <Paper className="w-full overflow-hidden p-4 m-1 m-3">
                <span>
                    <p className="text-blue-400 font-sans font-bold float-left"><FontAwesomeIcon icon={faClock}/> Recent Lyrics</p>
                    <p className="text-blue-400 font-sans text-right ">See All</p>
                </span>
                
                <div className="text-indigo-400 font-sans text-left p-3 m-3 text-3xl font-bold">Weigh off what they lay on, up your nose like crayons</div>
            </Paper>

            <Paper className="w-full overflow-hidden p-4 m-3  content-center align-center justify-left flex flex-wrap  overflow-hidden">
               <div className="friends rounded-full w-1/6 "/>
               <div className="items-start  overflow-hidden text-left content-center align-center justify-center">
               <p className="align-center text-left font-sans font-bold justify-center self-center text-gray-500">Invite Friends</p>
               <p className="align-center text-left justify-center self-center font-sans text-gray-400">Share the app with other writers.</p>
               </div>
            </Paper>

            <div className="w-full flex flex-wrap m-3 overflow-hidden">
                <button className="border-2 border-white w-1/2 overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2  p-2 bg-blue-600 rounded text-white justify-center font-sans text-center  self-center"><FontAwesomeIcon icon={faCalendarAlt}/> Slang Dictionary</button>
                <button className="border-2 border-white w-1/2 overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2  p-2 bg-blue-600 rounded text-white justify-center font-sans text-center  self-center"><FontAwesomeIcon icon={faCalendarAlt}/> Word Pairs</button>
            </div>

            <Paper className="w-full overflow-hidden p-4 m-3">
            <div className="inline-flex justify-center align-center content-center">
                <div className="justify-center align-center content-center">
                    <img className="h-14 m-3" alt="img" src="https://image.flaticon.com/icons/png/128/4893/4893149.png"/>
                </div>
                <div className="">
                    <p className="align-center text-left font-sans font-bold justify-center self-center text-gray-500">Rate App</p>
                    <p className="align-center text-left justify-center self-center font-sans text-gray-400">Rate and help us make a better app!</p>
                    <span>
                        <FontAwesomeIcon style={{color: "var(--icon-gray)"}} icon={faStar}/>
                        <FontAwesomeIcon style={{color: "var(--icon-gray)"}} icon={faStar}/>
                        <FontAwesomeIcon style={{color: "var(--icon-gray)"}} icon={faStar}/>
                        <FontAwesomeIcon style={{color: "var(--icon-gray)"}} icon={faStar}/>
                        <FontAwesomeIcon style={{color: "var(--icon-gray)"}} icon={faStar}/>
                    </span>
                </div>
            </div>
            </Paper>
        </div>
    )
}


