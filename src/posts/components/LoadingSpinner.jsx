
export const LoadingSpinner = () => {
  return (
    <div className="container">
    
      <div className="row p-5 position-absolute top-50 start-50 translate-middle d-flex ">

        <div 
          className="spinner-border" 
          style={{height: '7.5rem', width: '7.5rem',  color: '#00bfb2cf'}}>
        </div>

        <img src="../../../assets/AlertaMx.svg" 
            alt="Alerta-Mx"
            className=' position-absolute top-50 start-50 translate-middle'  
            style={{height: '7rem', width: 'auto'}} />

      </div>
    </div>
  )
}
