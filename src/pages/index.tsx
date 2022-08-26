import {useState,useEffect} from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Layouts } from '../components/Layouts'
import { Table} from '../components/Table'

import CheckList from '../core/Checklist' 

interface IChecklistProps{
  checklist: Array<object>
}

const Home: NextPage<IChecklistProps> = (props) => {
 
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
          <Table checklist={props.checklist}/>
      </Layouts>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('http://challenge-front-end.bovcontrol.com/v1/checkList');
  const data = await response.json();  
  return {
    props: {
      checklist: data
    }
  }

}

export default Home

