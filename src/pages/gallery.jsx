import { useState } from 'react'
import '../App.css'

import SiteTitle from '../components/SiteTitle.jsx'
import ContentContainer from '../components/ContentContainer.jsx'

function App() {

  return (
    <>
    <SiteTitle title="GALLERY"/>
    <ContentContainer contentName="SEASONAL ARRANGEMENTS" type ="flowershop"/>
    </>
  )
}

export default App
