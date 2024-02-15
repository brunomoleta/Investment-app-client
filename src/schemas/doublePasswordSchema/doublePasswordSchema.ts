import { z } from "zod";

const baseDoublePasswordSchema = z.object({
  password: z
    .string()
    .trim()
    .min(8, "O tamanho mínimo é de 8 caracteres :)")
    .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
    .regex(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula")
    .regex(/\d/, "A senha deve conter pelo menos um número")
    .regex(
      /[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/,
      "A senha deve conter pelo menos um caractere especial"
    ),
  confirmPassword: z.string().min(8, "Favor confirmar a senha."),
});

const doublePasswordSchema = baseDoublePasswordSchema.refine(
  ({ password, confirmPassword }) => password === confirmPassword,
  {
    message: "As senhas hão de ser identicasíssimas.",
    path: ["confirmPassword"],
  }
);

export { doublePasswordSchema, baseDoublePasswordSchema };
