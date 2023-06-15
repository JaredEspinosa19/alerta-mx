import { useForm, usePostsStore } from '../../hooks';
import { formValidations, crimeOptions, townOptions, getCoordinates } from '../../helpers';

const formPost = {
  crime: crimeOptions[0],
  address: '',
  town: townOptions[0],
  date: '',
  hour: '',
  description: '',
  lat: 19.43, 
  lng: -99.13,
  isAnonymus: true,
}

export const Form = () => {

  const { crime, address, town, date, description, hour, isAnonymus,
          formState, onInputChange, onResetForm,
          formValidation: fV, isFormValid, formStatus: fS, onFocusChange } = useForm(formPost, formValidations);
  const {startSavingNewPost, setNewMapPosition} = usePostsStore();

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!isFormValid) return;
  
    startSavingNewPost(formState)
    onResetForm();

  };
  
  const checkPosition = (event) => {
    event.preventDefault();
    const { address, town } = formState;
    setNewMapPosition({address, town});
  } 

  return (
            
    <div className="border p-3 mb-2">
      <h2 className="text-center"><b>Datos del reporte</b></h2>
      <form onSubmit={onSubmit} className="row g-2 needs-validation" >

        <div className="col-12">
          <label  className="form-label"><b>Tipo de delito</b></label>
          <select  
            className={`form-control ${(fS.crimeFocus && fV.crimeValid)? 'form-unvalidated': ''}`}
            name={'crime'}
            value={crime}
            onBlur={onFocusChange}
            onChange={onInputChange}
            >
            {crimeOptions.map(crime => 
                (<option value={crime} key={crime}>{crime}</option>)
            )}
          </select>
          {(fS.crimeFocus && fV.crimeValid !== null) 
            ? <div className='unvalidated ps-2 pt-2'>{ fV.crimeValid }</div> 
            : <></>}
        </div>

        <div className="col-12">
          <label  className="form-label"><b>Dirección</b></label>
          <input 
            type="text" 
            className={`form-control ${(fS.addressFocus && fV.addressValid)? 'form-unvalidated': ''}`}
            maxLength={60} 
            placeholder='Escriba la dirección'
            name={'address'}
            value={address}
            onBlur={onFocusChange}
            onChange={onInputChange}
            />
            {(fS.addressFocus && fV.addressValid !== null) 
              ? <div className='unvalidated ps-2 pt-2'>{ fV.addressValid }</div> 
              : <></>}
        </div>
        
            
        <div className="col-8">
          <label  className="form-label"><b>Delegación</b></label>
          <select  
            className={`form-control ${(fS.townFocus && fV.townValid)? 'form-unvalidated': ''}`}
            name='town'
            value={town}
            onBlur={onFocusChange}
            onChange={onInputChange}>
            {
              townOptions.map(town => 
                (<option value={town} key={town} >{town}</option>)
              )
            }
          </select>
        </div>

        <div className="col-4 position-relative">
          <div className="position-absolute bottom-0 start-50 translate-middle-x">
            <button 
              className="btn btn-primary btn-form"
              onClick={checkPosition}
              disabled={fV.addressValid || fV.townValid}
              style={{height: '2.5rem'}}>
              Verificar
            </button>
          </div>
        </div>
        
        {(fS.townFocus && fV.townValid !== null) 
          ? <div className='unvalidated ps-2 pt-2'>{fV.townValid}</div> 
          : <></>}

        <div className="col-md-6">
          <label  className="form-label"><b>Fecha</b></label>
          <input 
            type="date" 
            className={`form-control ${(fS.dateFocus && fV.dateValid)? 'form-unvalidated': ''}`}
            pattern="\d{2}-\d{2}-\d{4}"
            min="01-01-2000"
            max="31-12-2100"
            name='date'
            value={date}
            onBlur={onFocusChange}
            onChange={onInputChange}
            />
          {(fS.dateFocus && fV.dateValid !== null) 
            ? <div className='unvalidated ps-2 pt-2'>{fV.dateValid}</div> 
            : <></>}
        </div> 

        <div className="col-md-6">
          <label  className="form-label"><b>Hora</b></label>
          <input 
            type="time" 
            className={`form-control ${(fS.hourFocus && fV.hourValid)? 'form-unvalidated': ''}`}
            min="00:00"
            max="23:59"
            name='hour'
            value={hour}
            onBlur={onFocusChange}
            onChange={onInputChange}
            />
          {(fS.hourFocus && fV.hourValid !== null) 
            ? <div className='unvalidated ps-2 pt-2'>{fV.hourValid}</div> 
            : <></>}
        </div>

        <div className="col-12">
          <label className="form-label"><b>Descripción</b></label>
          <textarea 
            className={`form-control ${(fS.descriptionFocus && fV.descriptionValid)? 'form-unvalidated': ''}`} 
            style={{resize:'none'}}
            rows="5" 
            maxLength="250"
            name='description'
            value={description}
            onBlur={onFocusChange}
            onChange={onInputChange}>
          </textarea>
          {(fS.descriptionFocus && fV.descriptionValid !== null) 
            ? <div className='unvalidated ps-2 pt-2'>{fV.descriptionValid}</div> 
            : <></>}
        </div>

        <div className="col-12">
          <div className="form-check">
            <input 
              className="form-check-input checkbox" 
              type="checkbox"
              name='isAnonymus'
              checked={isAnonymus}
              onBlur={onFocusChange}
              onChange={onInputChange} />
            <label className="form-check-label">
              Publicar cómo anónimo
            </label>
          </div>
        </div>

        <div className="col-12 ">
          <div className="row w-100"
            style={{height: '2.5rem'}}>
            <div className="col-md-3 col-4 offset-md-6 offset-4 position-relative">
              <div className='position-absolute top-50 start-50 translate-middle'>
                <button 
                  className="btn btn-primary btn-form" 
                  type="submit"
                  onClick={onSubmit}
                  disabled={!isFormValid}
                  style={{height: '2.5rem', width: '100%'}}
                  >
                  Enviar
                </button>
              </div>
            </div>
            <div className="col-md-3 col-4 position-relative">
              <div className='position-absolute top-50 start-50 translate-middle'>
                <button 
                  className="btn btn-primary btn-form"
                  onClick={onResetForm}
                  style={{height: '2.5rem'}}>
                  Resetear
                </button>
            </div>
          </div>
        </div>
      </div>
      </form>
    </div>
  )
}
