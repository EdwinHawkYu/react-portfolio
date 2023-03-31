import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import Image from "next/image"
import deved from '../public/'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Edwin Yu Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>Hello</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer'/>
              </li>
              <li>
                <a className='bg-gradient-to-r from-cyan-500 to-teal-400 text-white px-4 py-2 rounded-md ml-4' href='#'>Resume</a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>Edwin Yu</h2>
            <h3 className='text-2xl py-2'>Software Developer and Engineer</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>
              A pretty cool guy
            </p>
            <div className='text-5xl flex justify-center gap-16 text-gray-600'>
              <AiFillLinkedin/>
              <AiFillTwitterCircle/>
              <AiFillYoutube/>
            </div>
            <div className=''>
              <Image/>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
