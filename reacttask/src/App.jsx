
import './App.css'
import Count from './task/count'

import DisplayArray from './task/displayarray'
import DisplayButton from './task/displaybtn'
import Displayjsx from './task/displayjsx'
import Child from './task/reactchildern/child'
import Reactchildern from './task/reactchildern/reactchildern'
import ShowHide from './task/showhide'
import DataBinding from './task/databinding'
import {  Updateparent } from './task/updateparent'

function App() {

  return (
    <>
    <div>
      <Displayjsx/>
      <DisplayArray/>
      <ShowHide/>
      <Count/>
      <DataBinding/>
      <DisplayButton/>
      <Updateparent/>
     <Reactchildern>
      <Child/>
     </Reactchildern>
    </div>
    </>
  )
}

export default App
