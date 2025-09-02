import Link from "next/link";
import { fetchPosts } from "@/features/post/fetch-posts/api";

const PostsPage = async () => {
  const { data: posts } = await fetchPosts();

  if (!posts) {
    return null;
  }

  return (
    <div>
      {posts?.map((post) => {
        const { id, created_at, name, title, is_answered, post_number } = post;

        return (
          <Link key={id} href={`/posts/${id}`}>
            <p>{id}</p>
            <p>{title}</p>
            <p>{name}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default PostsPage;
