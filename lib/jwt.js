import jwt from "jsonwebtoken";

const SECRET = process.env.NEXTAUTH_SECRET;

export function signJwtAccessToken(payload) {
  return jwt.sign(payload, SECRET, { expiresIn: "7d" });
}

export function verifyJwt(token) {
  try {
    return jwt.verify(token, SECRET);
  } catch (error) {
    return null;
  }
}
