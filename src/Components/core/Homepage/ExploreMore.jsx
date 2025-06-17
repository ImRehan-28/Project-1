import React, { useState } from 'react'
import { HomePageExplore } from "../../../data/homepage-explore.js"
import HighlightText from './Highlighttext';
import CourseCard from './CourseCard.jsx';
const tabName = [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths",
]

const ExploreMore = () => {

    const [currtab, setcurrtab] = useState(tabName[0]);
    const [courses, setcourses] = useState(HomePageExplore[0].courses);
    const [currentcard, setcurrcard] = useState(HomePageExplore[0].courses[0].heading)

    const setMyCards = (value) => {
        setcurrtab(value);
        const result = HomePageExplore.filter((course) => course.tag === value);
        setcourses(result[0].courses);
        setcurrcard(result[0].courses[0].heading);
    };
    return (
        <div>
            <div className='text-4xl font-semibold text-center'>
                Unlock The
                <HighlightText text={"Power of Code"} />
            </div>
            <p className='text-center text-richblack-300 text-sm text-[16px] mt-2'>
                Learn to build anything you can imagine
            </p>

            <div className='mt-5 flex rounded-full bg-richblack-800 mb-5 border-richblack-100 px-2 py-1 gap-[5px]'>
                {
                    tabName.map((element, index) => {
                        return (
                            <div className={`text-[16px] flex items-center  ${currtab === element ? "bg-richblack-900 text-richblack-5 font-medium" : "text-richblack-200"} rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5 px-5 py-2`} key={index} onClick={() => setMyCards(element)}>
                                {element}
                            </div>
                        )
                    })
                }
            </div>
            <div className='lg:h-[150px]'></div>

            <div className='absolute flex gap-10 justify-between w-full translate-x-[-25%] translate-y-[-42%]'>
                {
                    courses.map((element,index) => {
                        return (
                            <CourseCard key={index}
                                cardData={element}
                                currentcard={currentcard}
                                setcurrcard={setcurrcard} />
                        )
                    })
                }
            </div>
        </div>
    )
}
export default ExploreMore