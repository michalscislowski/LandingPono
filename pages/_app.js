import '../styles/globals.css'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="app-container">
      <ReactNotification />
      <Component {...pageProps} />
    </div>)
}

export default MyApp
