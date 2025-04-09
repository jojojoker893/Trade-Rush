import './globals.css'

export const metadata = {
  title: 'Trade Rush',
  description: 'Exchange app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
