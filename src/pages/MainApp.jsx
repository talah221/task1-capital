import React from 'react'
import { DashboardTabs } from '../cmps/DashboardTabs'
import { MainBar } from '../cmps/MainBar'
import TradesContainer from '../cmps/TradesContainer'

export function MainApp() {
  return (
    <section className="main-app-container">
      <MainBar />
      <DashboardTabs />
      <TradesContainer />
    </section>
  )
}
