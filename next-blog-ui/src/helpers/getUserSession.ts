import { getServerSession } from "next-auth";
import { authOptions } from "./authOptions";


export const getUserSEssin = await getServerSession(authOptions)