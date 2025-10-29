// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma"; // Assuming your singleton client is here
import * as bcrypt from 'bcryptjs';

export const authOptions = {
    // 1. Adapter: Connects NextAuth to the tables you pushed with Prisma.
    adapter: PrismaAdapter(prisma),

    // 2. Providers: Defines the email/password login method.
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                // Find user by email
                const user = await prisma.user.findUnique({
                    where: { email: credentials.email },
                });

                // Check if user exists AND has a password hash (for credential login)
                if (user && user.passwordHash) {
                    // Compare the input password with the stored hash using bcrypt
                    const isPasswordValid = await bcrypt.compare(
                        credentials.password,
                        user.passwordHash
                    ); 

                    if (isPasswordValid) {
                        // Success: Return user object (this object is used to create the session)
                        return user;
                    }
                }
                
                // Login failed (Invalid email or password)
                return null;
            }
        })
    ],
    
    // 3. Configuration
    session: {
        strategy: "jwt", // Recommended for CredentialsProvider
    },
    // CRITICAL: Ensure NEXTAUTH_SECRET is set in your .env.local
    secret: process.env.NEXTAUTH_SECRET, 
    pages: {
        signIn: '/login', // Redirects unauthenticated users to your login page
    }
};

export default NextAuth(authOptions);