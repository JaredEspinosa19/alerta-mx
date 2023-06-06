import React from 'react'
import { Form } from '../components'
import { Map } from '../components/Map'

export const PostPage = () => {
  return (

    <div className="container pt-4 pb-3">
      <div className="row" >
        <div className="col-12 col-lg-6">
          {/* TODO: Logica Cuestionario aqui*/}
          <Form /> 
        </div>

        <div className="col-12 col-lg-6">
          {/* TODO: Logica Cuestionario aqui*/}
          <Map /> 
        </div>
      </div>
    </div>
  )
}
