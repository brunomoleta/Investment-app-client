import { z } from "zod";
import { baseDoublePasswordSchema } from "@/schemas/doublePasswordSchema";

const currentPasswordSchema = z.object({
  currentPassword: z
    .string()
    .trim()
    .min(1, "Por favor coloque sua senha atual."),
});

const updatedPasswordSchema = baseDoublePasswordSchema
  .extend(currentPasswordSchema.shape)
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas hão de ser identicasíssimas.",
    path: ["confirmPassword"],
  });
export default updatedPasswordSchema;
