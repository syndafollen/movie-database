import './styles.css'
import { Typography } from '@mui/joy'

export const Preloader = () => {
  return (
    <div className="container">
         <div className="wrapper">
            <div className="loader">
               <div className="dot"></div>
            </div>
            <div className="loader">
               <div className="dot"></div>
            </div>
            <div className="loader">
               <div className="dot"></div>
            </div>
            <div className="loader">
               <div className="dot"></div>
            </div>
            <div className="loader">
               <div className="dot"></div>
            </div>
            <div className="loader">
               <div className="dot"></div>
            </div>
         </div>
      </div>
  )
}
