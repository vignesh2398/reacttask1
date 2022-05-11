import React from 'react'
import Cards from './Cards'

export default function Boader() {
  return (
    <div className="App">
       <Cards fil='$0' head='FREE'/>
      <Cards fil='$9' head='PLUS'/>
      <Cards fil='$49' head='PRO'/>
    </div>

  )
}
