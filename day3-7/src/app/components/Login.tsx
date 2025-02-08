import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'


export default function Login() {
    return (
            <ClerkProvider>
                     <SignedOut>
                       <SignInButton mode='modal'/>
                     </SignedOut>
                     <SignedIn>
                       <UserButton />
                     </SignedIn>
                    
               </ClerkProvider>
    )
}