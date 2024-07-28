"use client"
import '@/styles/containers/notePage.css'
import HeaderSimple from "@/components/HeaderSimple"
import TransparentButton from "@/components/TransparentButton"
import AllNotes from '@/components/AllNotes'
import { UserAuth } from '@/context/AuthContext'
import getNotes from '@/functions/getNotes'
import Loader from '@/components/Loader'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const NotePage = ({ params }) => {

  const [loading, setLoading] = useState(true)
  const [notes, setNotes] = useState({})

  const patientIdentification = params.patientId
  const { user } = UserAuth()

  useEffect(() => {
    getNotes(patientIdentification, user).then((result) => {
      setNotes(result)
      setLoading(false)
    }).catch((error => {console.log(error)}))
  }, [])

  if(!loading) {
    return (
      <div className="note-page">
        <HeaderSimple title="NOTAS MEDICAS" />
        <Link href={`/write-note/${patientIdentification}`} >
          <TransparentButton text='+' />
        </Link>
        <AllNotes notes={notes} />
      </div>
    )
  } else {
  return (
    <Loader />
  )
 }
 
}

export default NotePage