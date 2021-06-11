import Head from 'next/head'
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import youtubeStyles from '../styles/Youtube.module.css';
import prisma from '../lib/primsa';
import Link from 'next/link'

function Youtubes(props) {
  return (
    <div className="container-fluid">
      <Head>
        <title>README : Reading Dashboard</title>
        <meta name="description" content="README : Reading Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="row">

        <Sidebar />

        <div className="col-sm p-3 min-vh-100">
          <Header />

          {props.youtubeLinks.length ? (
            <div className={youtubeStyles.links} id="youtube">
              <div className="d-flex justify-content-between">
                <div className={youtubeStyles.linkHeader}>/ Youtube</div>
                <Link href={{ pathname: 'youtubes' }}>
                  <div className={youtubeStyles.linkSmallHeader}>Show All</div>
                </Link>
              </div>
              <div className="row row-cols-1 row-cols-md-4 g-4">
                {props.youtubeLinks.map((link, i) => (
                  <div className="col" key={i}>
                    <iframe class="col-lg-12 col-md-12 col-sm-12"
                      src={`https://www.youtube.com/embed/${link.url.split("?v=").pop().split('&')[0]}?controls=0`}>
                    </iframe>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const youtubeLinks = await prisma.youtube.findMany();

  return { props: { youtubeLinks } }
}

export default Youtubes;
