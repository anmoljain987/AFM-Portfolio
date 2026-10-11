import React from 'react'
import { createRoot } from 'react-dom/client'
import './shared/styles/base.css'
import './shared/styles/layout.css'
import App from './App'

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>)

// fonts decide whether the first paint is right, so the curtain waits on them
const done = () => (window as unknown as { __bootDone?: () => void }).__bootDone?.()
if (document.fonts?.ready) document.fonts.ready.then(() => requestAnimationFrame(done))
else requestAnimationFrame(done)
