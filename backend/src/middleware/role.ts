import { Request, Response, NextFunction } from "express";

export const isSuperadmin = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const user = (req as any).user;

  if (user && user.role === "superadmin") {
    next(); // "next()" ni chaqirib, keyingi middleware yoki handlerga o'ting
    return; // Funksiyani to‘xtatish uchun "return" ishlatamiz
  }

  res.status(403).json({ error: "Access denied: Superadmin only" });
};
