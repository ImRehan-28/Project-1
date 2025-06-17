import React from 'react'
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import timelineImage from "../../../assets/Images/TimelineImage.png"
const timeline = [
    {
        Logo: Logo1,
        heading: "Leadership",
        Description: "Fully commited to the success company",
        con:"true",
    },
    {
        Logo: Logo2,
        heading: "Leadership",
        Description: "Fully commited to the success company",
        con:"true",
    },
    {
        Logo: Logo3,
        heading: "Leadership",
        Description: "Fully commited to the success company",
        con:"true",
    },
    {
        Logo: Logo4,
        heading: "Leadership",
        Description: "Fully commited to the success company",
        con:"false",
    },
];

const TimeLineSection = () => {
    return (
        <div className=''>
            <div className='flex flex-row gap-20 items-center w-[90%] mx-auto'>
                <div className='w-[45%] flex flex-col gap-5'>
                    {
                        timeline.map((element, index) => {
                            return (
                                <div key={index} className='flex flex-col'>
                                    <div className='flex flex-row gap-6 bg-[#F9F9F9]' key={index}>
                                        <div className='w-[50px] h-[50px] flex items-center bg-[#FFFFFF]
                                        justify-center rounded-full'>
                                            <img src={element.Logo}/>
                                        </div>
                                        <div>
                                            <h2 className='font-semibold text-[18px]'>{element.heading}</h2>
                                            <p className='text-base'>{element.Description}</p>
                                        </div>
                                    </div>
                                    <div className={`h-[3rem] w-0 border mt-2 ml-6 ${element.con === "true"?"border-richblack-100":"hidden"}`}></div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='relative shadow-blue-200'>
                    <img src={timelineImage} alt="timeLineImage" className='shadow-white object-cover h-fit'/>

                    <div className='absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-6 left-[50%] translate-x-[-50%] translate-y-[-50%] w-9/12'>
                        
                        <div className='flex flex-row items-center border-r border-caribbeangreen-300 px-7 gap-3'>
                            <p className='text-3xl font-bold'>10</p>
                            <p className='text-caribbeangreen-300 text-sm'>Years of Experience</p>
                        </div>

                        <div className='flex gap-5 items-center px-7'>
                            <p className='text-3xl font-bold'>250</p>
                            <p className='text-caribbeangreen-300 text-sm'>Types of course</p>
                        </div>

                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default TimeLineSection
