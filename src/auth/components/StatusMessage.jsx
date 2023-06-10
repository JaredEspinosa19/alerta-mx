
export const StatusMessage = ({message='Hola', ok=true}) => {
  return (
    <div 
      className="position-absolute bottom-0 start-50 translate-middle-x mb-5">
      <div 
        className="shadow-sm p-3 mb-5 bg-body-tertiary rounded-4 message-status-error fw-semibold text-center"
        style={{width: '14rem', 
                height: '4rem'}}>
          {message}
      </div>
    </div>
  )
}
