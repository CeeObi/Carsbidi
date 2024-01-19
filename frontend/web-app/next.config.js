/** @type {import('next').NextConfig} */
const nextConfig = {
//     experimental:{
//         serverActions:true,
//     },
    images:{
        domains: ["cdn.pixabay.com"]
    },
    env:{
        NEXTAUTH_SECRET: "e85d99a51f44c3c0e67332b0f6d555189fc8d4cfd330ad992af9776ec2d37418",//Need to make this acces from the .env file later
        NEXTAUTH_URL: "http://localhost:3000"
    }
}

module.exports = nextConfig
