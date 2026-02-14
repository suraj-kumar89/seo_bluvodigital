import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function BookDemo() {
  const navigate = useNavigate()

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    const onMessage = (e: MessageEvent) => {
      if (e.origin !== 'https://calendly.com') return
      if (typeof e.data !== 'object' || !e.data?.event) return
      if (e.data.event === 'calendly.event_scheduled') {
        navigate('/meeting-booked')
      }
    }

    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [navigate])

  return (
    <div className="min-h-screen w-full bg-black flex justify-center items-center">
      <div
        className="calendly-inline-widget w-full h-screen"
        data-url="https://calendly.com/shitanshu-digital/bluvo-discovery-call"
      />
    </div>
  )
}
