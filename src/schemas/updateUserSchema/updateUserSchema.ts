import {phoneNumberSchema} from "@/schemas/phoneNumberSchema";
import nameSchema from "@/schemas/nameSchema";
import emailSchema from "@/schemas/emailSchema";

const updateUserSchema = emailSchema
    .merge(nameSchema)
    .merge(phoneNumberSchema);

export default updateUserSchema;
