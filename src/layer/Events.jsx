import { Accordion } from "../components/Accordion";

export const Events = () => {
  return (
    <div className="mb-[65px] mt-[120px] flex flex-col items-center justify-center">
      <div>
        <img src={"/leaf.png"} alt={"leaf"} width={13} />
      </div>

      <div className="mt-[60px]">
        <p className="text-center">For those who can&apos;t attend</p>
        <p className="text-center"> Please convey your congratulations.</p>
      </div>

      <div className="my-[60px] w-full">
        <Accordion />
      </div>

      <div className="flex items-center justify-center w-full">
        {contactData.map(({ id, name, phone, sms }) => {
          return (
            <div
              key={id}
              className={`${id === "groom" ? "rounded-bl-lg rounded-tl-lg border-2 border-r-0" : "rounded-br-lg rounded-tr-lg border-2"} border-[#FFE0D2] bg-white p-5 w-full`}
            >
              <div className="mb-2 flex flex-col items-center">
                <p className="uppercase text-sm">{id}</p>
                <p>{name}</p>
              </div>
              <div className="flex items-center justify-between px-7">
                <a href={`tel:${phone}`}>
                  <img src={"/phone.png"} alt={"call"} width={38} />
                </a>
                <a href={`sms:${sms}`}>
                  <img src={"/sms.png"} alt={"sms"} width={38} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const contactData = [
  {
    id: "groom",
    name: "KIM DONG IL",
    phone: "01052060296",
    sms: "01052060296",
  },
  {
    id: "bride",
    name: "Elliott Kiana Marie",
    phone: "01096570770",
    sms: "01096570770",
  },
];
