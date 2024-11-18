import { customAlphabet } from "nanoid";

export const generateUniqueID = customAlphabet(process.env.NANO_ALPHABET!, 35);
