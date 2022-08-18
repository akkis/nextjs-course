import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>Projects of a given client page</h1>
    </div>
  );
}

export default ClientProjectsPage;
