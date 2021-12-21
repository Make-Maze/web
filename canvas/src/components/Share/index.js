import React from 'react'
import Header from '../Header'
import { useResultContext } from '../../Context/Data'

const Share = () => {
  const { img, setImg } = useResultContext()

  return (
    <div>
      <Header></Header>
      <img src={img} />
    </div>
  )
}

export default Share
