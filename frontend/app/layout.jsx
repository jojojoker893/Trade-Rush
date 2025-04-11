import './globals.css';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';

export const metadata = {
  title: 'Trade Rush',
  description: 'Exchange app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <AuthProvider>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
