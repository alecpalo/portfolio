import { css } from '../../styled-system/css';
import { center } from '../../styled-system/patterns'

const main = css({
    backgroundColor: '#89CFF0',
})

export default function Home() {
  return (
      <main className={main}>
          <div className={center({
              height: '100vh',
              color: 'white',
              fontWeight: 'extrabold',
              fontSize: '4xl',
              fontStyle: 'italic',
          })}>
              <div className={css({
                  spaceY: '2'
              })}>
                  <h1>
                      Hey!
                  </h1>
                  <h2>
                      I&apos;m Alec 🫡
                  </h2>
              </div>
          </div>
          <div className={css({
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
          })}>
              <div className={css({
                  width: '60%',
                  color: 'white',
                  fontWeight: 'bold'
              })}>
                  <h1 className={css({
                      fontSize: '3xl',
                  })}>
                      About Me
                  </h1>
                  <div className={css({
                      fontSize: '2xl',
                      spaceY: '5',
                  })}>
                      <p>
                          I am a recent graduate from the University of Michigan with degrees in Computer Science and
                          Business
                          Administration looking for work as a software developer. I have experience with Full Stack
                          Development
                          and embedded systems through my previous work experience. I am interested in working with
                          embedded
                          systems,
                          backend and infrastructure work.
                      </p>
                      <p>
                          I fell into computer science randomly through a business analytics class that used R as a
                          sophomore in college.
                          I had never programmed before and really enjoyed it, deciding to take a computer science class
                          the
                          following semester.
                          I fell in love with novel problem solving computer science gave me and learning about how everything
                          in the world works. This led me to decide to stay a 5th year at Umich to complete a computer science
                          degree and pivot to becoming a software developer.
                      </p>
                      <p>
                          I always love learning new things and meeting new people, feel free to reach out to me!
                      </p>
                  </div>
              </div>

          </div>
      </main>
  )
}