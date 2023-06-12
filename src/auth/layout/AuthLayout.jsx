import { useAuthStore } from "../../hooks";
import { StatusMessage } from "../components/StatusMessage"

export const AuthLayout = ({children, title}) => {

  const {errorMessage} = useAuthStore();

  return ( 
    <div className="container position-relative"
      style={{height: '100vh'}}>
      <div className="position-absolute top-50 start-50 translate-middle w-100 p-3" >
        <div className="row">
          <div className="col-12 position-relative"
            style={{height: '35rem'}}>
            <div className="p-5 position-absolute top-50 start-50 translate-middle">
              <span className="position-absolute top-0 start-50 translate-middle-x z-3">
                <img src="../../../AlertaMx.svg" 
                  alt="Alerta-Mx"
                  className='position-absolute top-0 start-50 translate-middle-x'  
                  style={{height: '7rem', width: 'auto'}}/>
              </span>

              <div className="p-5 rounded-5 shadow-lg bg-body-tertiary"
                style={{minWidth: '24rem'}}>
                <h4 className="text-center mt-4">
                  <b>{ title }</b>
                </h4>
                {children} 
              </div>
              {
                !!errorMessage && <StatusMessage/> 
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
