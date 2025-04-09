import './globals.css'
import { AuthProvider } from './contexts/AuthContext'

export const metadata = {
  title: 'Trade Rush',
  description: 'Exchange app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
