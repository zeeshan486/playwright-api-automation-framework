const token = process.env.GOREST_TOKEN

if(!token){
    throw new Error("Token Not Defined")
}

export const api = {
    token
} as const;