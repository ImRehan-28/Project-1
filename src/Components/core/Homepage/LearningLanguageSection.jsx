import React from 'react'
import HighlightText from './Highlighttext'
import know_your_progress from "../../../assets/Images/Know_your_progress.png"
import compare_with_others from "../../../assets/Images/Compare_with_others.png"
import CTAButton from "./Button"
import plan_your_lesson from "../../../assets/Images/Plan_your_lessons.png"
const LearningLanguageSection = () => {
  return (
    <div className='mt-[130px] mb-32'>
      <div className='flex flex-col gap-5 items-center'>
        <div className='text-4xl font-semibold text-center'>
          Your Swiss Knife for <HighlightText text={"learning any language"} />
        </div>
        <div className='text-center text-richblack-600 mx-auto text-base w-[70%] font-medium'>
          Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
        </div>

        <div className='flex justify-center items-center mt-5 '>
          <img src={know_your_progress} alt="know your progress" className='object-contain h-[400px] w-[400px] -mr-[120px]'/>
          <img src={compare_with_others} alt="compare with other" className='object-contain w-[450px] h-[500px]'/>
          <img src={plan_your_lesson} alt="plan you lesson" className='object-contain w-[450px] h-[450px] -ml-[120px]'/>
        </div>
        <div className='w-fit'>
          <CTAButton active={true} linkto={"/signup"}>
          <div>
            Learn More
          </div>
          </CTAButton>
        </div>
      </div>
    </div>
  )
}

export default LearningLanguageSection
