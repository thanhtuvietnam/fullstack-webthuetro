import { Routes, Route } from 'react-router-dom';
import { Home, HomePage, Login, RentalApartment, RentalHouse, RentalRoom, RentalSpace } from './containers/Public';
import { path } from './ultils/constant';

function App() {
  return (
    <div className='h-full w-full bg-primary'>
      <Routes>
        <Route
          path={path.HOME}
          element={<Home />}>
          <Route
            path={'*'}
            element={<HomePage />}
          />
          <Route
            path={path.LOGIN}
            element={<Login />}
          />
          <Route
            path={path.CHO_THUE_PHONG_TRO}
            element={<RentalRoom />}
          />
          <Route
            path={path.NHA_CHO_THUE}
            element={<RentalHouse />}
          />
          <Route
            path={path.CHO_THUE_CAN_HO}
            element={<RentalApartment />}
          />
          <Route
            path={path.MAT_BANG_VAN_PHONG}
            element={<RentalSpace />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
