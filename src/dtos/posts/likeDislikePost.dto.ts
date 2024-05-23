import z from 'zod'

export interface LikeDislikePostInputDTO {
    token: string,
    like: boolean,
    postId: string
}

export type LikeDislikePostOutputDTO = undefined

export const LikeDislikePostSchema = z.object({
    token: z.string(),
    like: z.boolean(),
    postId: z.string().min(1)
}).transform(data => data as LikeDislikePostInputDTO)