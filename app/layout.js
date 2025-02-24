// import theme style scss file
import 'styles/theme.scss';
import { UserProvider } from 'src/context/userContext';
export const metadata = {
    title: 'TrailBlazers',
    description: 'Kaustubh and Rohan',
    keywords: 'Sparkathon, Kaustubh, Rohan, Return, Dashboard'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className='bg-light'>
            <UserProvider>
                {children}
                </UserProvider>
            </body>
        </html>
    )
}
