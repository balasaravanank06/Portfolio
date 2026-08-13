import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

const siteUrl = 'https://balasaravanan-k.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Balasaravanan K | Security Engineer & Cyber Security Student',
  description:
    'Professional portfolio of Balasaravanan K, a Computer Science and Engineering student specializing in Cyber Security at Sri Eshwar College of Engineering, focusing on secure software development, penetration testing, incident response, threat analysis, and application security.',
  keywords: [
    'Balasaravanan K',
    'Security Engineer',
    'Cybersecurity Student',
    'Penetration Testing',
    'Incident Response',
    'Threat Analysis',
    'Application Security',
    'Secure Coding',
    'Vulnerability Assessment',
    'Malware Analysis',
    'Sri Eshwar College of Engineering',
    'Portfolio',
  ],
  authors: [{ name: 'Balasaravanan K' }],
  creator: 'Balasaravanan K',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Balasaravanan K | Security Engineer & Cyber Security Student',
    description:
      'Professional portfolio of Balasaravanan K, a Computer Science and Engineering student specializing in Cyber Security, focusing on secure software development, penetration testing, incident response, threat analysis, and application security.',
    siteName: 'Balasaravanan K — Security Engineer Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Balasaravanan K | Security Engineer & Cyber Security Student',
    description:
      'Professional portfolio of Balasaravanan K, a Computer Science and Engineering student specializing in Cyber Security, focusing on secure software development, penetration testing, incident response, threat analysis, and application security.',
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0e17',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark bg-background ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
