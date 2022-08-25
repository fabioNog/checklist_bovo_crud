import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Layouts } from '../components/Layouts'
import { Table} from '../components/Table'

import CheckList from '../core/Checklist' 

const Home: NextPage = () => {

  const checklist = [
    new CheckList(
      'yhkdfkas23',
      'Rebanhos',
      'Pedro',
      'Aparecida do Norte',
      'Carlos',
      'Antibiótico',
      10,
      20
    ),
    new CheckList(
      'yhkdfkas24',
      'Rebanhos2',
      'Pedro2',
      'Aparecida do Norte2',
      'Carlos2',
      'BPF',
      12,
      23
    )
  ]

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
          <Table checklist={checklist}/>
      </Layouts>
    </div>
  )
}

export default Home

