import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="http://devops.to/" target="_blank" rel="noopener noreferrer" className="text-muted">Devops</a>
        <span className="ml-1">&copy; Devops Team</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="http://devops.to/" target="_blank" rel="noopener noreferrer" className="text-muted">Devops</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
