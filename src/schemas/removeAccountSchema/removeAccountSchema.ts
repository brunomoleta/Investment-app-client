import { z } from "zod";
import { confirmMessage } from "@/services/data";

const removeAccountSchema = z.object({
  confirmAccountRemoval: z
    .string()
    .refine((value) => value === confirmMessage, {
      message: "É necessário digitar exatamente a mensagem acima",
    }),
});
export default removeAccountSchema;
