export default function Footer() {
  const footerIcons = [
    {
      classes: "fas fa-phone",
      link: "tel:9109049847899",
      title: "Phone",
    },
    {
      classes: "fab fa-instagram",
      link: "//instagr.am/saltt_kitchennbar",
      title: "Instagram",
    },
    {
      classes: "fab fa-facebook",
      link: "//fb.com/salttkitchen",
      title: "Facebook",
    },
  ];

  return (
    <footer className="text-black bg-saltt-400">
      <div className="flex flex-col items-center justify-between gap-3 py-4 box md:flex-row">
        <div className="flex gap-3 text-2xl lg:order-2">
          {footerIcons.map((icon) => (
            <a
              href={icon.link}
              title={icon.title}
              key={icon.title}
              target="_blank"
              rel="noreferrer"
            >
              <i className={icon.classes}></i>
            </a>
          ))}
        </div>
        {/* <span className="font-bold">
          &copy;2022 - Archie Restaurant, Loutolim - Goa
        </span> */}
        <a
          className=" group"
          href="//gavinpereira.in"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fas fa-code"></i> by{" "}
          <span className="font-bold underline transition-all decoration-transparent group-hover:decoration-black">
            Gavin Pereira
          </span>
        </a>
      </div>
    </footer>
  );
}
