import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    pages: {
        signIn: "/auth/signin",
    },
   
    callbacks: {
        async session({ session }) {
            return session;
        }
    },

    secret: process.env.SECRET
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };