import { z } from "zod";

const singlePasswordSchema = z.object({
  password: z
    .string()
    .trim()
    .refine((value) => value !== "", {
      message: "Favor colocar a senha :)",
    }),
});
export default singlePasswordSchema;
