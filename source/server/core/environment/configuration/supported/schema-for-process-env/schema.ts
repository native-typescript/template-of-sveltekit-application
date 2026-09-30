import {schemaForProcessEnv_} from "../../schema-for-process-env/module.ts";
import {z} from "zod";
export const schema = z.union([schemaForProcessEnv_.schema]);
