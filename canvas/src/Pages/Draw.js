import React, { useState } from 'react'

import { Header, Footer, Draw } from '../components'
const DrawPage = () => {
  const [select, setSelect] = useState('wall')
  return (
    <>
      <Header></Header>
      <Draw
        select={select}
        onSelectChange={_select => setSelect(_select)}
      ></Draw>
      <Footer></Footer>
    </>
  )
}

export default DrawPage
