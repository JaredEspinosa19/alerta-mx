
export const UserDataList = (user) => {
  
  
  return (
    <>
      <div className="row g-2 ">

        <h2 className="fw-semibold">Datos del Usuario</h2>
        
        <div className="col-12 col-md-4">
          <div class="card ">
            <div class="card-body">
              <h3 class="card-title fw-semibold">Nombre</h3>
              <p class="card-text">
                {user?.name || 'Nombre Usuario'}
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div class="card ">
            <div class="card-body">
              <h3 class="card-title fw-semibold">Email</h3>
              <p class="card-text">
                {user?.email || 'Correo electrónico'}
              </p>
            </div>
          </div>
        </div>
        
        <div className="col-12 col-md-4 ">
          <div class="card ">
            <div class="card-body">
              <h3 class="card-title fw-semibold">Contraseña</h3>
              <p class="card-text">
                {user?.password || 'Contraseña del usuario'}
              </p>
            </div>
          </div>
        </div> 

      </div>
    </>
  )
}