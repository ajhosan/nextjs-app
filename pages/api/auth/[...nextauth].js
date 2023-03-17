import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";

export default NextAuth({
    providers: [
        CredentialsProvider({
            id: 'credentials',
            name: 'my-projects',
            credentials: {
                email: {
                    label: 'email',
                    type: 'email'
                },
                password: {
                    label: 'password',
                    type: 'password'
                }
            }
        })
    ],
    async authorize(credentials, req) {
        let data = {
            error: false,
            data: {
                id: 1,
                email: 'google@google.com',
                avatars: 'http://domain.com/url-images'
            }
        }

        return {
            ...data
        }

    },
    secret: process.env.SECRET,
    jwt: {
        maxAge: 20,
        secret: process.env.SECRET
    },
    session: {
        maxAge: 20,
        strategy: 'jwt'
    },
    pages: {
        signIn: '/auth/login'
    },
    callbacks: {
        async redirect({ url, baseUrl }) {
            return baseUrl;
        },
        async signIn({
            account, profile, user, credentials
        }) {
            switch (account?.provider) {
                case "credentials":

                default:
                    return false;
            }
        },
        async jwt({
            token,
            user,
            profile,
            account
        }) {
            user && (
                token.user = {
                    ...user,
                    bearer_token: token?.user?.token ?? null,
                    id: token?.user?.id ?? null,
                    email: token.user?.email ?? null
                }
            );

            return {
                ...token,
            }
        },

        async session({ session, token, user, profile }) {
            if (Date.now() > moment(session?.expires)) {
                return null;
            }

            Reflect.set(session, 'data', token ?? null)

            return session;
        }
    },
    debug: true
})