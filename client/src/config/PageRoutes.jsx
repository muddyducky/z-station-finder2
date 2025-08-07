import { Route, Routes } from 'react-router-dom'
import Screen1 from '../components/pages/screen1/Screen1'
import Screen2 from '../components/pages/screen2/Screen2'
import Screen3 from '../components/pages/screen3/Screen3'

export default function PageRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Screen1/>}/>
        <Route path='/search' element={<Screen2/>}/>
        <Route path='result' element={<Screen3/>}/>
      </Routes>
    </div>
  )
}
