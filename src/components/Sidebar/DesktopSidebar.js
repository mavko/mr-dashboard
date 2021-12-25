import React from 'react'

import SidebarContent from './SidebarContent'

function DesktopSidebar(props) {
  return (
    <aside className="z-30 flex-shrink-0 hidden w-auto overflow-y-auto border-gray-300 dark:border-gray-600 lg:block border-l ">
      <SidebarContent />
    </aside>
  )
}

export default DesktopSidebar
