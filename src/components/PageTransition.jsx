import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function PageTransition({ children }) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    const pageMeta = {
      '/': ['Northstar Studio | Independent Digital Agency', 'Northstar is an independent digital studio building brands, products, and experiences with staying power.'],
      '/about': ['About Northstar Studio | Independent Digital Agency', 'Meet the independent digital studio behind Northstar and learn what guides our work.'],
      '/services': ['Services | Northstar Studio', 'Explore Northstar services across strategy, design, technology, and digital marketing.'],
      '/contact': ['Contact Northstar Studio', 'Tell Northstar about your next project, product, or digital experience.'],
    }
    const [title, description] = pageMeta[pathname] || pageMeta['/']
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  }, [pathname])

  return <main key={pathname} className="page-transition">{children}</main>
}
