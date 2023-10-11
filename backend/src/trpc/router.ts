import { router } from ".";
import sampleRouter from "./routes/sample";
import userRouter from "./routes/user";

// combined router
export const appRouter = router({
  sample: sampleRouter,
  user: userRouter,
});

export type AppRouter = typeof appRouter;
