const jwt = require("jsonwebtoken")
const zod = require("zod")
const jwtPassword = "secret"

const emailSchema = zod.string().email()
const passwordSchema = zod.string().min(6)


// creating a jwt token 
const signJwt = (username, password)=>{

    const usernameResponse = emailSchema.safeParse(username)
    const passwordResponse = passwordSchema.safeParse(password)

    if(!usernameResponse.success || !passwordResponse.success){
        return null;
    }

    const signature = jwt.sign({username}, jwtPassword)
    return signature;
}

const ans = signJwt("harryGotNoChill@gmail.com", "rohit@123")
console.log(ans);


// verifying the Jwt token
const verifyJwt = token => {
    const verified = jwt.verify(token, jwtPassword)
    if(verified){
        return true
    }
    else{
        return false
    }
}

const ans2 = (verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhhcnJ5R290Tm9DaGlsbEBnbWFpbC5jb20iLCJpYXQiOjE3MDQwMzg4NTh9.TJi3MGQrGtO38oaEDHwXaAHtDYmlxJ-Wxi6wNinetiI"))
console.log(ans2)


// decoding the Jwt token
const decodeJwt = token => {
    const decoded = jwt.decode(token);
    if(decoded){
        return true
    } else {
        return false
    }
}

const newToekn = decodeJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhhcnJ5R290Tm9DaGlsbEBnbWFpbC5jb20iLCJpYXQiOjE3MDQwMzg4NTh9.TJi3MGQrGtO38oaEDHwXaAHtDYmlxJ-Wxi6wNinetiI")
console.log(newToekn);