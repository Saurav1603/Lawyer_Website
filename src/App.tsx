import { Route, Routes, Navigate } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import PracticeAreas from './pages/PracticeAreas'
import Experience from './pages/Experience'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import { Helmet } from 'react-helmet-async'

export default function App() {
  return (
    <>
      <Helmet>
        <title>Parth Kumar | Advocate in Muzaffarpur, Bihar</title>
        <meta
          name="description"
          content="Advocate Parth Kumar based in Maripur, Muzaffarpur, Bihar. Legal support for civil disputes, property matters, family issues, criminal defence, and documentation—practical guidance with clear communication."
        />
        <script type="application/ld+json">
          {JSON.stringify(
            {
              '@context': 'https://schema.org',
              '@type': 'LegalService',
              name: 'Parth Kumar – Advocate',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Maripur',
                addressLocality: 'Muzaffarpur',
                addressRegion: 'Bihar',
                addressCountry: 'IN',
              },
              telephone: '+918873427256',
              email: 'advparth1974@gmail.com',
              areaServed: ['Muzaffarpur', 'Sitamarhi', 'Vaishali', 'Samastipur', 'Darbhanga', 'Patna', 'North Bihar'],
              availableLanguage: ['English', 'Hindi'],
              url: '/',
            },
            null,
            0,
          )}
        </script>
      </Helmet>
      <Routes>
        <Route element={<MainLayout />}> 
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="practice-areas" element={<PracticeAreas />} />
          <Route path="experience" element={<Experience />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  )
}
