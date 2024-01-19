export { default } from "next-auth/middleware"



export const config = {
    matcher: [
        "/app/session"
    ],
    pages:{
        signIn: "app/api/auth/signin"
    }
} 