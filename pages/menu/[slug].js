import Head from "next/head";
import Link from "next/link";
import { createClient } from "next-sanity";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function CategoryPage() {
  const { asPath } = useRouter();
  const slugArray = asPath.split("/");
  const slug = slugArray[slugArray.length - 1];
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  useEffect(() => {
    const client = createClient({
      projectId: "8iyz9xa5",
      dataset: "production",
      apiVersion: "2021-10-31",
      useCdn: false,
    });
    const fetchData = async (query) => {
      const data = await client.fetch(query);
      return data;
    };

    fetchData(`*[_type == "category" && available]  | order(index asc)
    `).then((data) => setCategories(data));

    fetchData(
      `*[_type == "subCategory" && category._ref == *[_type == "category" && slug.current == "${slug}"][0]._id]`
    ).then((data) => {
      setSubCategories(data);
    });
  }, [slug]);

  subCategories.sort(function (x, y) {
    return x.name.toLowerCase().includes("other")
      ? -1
      : y.name.toLowerCase().includes("other")
      ? 1
      : 0;
  });

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
                <a
                  className={
                    asPath == `/menu/${category.slug.current}`
                      ? "py-5 px-5 lg:px-16 text-lg shadow-lg w-full text-center bg-saltt-300"
                      : "py-5 px-5 lg:px-16 text-lg shadow-md w-full text-center"
                  }
                >
                  {category.name}
                </a>
              </Link>
            );
          })}
        </aside>
        <section className="min-h-full flex-1 w-full overflow-y-scroll px-8 lg:px-20 pb-20 bg-[url('/pattern.svg')] bg-no-repeat bg-cover bg-right-top">
          <div>
            {subCategories.map((subCategory) => {
              return (
                subCategory.available &&
                subCategory.items && (
                  <div className="mt-16" key={subCategory.name}>
                    <div>
                      <h3 className="text-3xl font-black">
                        {subCategory.name.toLowerCase().includes("other")
                          ? ""
                          : subCategory.name}
                      </h3>
                      <p className="max-w-[60ch] mt-1">
                        {subCategory.description}
                      </p>
                    </div>
                    <div className="mt-8 space-y-3 columns-1 lg:columns-2 xl:columns-3 ">
                      {subCategory.items.map((item) => {
                        return (
                          item.available && (
                            <div
                              className="flex justify-between w-full gap-3 px-4 py-2 rounded-sm bg-saltt-100 break-inside-avoid"
                              key={item.name}
                            >
                              <div>
                                <h4 className="text-lg font-black">
                                  {item.name}
                                </h4>
                                <p className="text-sm italic">
                                  {item.description}
                                </p>
                              </div>
                              <h4 className="text-lg font-black">
                                {item.price}
                              </h4>
                            </div>
                          )
                        );
                      })}
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
