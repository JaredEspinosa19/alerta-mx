import { checkValidateDate, crimeOptions, townOptions } from "./"

export const authValidations = {
  name : [(value) => value.length > 8, 'Escriba un nombre real.'],
  email: [(value) => value.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/), 'Escriba un correo existente.'],
  password: [(value) => value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/), 'La contraseña debe tener al menos 8 carácteres con una mayúscula, una minúscula, un número y un carácter especial.'],
}

export const formValidations = {
  crime: [(value) => value !== crimeOptions[0], 'Escoja un crimen válido'],
  address: [(value) => value.length > 10, 'Lugar no identificable'],
  town: [(value) => value !== townOptions[0], 'Escoja un delegación válida'],
  date: [(value) => checkValidateDate(value), 'Seleccione una fecha válida'],
  description: [(value) => value.length > 20, 'Describa un poco más del suceso'],
  hour: [(value) => value.length > 1, 'Introduzca una hora válida'],
}