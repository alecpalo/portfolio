import { css } from '../../styled-system/css';


const main = css({
    backgroundColor: '#95edff',
})

export default function Home() {
  return (
      <main className={main}>
          <div>
              Hello 🐼!
          </div>
      </main>
  )
}