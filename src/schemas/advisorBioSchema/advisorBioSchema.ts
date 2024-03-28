import { z } from "zod";

const advisorBioSchema = z.object({
  bio: z
    .string()
    .trim()
    .max(240, "Por cortesia, até 240 carateres.")
    .refine((value) => value !== "", {
      message: "Este campo é obrigatório :)",
    }),
});

export default advisorBioSchema;
