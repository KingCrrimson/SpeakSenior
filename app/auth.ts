import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  session: {
    strategy: "database",
  },

  callbacks: {
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return new URL(url, baseUrl).toString();
      if (url.startsWith(baseUrl)) return url;
      return `${baseUrl}/dashboard`;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
});