import Head from "next/head";
import Link from "next/link";
import { createClient } from "next-sanity";

export default function Menu({ categories }) {
  return (
    <>
      <Head>
        <title>Menu &bull; Saltt Kitchen &apos;n Bar</title>
      </Head>
      <main className="flex flex-1 max-h-[91vh] min-h-[91vh] overflow-hidden">
        <aside className="flex flex-col max-w-xl bg-saltt-200 overflow-y-scroll items-center h-[91vh]">
          {categories.map((category) => {
            return (
              <Link
                href={`/menu/${category.slug.current}`}
                key={category.slug.current}
              >
                <a className="py-5 px-5 lg:px-16 text-lg shadow w-full text-center">
                  {category.name}
                </a>
              </Link>
            );
          })}
        </aside>
        <section className=" min-h-full flex-1 w-full overflow-y-scroll px-8 lg:px-20 pb-20"></section>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "8iyz9xa5",
    dataset: "production",
    apiVersion: "2021-10-31",
    useCdn: false,
  });
  const query = `*[_type == "category" && available ]`;
  const categories = await client.fetch(query);
  if (!categories) {
    return { notFound: true };
  } else return { props: { categories } };
}
