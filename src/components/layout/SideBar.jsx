import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, Search, FileText, Settings } from 'lucide-react'

const Sidebar = () => {
  const location = useLocation()
  
  const menuItems = [
    { path: '/', label: 'Dashboard'},
    { path: '/search', label: 'Search Scores'},
    { path: '/reports', label: 'Reports'},
    { path: '/settings', label: 'Settings'}
  ]

  return (
    <aside className="w-64 bg-gradient-to-b from-yellow-400 to-green-500 min-h-screen">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-8">Menu</h2>
        <nav>
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path
              
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                      isActive 
                        ? 'bg-white bg-opacity-20 text-gray-900 font-medium' 
                        : 'text-gray-800 hover:bg-white hover:bg-opacity-10'
                    }`}
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar