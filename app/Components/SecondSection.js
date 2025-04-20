"use client"

import Image from 'next/image'
import React from 'react'
import cs1 from '../images/photos/cs-1.jpg'
import ScrollAnimation from './ScrollAnimation'
import {Swiper,SwiperSlide} from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const SecondSection = () => {
  return (
    <div className='section-2'>
      <div>
         <h1 className='w-us-h'>Why SSS College of Arts, Science & Management is the Right Fit for You?</h1>
      </div>
      
      <Swiper
        autoHeight={true}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 3000, disableOnInteraction: true}} // Auto slide every 2.5s
        navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }} // Navigation buttons
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full"
      >
      <SwiperSlide>
         <div className='w-us'>
          <h1>Comprehensive and Diverse Academic Offerings:</h1>
          <div className='w-us-2'>
          <p>
          SSS College of Arts, Science & Management offers a variety of undergraduate and postgraduate programs catering to diverse academic interests. Science students can pursue B.Sc. programs in fields like Mathematics, Physics, Chemistry, Biochemistry, and Computer Science, focusing on analytical and research skills. Commerce and Management programs such as B.Com., M.Com., and BBA provide a strong foundation in business and economics. For those interested in Arts & Humanities, the B.A. in English and other subjects enhance critical thinking and communication skills. Additionally, the college offers IT programs like BCA and M.Sc. IT, preparing students for the digital world. With a flexible curriculum, the college ensures students are ready for both academic success and rewarding careers.
          </p>
          <Image src={cs1} alt="Student Image" width={500} height={500}/>
          </div>
         </div>
         </SwiperSlide>
         <SwiperSlide>
          <div className='w-us'>
            <h1>Sports and Physical Fitness</h1>
            <div className='w-us-2'>
              <p>
              At SSS College, we prioritize both physical and mental well-being by offering a comprehensive sports program. The college supports a wide range of sports, including cricket, football, volleyball, basketball, badminton, athletics, table tennis, and chess. With expansive sports grounds, a gymnasium, and indoor courts, students have ample opportunities to train and compete. We also organize inter-college tournaments to give students a platform to showcase their skills. Additionally, health and fitness programs are available to encourage a balanced, active lifestyle for all students. These initiatives not only promote physical health but also foster teamwork, discipline, and leadership skills, helping students grow holistically. Through our sports program, we aim to instill the importance of maintaining a healthy body and mind throughout life.
              </p>
              <Image src={cs1} alt="Student Image" width={500} height={500}/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-us'>
            <h1>Building Bright Futures: SSS College Placements</h1>
            <div className='w-us-2'>
              <p>
              SSS College has a dedicated placement cell to help students secure rewarding career opportunities. The placement cell maintains strong industry tie-ups, providing access to internships and job placements with top companies across various sectors. One-on-one career counseling sessions help students identify their strengths and career goals, guiding them toward success. Additionally, the college organizes skill development programs focused on enhancing employability, including resume building, interview preparation, and other job-related skills. These efforts ensure students are well-prepared for their careers and equipped with the tools to succeed in the professional world.
              </p>
              <Image src={cs1} alt="Extracurricular Activities" width={500} height={500}/>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='w-us'>
            <h1>Cultural Activities</h1>
            <div className='w-us-2'>
              <p>
              At SSS College, we encourage creativity and cultural expression to help students become well-rounded individuals. The college hosts annual cultural festivals where students can showcase their talents in drama, dance, music, poetry, and art. Additionally, students participate in inter-college competitions like debate, quiz, photography, and painting contests, promoting healthy competition and creative thinking. There are also various cultural clubs and societies, such as drama clubs, music bands, dance troupes, and literary societies, where students can further explore their interests and develop skills outside the classroom. These cultural activities enrich the college experience and foster personal growth.
              </p>
              <Image src={cs1} alt="Community Engagement" width={500} height={500}/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-us'>
            <h1>Excellence in Education: The SSS College Way</h1>
            <div className='w-us-2'>
              <p>
              SSS College of Arts, Science & Management delivers high-quality education through experienced faculty, innovative teaching methods, and a student-centered approach. With a team of qualified professors, the college blends theoretical knowledge with practical skills, using interactive and tech-driven learning, including case studies and e-learning platforms. Small class sizes allow personalized attention, while regular assessments and feedback ensure continuous improvement. The emphasis on research and real-world applications prepares students for both academic success and career excellence. Faculty members foster a supportive community, mentoring students to reach their full potential and excel in their professional lives.
              </p>
              <Image src={cs1} alt="Sports Image" width={500} height={500}/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-us'>
            <h1>National Service Scheme (NSS)</h1>
            <div className='w-us-2'>
              <p>
              The NSS program at SSS College offers students the opportunity to engage in community welfare activities, including health camps, environmental campaigns, and educational outreach for underprivileged communities. By participating in these initiatives, students contribute to social well-being while developing leadership skills. The program fosters a sense of social responsibility, as students take on roles in managing projects and guiding fellow participants. It also promotes social awareness, encouraging students to address social issues and develop empathy. Through NSS, students gain valuable experience that helps shape their future careers and makes a positive impact on society.
              </p>
              <Image src={cs1} alt="NSS Activities" width={500} height={500}/>
            </div>
          </div>
        </SwiperSlide>
        <div className="swiper-button-prev absolute top-1/2 left-4 transform -translate-y-1/2 z-10 text-white p-2 rounded-full cursor-pointer">
        &lt;
      </div>

      {/* Right Navigation Button */}
      <div className="swiper-button-next absolute top-1/2 right-4 transform -translate-y-1/2 z-10 text-white  p-2 rounded-full cursor-pointer">
        &gt;
      </div>
      </Swiper>
    </div>
   
  )
}

export default SecondSection