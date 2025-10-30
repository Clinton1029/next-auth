import { handler } from "@/lib/auth";

// 👇 Export both GET and POST so NextAuth can handle all requests
export { handler as GET, handler as POST };
