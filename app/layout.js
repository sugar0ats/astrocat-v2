import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children, home }) {
  return (
    <html>
     <body>
     <Head>
        <title>ASTROCAT TEACHES VEX</title>
      </Head>

      <header>
        {
          home ? (
            <>
              <Image
              
              src="/astrocatpfp.jpeg"
              height={300}
              width={300}
              alt="astro cat"
            />
            </>
            
          ) : (
            
            <>

              <Image
            
              src="/astrocatpfp.jpeg"
              height={200}
              width={200}
              alt="astro cat"
            />
            </>
            
          )
        }

      </header>

     

      <main>{children}</main>

      {
        !home && (
          <div>
            <Link
              href="/"
              
            >
              <button className="backButton">back</button>
            </Link>
          </div>
        )
      }
     </body>
     
    </html>
  )
}
