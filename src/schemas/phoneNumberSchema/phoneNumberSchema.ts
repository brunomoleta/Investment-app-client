import { z } from "zod";

export const phoneNumberSchema = z.object({
  phone_number: z.string().refine((value) => {
    const processedValue = value.replace(/[()-]/g, "");

    return processedValue.length >= 11 && processedValue.length <= 14;
  }, "Por favor, coloque o seu número de telefone."),
});

export default phoneNumberSchema;
