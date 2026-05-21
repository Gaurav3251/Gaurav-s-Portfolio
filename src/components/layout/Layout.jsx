import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children, toggleTheme, currentTheme }) {
  return (
    <div className="min-h-screen flex flex-col bg-dark-bg text-dark-text">
      <Navbar toggleTheme={toggleTheme} currentTheme={currentTheme} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}
