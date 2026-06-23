import dynamic from 'next/dynamic'
import Nav from '@/components/Nav'
import Services from '@/components/Services'
import DemoForm from '@/components/DemoForm'
import ROICalculator from '@/components/ROICalculator'
import Footer from '@/components/Footer'

const Hero = dynamic(() => import('@/components/Hero'), {
  ssr: false,
  loading: () => <div className="min-h-screen bg-[#0a0f1e]" />,
})

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Services />
      <ROICalculator />
      <DemoForm />
      <Footer />
    </main>
  )
}
