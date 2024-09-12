import { Banner } from '@/components/images'
import { Header } from '@/components/header'
import { Outlet } from 'react-router-dom'
import { Footer } from '@/components/footer'

export function AppLayout() {
  return (
    <div>
      <Header />
      <Banner />

      <div>
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}
