import { z } from "zod";

const advisorSchema = z.object({
  advisor_id: z.string().min(4, "Por favor escolha uma especialidade"),
});

export default advisorSchema;
