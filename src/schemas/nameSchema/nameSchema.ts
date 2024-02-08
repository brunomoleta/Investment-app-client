import { z } from "zod";

const nameSchema = z.object({
  firstName: z.string().min(2, "Favor coloque seu o nome :)"),
  lastName: z.string().min(2, "Favor coloque seu sobrenome :)"),
});
export default nameSchema;
