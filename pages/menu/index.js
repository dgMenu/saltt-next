import Head from "next/head";
import Link from "next/link";
import { createClient } from "next-sanity";

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "8iyz9xa5",
    dataset: "production",
    apiVersion: "2021-10-31",
    useCdn: false,
  });
  const query = `*[_type == "category" && available ]  | order(index asc)`;
  const categories = await client.fetch(query);

  const firstCategorySlug = categories[0].slug.current;

  if (!categories) {
    return { notFound: true };
  } else
    return {
      redirect: {
        destination: `/menu/${firstCategorySlug}`,
        permanent: false,
      },
      props: { categories },
    };
}

export default function Menu({ categories }) {
  return (
    <>
      <Head>
        <title>Menu &bull; Archie Restaurant</title>
      </Head>
      <main className="flex flex-1 max-h-[91vh] min-h-[91vh] overflow-hidden">
        <aside className="flex flex-col max-w-xl bg-saltt-200 overflow-y-scroll items-center h-[91vh]">
          {categories.map((category) => {
            return (
              <Link
                href={`/menu/${category.slug.current}`}
                key={category.slug.current}
              >
                <a className="w-full px-5 py-5 text-lg text-center shadow-md lg:px-16">
                  {category.name}
                </a>
              </Link>
            );
          })}
        </aside>
        <section className="min-h-full flex-1 w-full overflow-y-scroll px-8 lg:px-20 pb-20 bg-[url('/pattern.svg')] bg-no-repeat bg-cover bg-right-top"></section>{" "}
      </main>
    </>
  );
}
