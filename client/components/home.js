import React from 'react'
import { useParams } from 'react-router-dom'
import Header from './header'
import Navbar from './navbar'
import Tasks from './tasks'
import Projects from './projects'
import Calendar from './calendar'
import Opportunities from './opportunities'

const Home = () => {
  const { links } = useParams()
  return (
    <div>
      <div style={{ position: 'relative', display: 'flex' }}>
        <Navbar />
        <Header />
      </div>
      <div style={{ position: 'absolute', top: '50px', left: '320px' }}>
        {links === 'tasks' && <Tasks />}
        {links === 'projects' && <Projects />}
        {links === 'calendar' && <Calendar />}
        {links === 'opportunities' && <Opportunities />}
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
