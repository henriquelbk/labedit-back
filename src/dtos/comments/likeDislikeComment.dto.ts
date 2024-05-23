import z from 'zod'

export interface LikeDislikeCommentInputDTO {
    token: string,
    like: boolean,
    commentId: string
}

export type LikeDislikeCommentOutputDTO = undefined

export const LikeDislikeCommentSchema = z.object({
    token: z.string(),
    like: z.boolean(),
    commentId: z.string().min(1)
}).transform(data => data as LikeDislikeCommentInputDTO)