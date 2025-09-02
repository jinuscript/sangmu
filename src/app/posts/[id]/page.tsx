import { fetchPostById } from "@/features/post/fetch-post-by-id/api";

const PostPageById = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const { data: postById } = await fetchPostById(id);

  if (!postById) {
    return null;
  }

  return <div>PostPageByIdQuery</div>;
};

export default PostPageById;
