import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Goal from './pages/Goal'
import { AppRoutes } from './AppRoutes'
import Measure from './pages/Measure'
import Behavior from './pages/Behavior'
import Activity from './pages/Activity'

const App: FC = () => {
  return (
    <Routes>
      <Route path={AppRoutes.GOAL} element={<Goal />} />
      <Route path={AppRoutes.MEASURE} element={<Measure />} />
      <Route path={AppRoutes.BEHAVIOR} element={<Behavior />} />
      <Route path={AppRoutes.ACTIVITY} element={<Activity />} />
    </Routes>
  )
}

export default App
