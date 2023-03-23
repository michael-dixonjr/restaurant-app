import {Routes, Route} from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Aboutpage from '../pages/Aboutpage';
import Orderpage from '../pages/Orderonlinepage';
import Reservationpage from '../pages/Reservationpage';

export default function Routing() {
  return (
    <Routes >
      <Route path="/" element={<Homepage/>}/>
      <Route path="/about" element={<Aboutpage/>}/>
      <Route path="/orderonline" element={<Orderpage/>}/>
      <Route path="/reservations" element={<Reservationpage/>}/>
    </Routes>
  )
}
