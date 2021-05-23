import Head from 'next/head'
import Sidebar from "../components/sidebar";
import Feed from "../components/feed";
import Header from "../components/header";
import Link from "../components/link";
import Youtube from "../components/youtube";

function Home() {
  return (
      <div className="container-fluid">
        <Head>
          <title>README : Reading Dashboard</title>
          <meta name="description" content="README : Reading Dashboard" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="row">
          <Sidebar/>
          <div className="col-sm p-3 min-vh-100">
            <Header/>
            <Feed/>
            <Link/>
            <Youtube/>
          </div>
        </div>
      </div>
  )
}

export default Home;
