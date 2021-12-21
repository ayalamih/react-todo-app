import React from "react"
import { useParams } from "react-router-dom"

const SinglePage = () => {
  console.log(useParams())
  return <div className="about__content">
  <h1>Hello from single page</h1>
  </div>
}
export default SinglePage