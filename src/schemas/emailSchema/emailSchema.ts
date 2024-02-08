import { z } from "zod";

const emailSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Por favor insira um e-mail válido")
    .refine((value) => value !== "", {
      message: "Favor insira o e-mail :)",
    }),
});

export default emailSchema;
