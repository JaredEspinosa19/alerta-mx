import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {}) => {
  
  const [ formState, setFormState ] = useState( initialForm );
  const [ formValidation, setFormValidation ] = useState({});
  const [ formStatus, setFormStatus ] = useState({});
  
  useEffect(() => {
      createValidators();
  }, [formState]);
      
  useEffect(() => {
      setFormState(initialForm);
  }, [initialForm]);

  useEffect(() => {
    checkOnFocus();
  },[])
  
  //Formulario en general es válido
  const isFormValid = useMemo(() =>{

      for (const prop of Object.keys(formValidation)) {
          if(formValidation[prop]!== null) return false;
      }

      return true;
  }, [formValidation])

  //Contenido formulario
  const onInputChange = ({ target }) => {
      const { name, value, type } = target;
      
      if(type !== 'checkbox'){
        setFormState({
          ...formState,
          [name]: value,
        });
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
      checkOnFocus();
  }

  //Validaciones
  const createValidators = () =>{
      const formCheckedValues = {};
      
      for (const prop of Object.keys(formValidations)) {
          const [fn, rule] = formValidations[prop]; 

          formCheckedValues[`${prop}Valid`] = fn(formState[prop]) ? null : rule;
      }
      setFormValidation(formCheckedValues);
  }

  // Eventos seleccionados
  const checkOnFocus = () => {
    const formFocus = {};

    for (const prop of Object.keys(formState)) { 
      formFocus[`${prop}Focus`] = false;
    }
    setFormStatus(formFocus);
  };

  const onFocusChange = ({target}) => {
    const {name} = target;
    setFormStatus({
      ...formStatus,
      [`${name}Focus`]: true,
    });
  };

  return {
    //datos formularios
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    //validaciones
    isFormValid,
    formValidation,
    ...formValidation,
    //seleccion
    ...formStatus,
    formStatus,
    onFocusChange,
  }
}