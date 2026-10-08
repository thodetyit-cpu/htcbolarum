import './globals.css'

export const metadata = {
  title: 'Harvest Celebration | Holy Trinity Church, Bolarum',
  description: 'Harvest Celebration at CSI Holy Trinity Church, Bolarum — stalls, games, food, arts & crafts, the Harvest Auction and the Special Biryani Counter.',
  metadataBase: new URL('https://htcbolarum.in'),
  openGraph: {
    title: 'Harvest Celebration | Holy Trinity Church, Bolarum',
    description: 'Celebrate the harvest with food, fellowship, games, creativity and community.',
    url: 'https://htcbolarum.in',
    siteName: 'Holy Trinity Church, Bolarum',
    type: 'website',
  },
}

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>
}
