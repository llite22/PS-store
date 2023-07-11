import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const NotFound: NextPage = () => {
  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
  }
  return (
    <>
    <Head>
        <title>Not Found</title>
    </Head>
    <div>
        <Image style={imageStyle} src='/images/404.jpg' width={1440} height={740} alt="404"/>
    </div>
    </>
  )
}
export default NotFound