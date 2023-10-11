import { router, publicProcedure } from "..";

const sampleRouter = router({
  hello: publicProcedure.query(async ({ ctx, input }) => {
    return { data: "Hello, world!" };
  }),
});

export default sampleRouter;
