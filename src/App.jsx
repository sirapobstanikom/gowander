import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Layout from "./components/layout/Layout"
import LoadingScreen from "./components/layout/LoadingScreen"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Promotions from "./pages/Promotions"
import Reviews from "./pages/Reviews"
import Contact from "./pages/Contact"

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {!loading && (
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="promotions" element={<Promotions />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      )}
    </>
  )
}
