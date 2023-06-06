import { useEffect, useMemo, useState } from 'react';
import { getCoordinates } from '../helpers/getCoordinates';

export const useFormPost = ( initialForm = {}, formValidations = {}) => {

  const [ formState, setFormState ] = useState( initialForm );
  const [formValidation, setFormValidation] = useState({});

  // TODO , ejecuta las validaciones
  useEffect(() => {
      createValidators(); //Se dispara la validacion
  }, [formState])//CADA VEZ QUE HAYA UN CAMBIO EN EL STATE SE DISPARA
      
  useEffect(() => {
      setFormState(initialForm);
  }, [initialForm])
  
  const isFormValid = useMemo(() =>{

      for (const prop of Object.keys(formValidation)) {
          if(formValidation[prop]!== null) return false;
      }

      return true;
  }, [formValidation])

  // GESTIONA LOS CAMBIOS DEL FORMULARIO
  const setNewCoordinates = async({address, town}) => {
    const {lat,lng} = await getCoordinates({address, town});
    setFormState({
      ...formState,
      ['lat']: lat,
      ['lng']: lng,
    });
  }

  const onInputChange = ({ target }) => {
      const { name, value, type } = target;
      
      // console.log(name, value);

      if(type !== 'checkbox'){
        setFormState({
          ...formState,
          [name]: value,
        })

        // if (name === 'address' || name === 'town'){
        //   setNewCoordinates({
        //     address: formState.address,
        //     town: formState.town,
        //   });
        // }
      } 
      
      else{
        setFormState({
          ...formState,
          [ name ]: !formState[name]
        });
      }
  }

  const onResetForm = () => {
      setFormState( initialForm );
      console.log('Reiniciando formulario');
  }

  const createValidators = () =>{
      const formCheckedValues = {};
      
      for (const prop of Object.keys(formValidations)) {
          const [fn, rule] = formValidations[prop];
          formCheckedValues[`${prop}Valid`] = fn(formState[prop]) ? null : rule;
      }
      
      setFormValidation(formCheckedValues);
  }

    return {

      // ESTADO COMPONENTE
        ...formState,
        formState,
        onInputChange,
        onResetForm,

        setFormState,

        //VALIDACION CAMPO
        isFormValid,
        ...formValidation
    }
}