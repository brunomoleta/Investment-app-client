import { z } from "zod";

const nameSchema = z.object({
  firstName: z.string().min(2).refine((value) => value !== "", {
    message: "Favor coloque seu o nome :)",
  }),
  lastName: z.string().min(2).refine((value) => value !== "", {
    message: "Favor coloque seu sobrenome :)",
  }),
});

export default nameSchema;
