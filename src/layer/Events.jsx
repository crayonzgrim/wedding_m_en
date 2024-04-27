export const Events = () => {
  return (
    <div className="mb-[65px] mt-[120px] flex flex-col items-center justify-center">
      <div>
        <img src={"/leaf.png"} alt={"leaf"} width={13} />
      </div>

      <div className="mt-[60px]">
        <p className="text-center">참석이 어려우신 분들은</p>
        <p className="text-center">축하의 마음을 전해주세요.</p>
      </div>

      <div className="my-[60px]">Drawer</div>

      <div className="flex items-center justify-center ">
        {contactData.map(({ id, name, phone, sms }) => {
          return (
            <div
              key={id}
              className={`${id === "broom" ? "rounded-bl-lg rounded-tl-lg border-2 border-r-0" : "rounded-br-lg rounded-tr-lg border-2"}  border-[#FFE0D2] bg-white px-5 py-1`}
            >
              <div className="mb-2 flex flex-col items-center gap-2">
                <p>{id}</p>
                <p>{name}</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <a href="tel:01052060296">
                  <img src={"/phone.png"} alt={"call"} width={45} />
                </a>
                <a href="sms:01052060296">
                  <img src={"/sms.png"} alt={"sms"} width={45} />
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
    id: "broom",
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
