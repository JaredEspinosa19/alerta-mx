import React from 'react'
import { Form } from '../components'
import { Map } from '../components/Map'

export const PostPage = () => {
  return (

    <div className="container pt-2">
      <div className="row">
        <div className="col-12 col-lg-6">
          <Form /> 
        </div>

        <div className="col-12 col-lg-6"
          >
          <Map /> 
        </div>
      </div>
    </div>
  )
}
