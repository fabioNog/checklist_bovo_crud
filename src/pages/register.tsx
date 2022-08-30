import {useState,useEffect} from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Layouts } from '../components/Layouts'
import { Table} from '../components/Table'

import CheckList from '../core/Checklist' 
import { Button } from '../components/Button'
import { Form } from '../components/Form'

type CheckListType = {
  _id: string
  type: string
  created_at: string
  from: {
    name: string
  }
  farmer: {
    name: string
    city: string
  }
}

type TableProps = {
    checklist: CheckListType[];
}

const Register: NextPage<TableProps> = (props) => {
  
  const checklistEdit = (checklist: CheckListType) => {
    console.log(checklist.farmer.name)
  }

  const checklistExclude = (checklist: CheckListType) => {
    console.log(checklist.farmer.name)
  }

  const checklistList = (checklist: CheckListType) => {
    console.log(checklist.farmer.name)
  }
  return (
    <div className={`
      flex 
      h-screen 
      justify-center 
      items-center      
      bg-gradient-to-r from-blue-500 to-orange-500
      
    `}>
      <Layouts title="Cadastro">
          <Form teste="ola"/>
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

export default Register