"use client"
import { useParams } from "next/navigation"
import SuccessMessage from "@/components/SuccessMessage"
import MainButton from "@/components/MainButton"
import '@/styles/containers/success.css'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Link from "next/link"

const Success = () => {

  const params = useParams()
  
  return (
    <div className="success">
      <div className="check-container">
        <CheckCircleOutlineIcon className="check" />
      </div>
      <SuccessMessage type={params.type} />
      <Link href={'/patients'}>
        <MainButton text='Terminar' />
      </Link>
    </div>
  )
  
}

export default Success