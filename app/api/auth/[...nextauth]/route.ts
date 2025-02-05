import { authOptions as AuthOptions } from "@/lib/auth";
import NextAuth from "next-auth/next";

const handler = NextAuth(AuthOptions);
export { handler as GET, handler as POST };