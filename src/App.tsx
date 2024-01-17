import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Goal from './pages/Goal'
import { APP_ROUTES } from './AppRoutes'
import Measure from './pages/Measure'
import Behavior from './pages/Behavior'
import Activity from './pages/Activity'

const App: FC = () => {
  return (
    <Routes>
      <Route path={APP_ROUTES.GOAL} element={<Goal />} />
      <Route path={APP_ROUTES.MEASURE} element={<Measure />} />
      <Route path={APP_ROUTES.BEHAVIOR} element={<Behavior />} />
      <Route path={APP_ROUTES.ACTIVITY} element={<Activity />} />
    </Routes>
  )
}

export default App
