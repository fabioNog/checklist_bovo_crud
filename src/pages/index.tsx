import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={`
      flex 
      h-screen 
      justify-center 
      items-center      
      bg-gradient-to-r from-blue-500 to-orange-500
      text-white
    `}>
      <h1>App</h1>
    </div>
  )
}

export default Home
