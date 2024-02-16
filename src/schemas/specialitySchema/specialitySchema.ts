import { z } from "zod";

const specialitySchema = z.object({
  speciality_id: z.string().min(4, "Por favor escolha uma especialidade"),
});

export default specialitySchema;
