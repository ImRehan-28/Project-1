import React from 'react'
import { Link } from 'react-router'
import { FaArrowRight } from "react-icons/fa"
import HighlightText from '../Components/core/Homepage/Highlighttext'
import CTAButton from '../Components/core/Homepage/Button'
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from '../Components/core/Homepage/CodeBlocks'
import TimeLineSection from '../Components/core/Homepage/TimeLineSection'
import LearningLanguageSection from '../Components/core/Homepage/LearningLanguageSection'
import InstructionSection from '../Components/core/Homepage/InstructionSection'
import ExploreMore from '../Components/core/Homepage/ExploreMore'
const Home = () => {
  return (
    <div>
      {/* section1 */}
      <div className='relative mx-auto flex flex-col w-11/12 max-w-max-content items-center text-white justify-between '>
        <Link to={"/signup"}>
          <div className="group mt-14 p-1 mx-auto rounded-full bg-richblack-800 font-medium text-richblack-200 transition-all duration-200 hover:scale-95 w-fit">
            <div className='flex items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900'>
              <p>Becomes an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>
        <div className='text-center text-3xl font-semibold mt-7'>
          Empower Your Future with
          <HighlightText text={"Coding Skills"} />
        </div>
        <div className='mt-4 w-[90%] text-center text-lg font-bold text-richblack-300'>
          With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
        </div>

        <div className='flex gap-5 mt-8'>
          <CTAButton active={true} linkto={"/signup"}>
            Learn More</CTAButton>
          <CTAButton active={false} linkto={"/login"}>Book a Demo</CTAButton>
        </div>
        <div className='mx-3 my-9 shadow-blue-200'>
          <video muted loop autoPlay>
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* code section 1 */}

        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className='text-4xl font-semibold'>
                Unlock Your
                <HighlightText text={"coding potential "} />
                with our online courses
              </div>
            }
            subheading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
            ctabtn1={{
              btnText: "try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn more",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            codeColor={"text-yellow-25"}
          />

        </div>

        {/* code section 1 */}

        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={<div className='text-4xl font-semibold'>
              Start
              <HighlightText text={"coding in seconds"} />
            </div>}
            subheading={"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."}
            ctabtn1={{
              btnText: "Continue Lesson",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn more",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            codeColor={"text-yellow-25"}
          />

        </div>

        <ExploreMore />
      </div>




      {/* section2 */}

      <div className='bg-pure-greys-5 text-richblack-700'>
        <div className='homepage_bg h-[310px]'>

          <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto'>
            <div className='h-[207px]'></div>
            <div className='flex flex-row gap-7 text-white'>
              <CTAButton active={true} linkto={"/signup"}>

                <div className='flex items-center gap-3'>
                  Explore Full coding
                  <FaArrowRight />
                </div>

              </CTAButton>

              <CTAButton active={false} linkto={"/signup"}>
                <div>
                  Learn More
                </div>
              </CTAButton>
            </div>

          </div>
        </div>

        <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7'>

          <div className='flex gap-10 mb-10 mt-20 justify-between'>
            <div className='text-4xl font-semibold w-[45%]'>
              Get the Skills you need for a
              <HighlightText text={"Job that is in demand"} />
            </div>
            <div className='flex flex-col gap-10 w-[40%] items-start '>
              <div className='text-[16px]'>
                The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                <div>
                  Learn More
                </div>
              </CTAButton>
            </div>

          </div>
          <TimeLineSection />

          <LearningLanguageSection />
        </div>

      </div>

      {/* section3 */}

      <div className='w-11/12 mx-auto max-x-maxContent flex-col items-center justify-between gap-8 first-letter bg-richblue-900 text-white'>
        <InstructionSection />
        <h2 className='text-center text-4xl font-semibold mt-10'>Review from other Learners</h2>
        {/* review slider */}
      </div>


      {/* footer */}
    </div>
  )
}

export default Home