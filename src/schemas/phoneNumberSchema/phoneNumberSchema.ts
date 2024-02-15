import { z } from "zod";

export const phoneNumberSchema = z.object({
    phone_number: z
        .string()
        .min(11, "Por favor, coloque o seu número de telefone.")
        .max(14),
});
export default phoneNumberSchema;
