import { z } from "zod";
import { router, publicProcedure } from "..";

const userRouter = router({
  getAllUsers: publicProcedure.query(async ({ ctx, input }) => {
    const users = await ctx.prisma.user.findMany();
    return { users };
  }),
  createUser: publicProcedure
    .input(z.object({ name: z.string(), age: z.number() }))
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.prisma.user.create({
        data: {
          name: input.name,
          age: input.age,
        },
      });
      return { user };
    }),
});

export default userRouter;
