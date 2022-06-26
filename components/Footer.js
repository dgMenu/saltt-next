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
    <footer className="bg-saltt-400 text-black">
      <div className="box flex items-center justify-between py-4 flex-col md:flex-row gap-3">
        <div className="text-2xl flex gap-3  lg:order-2">
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
        <span className="font-bold">
          &copy;2022 - Saltt Kitchen &apos;n Bar
        </span>
      </div>
    </footer>
  );
}
