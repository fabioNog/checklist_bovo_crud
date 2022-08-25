import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Layouts } from '../components/Layouts'

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
      <Layouts title="Cadastro">
          <span>Conteudo</span>
      </Layouts>
    </div>
  )
}

export default Home
