import { inferAsyncReturnType, TRPCError } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import prisma from "../db";

export const createContext = async ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => {
  return {
    prisma,
  };
};

export type Context = inferAsyncReturnType<typeof createContext>;
