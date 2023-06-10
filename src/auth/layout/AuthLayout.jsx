import { StatusMessage } from "../components/StatusMessage"

export const AuthLayout = ({children, title}) => {
  return (
  
  <div className="position-relative"
    style={{height: '100vh'}}>
    <div className="container position-relative"
      style={{height: '100vh'}}>
      
      

      <div className="row p-5 w-auto position-absolute top-50 start-50 translate-middle">
        
        <span className="position-absolute top-0 start-50 translate-middle-x z-3">
          <img src="../../../assets/AlertaMx.svg" 
            alt="Alerta-Mx"
            className='position-absolute top-0 start-50 translate-middle-x '  
            style={{height: '7rem', width: 'auto'}}/>
        </span>

        <div className=" p-5 rounded-5 m-auto order-1 order-lg-0 shadow-lg p-3 bg-body-tertiary w-auto"
        style={{minWidth: '24rem'}}>
          <h4 className="text-center mt-4">
            <b>{ title }</b></h4>
          {children} 
        </div>

      </div>

      <StatusMessage />

    </div>

    </div>
  )
}
