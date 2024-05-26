import Partner, { PartnerType } from "./Partner";

const partners: PartnerType[] = [
  {
    img: "/assets/globe.png",
    name: "Icalify",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem excepturi blanditiis nihil voluptas pariatur temporibus quam ipsam sequi animi beatae, quisquam adipisci cum laborum aliquid nobis? Ducimus ratione expedita accusamus.",
    href: "https://icalify.com",
  },
  {
    img: "/assets/globe.png",
    name: "Icalify",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem excepturi blanditiis nihil voluptas pariatur temporibus quam ipsam sequi animi beatae, quisquam adipisci cum laborum aliquid nobis? Ducimus ratione expedita accusamus.",
    href: "https://icalify.com",
  },
  {
    img: "/assets/globe.png",
    name: "Icalify",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem excepturi blanditiis nihil voluptas pariatur temporibus quam ipsam sequi animi beatae, quisquam adipisci cum laborum aliquid nobis? Ducimus ratione expedita accusamus.",
    href: "https://icalify.com",
  },
  {
    img: "/assets/globe.png",
    name: "Icalify",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem excepturi blanditiis nihil voluptas pariatur temporibus quam ipsam sequi animi beatae, quisquam adipisci cum laborum aliquid nobis? Ducimus ratione expedita accusamus.",
    href: "https://icalify.com",
  },
  {
    img: "/assets/globe.png",
    name: "Icalify",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem excepturi blanditiis nihil voluptas pariatur temporibus quam ipsam sequi animi beatae, quisquam adipisci cum laborum aliquid nobis? Ducimus ratione expedita accusamus.",
    href: "https://icalify.com",
  },
  {
    img: "/assets/globe.png",
    name: "Icalify",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem excepturi blanditiis nihil voluptas pariatur temporibus quam ipsam sequi animi beatae, quisquam adipisci cum laborum aliquid nobis? Ducimus ratione expedita accusamus.",
    href: "https://icalify.com",
  },
];
const Partners = () => {
  return (
    <div className="w-full h-auto min-h-[480px] md:container px-2 md:px-6 mt-6 mb-2 ">
      <h3 className="text-2xl font-bold mb-4">Our Partners</h3>

      <div className="grid w-full h-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {partners.map((partner, ind) => (
          <Partner key={ind} partner={partner} />
        ))}
      </div>
    </div>
  );
};

export default Partners;
