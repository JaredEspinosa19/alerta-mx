
const coordinatesServices = new google.maps.Geocoder();

export const getCoordinates = async({address, town}) => {

  try {    
    const res = await coordinatesServices.geocode({
      address: `${address}, ${town}, Ciudad de México, México`,
      region: 'MX'
    });    
    return {
      lat: res.results[0].geometry.location.lat(),
      lng: res.results[0].geometry.location.lng(),
    }

  } catch (error) {
    console.log('Ocurrio algo con la petición');  
    return {
      lat: 19.43, 
      lng: 99.13,
    }   
  }
}