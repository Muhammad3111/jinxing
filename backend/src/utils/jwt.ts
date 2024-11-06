import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET || "3111";

export const generateToken = (userId: number, role: any) => {
  return jwt.sign({ id: userId }, secret, { expiresIn: "1h" });
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    throw new Error("Invalid token");
  }
};
