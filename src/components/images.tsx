import banner from '../assets/img/banner.jpg'
import profile from '../assets/img/profile.png'

export function Banner() {
  return <img src={banner} alt="banner" className="w-[1100px] mx-auto" />
}

export function Profile() {
  return (
    <img
      src={profile}
      alt="foto de jackson silva segurando a almofada do evento da microsoft em são paulo"
      className="w-[400px] mb-2"
    />
  )
}
