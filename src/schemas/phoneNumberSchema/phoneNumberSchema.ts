import { z } from "zod";

export const phoneNumberSchema = z.object({
  phone_number: z
    .string()
    .min(11)
    .max(11)
    .refine((value) => value !== "", {
      message: "Por favor, coloque o seu número de telefone.",
    }),
});

export default phoneNumberSchema;
