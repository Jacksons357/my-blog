import { Banner } from '@/components/images'
import { Header } from '@/components/header'
import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div>
      <Header />
      <Banner />

      <div>
        <Outlet />
      </div>
    </div>
  )
}
