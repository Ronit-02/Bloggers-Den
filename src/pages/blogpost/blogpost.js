import React from 'react'
import { useParams } from 'react-router-dom'

export default function Blogpost() {

  const {id} = useParams()

  return (
    <div>
        Blogpost {id}
    </div>
  )
}
