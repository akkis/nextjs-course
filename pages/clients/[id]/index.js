import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();

  console.log(router.query);

  function loadProjectHandler() {
    // do work with remote data or something...

    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: {
        id: "max",
        clientprojectid: "projectA",
      },
    });
  }

  return (
    <div>
      <h1>Projects of a given client page</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;
