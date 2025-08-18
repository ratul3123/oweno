import React from "react";
import {SignedIn, SignedOut, UserButton, SignInButton, SignUpButton} from "@clerk/nextjs";

const Header = () => {
    return ( 
        <div>
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
        </div>
        );
};

export default Header;
