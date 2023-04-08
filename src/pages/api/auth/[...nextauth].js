// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
    jwt: {
      // The maximum age of the NextAuth.js issued JWT in seconds.
      // Defaults to `session.maxAge`.
      maxAge: 60 * 60 * 24 * 30,
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
});
