import Head from 'next/head'

const Home = () => (
  <div className="container">
    <Head>
      <title>Kemble Song</title>
      <meta name="theme-color" content="#ffffff" />
      <meta name="description" content="Kemble Song is a software engineer and creative currently based in Melbourne, Australia" />
    </Head>

    <main>
      <section className="main">
        <h1>Kemble is a <span className="highlight">developer</span> and <span className="highlight-lighter">creative</span> currently based in <span className="highlight-alt">Melbourne</span>.</h1>
      </section>
      <section className="floating">
        <ul className="floating__body menu">
          <li><a className="menu__item" href="//www.linkedin.com/in/kemblesong">linkedin</a></li>
          <li><a className="menu__item" href="//github.com/kemblesong">github</a></li>
          <li><a className="menu__item" href="//instagram.com/kemblog">instagram</a></li>
          <li><a className="menu__item" href="mailto:yo@ksong.co">email me</a></li>
        </ul>
      </section>
      <a href="//soundcloud.com/vanbeatoven" className="call-to-action">
        <h2>VANBEATOVEN</h2>
        <small>- freshly baked beats</small>
      </a>
      <a href="//voicemail.band" className="call-to-action">
        <h2>Voice Mail</h2>
        <small>- indie pop trio</small>
      </a>
      <a href="//stereo.vision" className="call-to-action">
        <h2>STEREO VISION</h2>
        <small>- coming soon</small>
      </a>
    </main>

    <footer></footer>

    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .main {
        padding: 1.5em;
        color: #644D52;
      }

      .floating {
        background-color: #A49A87;
        width: 75%;
        min-height: 300px;
        color: white;
        font-size: 36px;
        opacity: 0.5;
        margin-left: auto;
        margin-top: -2rem;
      }

      .call-to-action {
        display: inline-block;
        background-color: #9287d1;
        font-size: 32px;
        margin-right: auto;
        margin-bottom: 2rem;
        padding: 2rem;
      }

      .call-to-action:hover {
        color: white;
        background-color: #8172d3;
      }

      .floating__body {
        padding: 1.5rem;
        list-style: none;
      }

      .highlight {
        color: #9287d1;
      }
      .highlight-lighter {
        color: #f5a3a9;
      }
      .highlight-alt {
        color: #7ab1e4;
      }

      .footer {
        margin: 0 auto;
        padding: 0.5em 1em;
        font-size: 18px;
        display: inline-block;
        color: white;
        background-color: #644D52;
        margin-top: 10rem;
      }

      h1 {
        font-size: 36px;
      }

      small {
        font-size: 80%;
      }

      a {
        text-decoration: none;
        color: white;
        transition: all 0.15s ease;
      }

      a:hover {
        color: #332532;
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        background-color: #fafafa;
        font-family:  -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }
      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Home
