// "use client";
//
// import { css } from '../../styled-system/css';
// import { center } from '../../styled-system/patterns'
// import { motion } from "framer-motion"
// import { useTransform } from "framer-motion"
// import Cloud from "@/_components/cloud";
//
// const main = css({
//     backgroundColor: '#89CFF0',
// })
//
// const containerStyle = css({
//     position: "relative",
//     width: "100%",
//     height: "100vh",
//     backgroundColor: "#87ceeb", // Light blue sky color
//     // overflow: "hidden",
// })
//
// const container = css({
//     display: 'flex',
//     justifyContent: 'center',
//     width: '100%',
//     paddingY: '20'
// })
//
// const section = css({
//     width: '60%',
//     color: 'white',
// })
//
// const sectionStyle = css({
//     minHeight: '100vh',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontSize: '2rem',
//     scrollSnapAlign: 'start',
//     scrollSnapStop: 'always',
//     padding: '20px', // Optional: Add padding to ensure content isn't flush with the edges
// })
//
// const navStyle = css({
//     position: 'fixed',
//     top: '10px',
//     right: '10px',
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '10px',
// })
//
// export default function Home() {
//     return (
//         <>
//             <nav className={navStyle}>
//                 <a href="#title">Section 1</a>
//                 <a href="#bio">Section 2</a>
//                 <a href="#section3">Section 3</a>
//                 {/* Add more links as needed */}
//             </nav>
//             <main className={main} style={{scrollSnapType: 'y mandatory', overflowY: 'scroll', height: '100vh'}}>
//                 <section id="title" className={sectionStyle}>
//                     <div className={css({
//                         color: 'white',
//                         fontWeight: 'extrabold',
//                         fontSize: '4xl',
//                         fontStyle: 'italic',
//                     })}>
//                         <div className={css({
//                             spaceY: '2'
//                         })}>
//                             <h1>
//                                 Hey!
//                             </h1>
//                             <h2>
//                                 I&apos;m Alec 🫡
//                             </h2>
//                         </div>
//                     </div>
//                 </section>
//                 <section id="bio" className={sectionStyle}>
//                     <div className={section}>
//                         <h1 className={css({
//                             fontSize: '3xl',
//                             fontWeight: 'bold'
//                         })}>
//                             About Me
//                         </h1>
//                         <div className={css({
//                             fontSize: '2xl',
//                             spaceY: '5',
//                         })}>
//                             <p>
//                                 I am a recent graduate from the University of Michigan with degrees in Computer Science
//                                 and
//                                 Business
//                                 Administration looking for work as a software developer. I have experience with Full
//                                 Stack
//                                 Development
//                                 and embedded systems through my previous work experience. I am interested in working
//                                 with
//                                 embedded
//                                 systems,
//                                 backend and infrastructure work.
//                             </p>
//                             <p>
//                                 I fell into computer science randomly through a business analytics class that used R as
//                                 a
//                                 sophomore in college.
//                                 I had never programmed before and really enjoyed it, deciding to take a computer science
//                                 class
//                                 the
//                                 following semester.
//                                 I fell in love with novel problem solving computer science gave me and learning about
//                                 how everything
//                                 in the world works. This led me to decide to stay a 5th year at Umich to complete a
//                                 computer science
//                                 degree and pivot to becoming a software developer.
//                             </p>
//                             <p>
//                                 I always love learning new things and meeting new people, feel free to reach out to me!
//                             </p>
//                             <p>
//                                 I am a recent graduate from the University of Michigan with degrees in Computer Science
//                                 and
//                                 Business
//                                 Administration looking for work as a software developer. I have experience with Full
//                                 Stack
//                                 Development
//                                 and embedded systems through my previous work experience. I am interested in working
//                                 with
//                                 embedded
//                                 systems,
//                                 backend and infrastructure work.
//                             </p>
//                             <p>
//                                 I fell into computer science randomly through a business analytics class that used R as
//                                 a
//                                 sophomore in college.
//                                 I had never programmed before and really enjoyed it, deciding to take a computer science
//                                 class
//                                 the
//                                 following semester.
//                                 I fell in love with novel problem solving computer science gave me and learning about
//                                 how everything
//                                 in the world works. This led me to decide to stay a 5th year at Umich to complete a
//                                 computer science
//                                 degree and pivot to becoming a software developer.
//                             </p>
//                             <p>
//                                 I always love learning new things and meeting new people, feel free to reach out to me!
//                             </p>
//
//                         </div>
//                     </div>
//                 </section>
//                 <section id="section3" className={sectionStyle}>
//                     <div className={section}>
//                         <h1 className={css({
//                             fontSize: '4xl',
//                             fontWeight: 'bold'
//                         })}>
//                             My Experiences
//                         </h1>
//                         <div>
//                             <div>
//                                 <h2 className={css({
//                                     fontSize: '2xl',
//                                 })}>
//                                     Bold Laser Automation
//                                 </h2>
//                                 <p>
//
//                                 </p>
//                                 <ul>
//                                     <li>
//
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//                 <section id="test" className={sectionStyle}>
//
//                 </section>
//                 {/* Add more sections as needed */}
//             </main>
//             <div className={containerStyle}>
//                 <Cloud/>
//                 <Cloud/>
//                 <Cloud/>
//
//                 <Cloud/>
//             </div>
//         </>
//     )
// }

// pages/index.tsx

import { css } from '../../styled-system/css';
import Cloud from "../_components/cloud";

const containerStyle = css({
    position: "relative",
    width: "100%",
    height: "100vh",
    backgroundColor: "#87ceeb", // Light blue sky color
    overflow: "hidden",
});

const HomePage: React.FC = () => {
    return (
        <div className={containerStyle}>
            <Cloud />
            <Cloud />
            <Cloud />
        </div>
    );
};

export default HomePage;
