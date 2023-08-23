"use client"
import { useParams } from "next/navigation"
import SuccessMessage from "@/components/SuccessMessage"
import MainButton from "@/components/MainButton"
import '@/styles/components/Success.css'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Success = () => {

  const params = useParams()
  
  return (
    <div className="success">
      <div className="check-container">
        <CheckCircleOutlineIcon className="check" />
      </div>
      <SuccessMessage type={params.type} />
      <MainButton text='Terminar' />
    </div>
  )
  
}

export default Success