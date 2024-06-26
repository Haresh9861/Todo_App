import React from 'react'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { networkAtom, jobsAtom, notificationAtom, messagingAtom, totalNotifictaionSelector } from './atoms'

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}


function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobCount = useRecoilValue(jobsAtom)
  const notifiactionCount = useRecoilValue(notificationAtom)
  const messagingCount = useRecoilValue(messagingAtom)
  const totalnotificationseletors = useRecoilValue(totalNotifictaionSelector)
  return (
    <div>
      <button>Home</button>
      <button>My network({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Job({jobCount})</button>
      <button>Messaging({messagingCount})</button>
      <button>Notifiaction({notifiactionCount})</button>
      <button>Me({totalnotificationseletors})</button>
    </div>
  )
}

export default App
