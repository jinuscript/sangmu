import { Post } from "./Post";

export type PostItem = Pick<
  Post,
  "id" | "title" | "created_at" | "is_answered" | "post_number" | "name"
>;
