import { useAuthStore } from "../../hooks"

export const StatusMessage = () => {

  const {errorMessage} = useAuthStore();

  return (
    <div className="position-absolute top-100 start-50 translate-middle mt-4">
      <div 
        className={`shadow-sm mb-5 pt-1 rounded-4 fw-semibold text-center ${errorMessage.status === true ? 'message-status-ok': 'message-status-error'}`}
        style={{width: '14rem', height: '4rem'}}>
          {
            errorMessage.msg
          }
      </div>
    </div>
  )
}
