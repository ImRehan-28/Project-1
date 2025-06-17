import { HiUsers } from 'react-icons/hi';
import { ImTree } from 'react-icons/im';
const CourseCard = ({ cardData, currentcard, setcurrcard }) => {

    console.log("cardData", cardData);
    console.log("currentcard", currentcard)
    console.log("setcurrcard", setcurrcard)
    return (
        <div className={`w-[360px] bg-richblack-800 h-[300px] ${currentcard === cardData?.heading ? "bg-white shadow-[12px_12px_0_0] shadow-yellow-50": "bg-richblack-800"}  text-richblack-25 box-border cursor-pointer`} onClick={()=>setcurrcard(cardData?.heading)}>

            <div className='p-6 border-b-[2px] border-dashed text-richblack-400 h-[80%]'>
                <div className={`${currentcard===cardData?.heading && "text-richblack-800"}  mb-3 text-[20px] font-semibold`}>{cardData.heading}</div>
                <div className='text-richblack-400'>{cardData.description}</div>
            </div>
            
            <div className={`flex py-3 gap-2 px-6 ${currentcard === cardData?.heading ? "text-blue-300" : "text-richblack-300"} font-medium justify-between`}>
            
                <div className='flex items-center gap-2'>
                    <HiUsers />
                    <p>Beginner</p>
                </div>
            
                <div className='flex items-center gap-2'>
                    <ImTree />
                    <p>{cardData.lessionNumber}Lesson</p>
                </div>
            
            </div>

        </div>
    )
}

export default CourseCard
