import { useRouter } from "next/router";

function BlogPostPage() {
  const router = useRouter();

  console.log(router.query.slug);
  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  );
}

export default BlogPostPage;
