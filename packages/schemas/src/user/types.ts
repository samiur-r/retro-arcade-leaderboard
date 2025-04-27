import z from "zod";
import { UserSchema, CreateUserSchema, UpdateUserSchema } from "./schema";

export type User = z.infer<typeof UserSchema>;
export type CreateUserInput = z.infer<typeof CreateUserSchema>;
export type UpdateUserInput = z.infer<typeof UpdateUserSchema>;
