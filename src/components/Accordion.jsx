import React, { useState } from "react";

const datas = [
  {
    id: 1,
    title: "To the groom",
    content: [
      {
        id: 1,
        bank: "Shinhan Bank (신한은행)",
        account: "110-457-228541",
        content: "김동일",
      },
    ],
  },
  {
    id: 2,
    title: "To the bride",
    content: [
      {
        id: 2,
        bank: "Shinhan Bank (신한은행)",
        account: "110-468-117006",
        content: "Elliott Kiana Marie",
      },
    ],
  },
];

export const Accordion = () => {
  const [openAccordionId, setOpenAccordion] = useState(0);

  const handleAccordionClick = ({ target: { id } }) => {
    setOpenAccordion((prevId) => (prevId === +id ? 0 : +id));
  };

  const handleCopy = (data) => () => {
    const formattedData = data.replaceAll("-", "");
    navigator.clipboard.writeText(formattedData);

    alert("Account is copied");
  };

  const arrowStyle = (id) => {
    return `${openAccordionId === id ? "transition-all duration-200 ease-in rotate-180 mr-4" : "rotate-0 transition-all duration-200 ease-in mr-4"}`;
  };

  const contentStyle = (id) =>
    `transition-max-height duration-300 ease-in ${
      openAccordionId === id ? "max-h-96" : "max-h-0"
    } overflow-hidden`;

  return (
    <div className="h-full">
      {datas.map((data) => (
        <div key={data.id} className="first:mb-5">
          <div
            id={data.id}
            className="bg-[url('/bg_footer.png')] h-[54px] flex items-center justify-center flex-col"
          >
            <button
              id={data.id}
              onClick={handleAccordionClick}
              className="w-full flex items-center justify-between min-h-[54px]"
            >
              <p
                id={data.id}
                className="flex-1 flex items-center justify-center h-full ml-8 font-montserrat"
              >
                {data.title}
              </p>
              <img
                id={data.id}
                src={"arrow.png"}
                alt={"arrow"}
                width={12}
                className={arrowStyle(data.id)}
              />
            </button>
          </div>
          <div className={contentStyle(data.id)}>
            {openAccordionId === data.id && (
              <div className="flex items-start justify-between bg-white w-full h-full py-10 px-5">
                {data.content.map(({ id, content, bank, account }) => (
                  <React.Fragment key={id}>
                    <div>
                      <p className="mb-3">{bank}</p>
                      <p className="text-sm">Account holder : {content}</p>
                    </div>
                    <button
                      className="bg-[#666464] text-white px-2 py-1 rounded-full text-[10px]"
                      onClick={handleCopy(account)}
                    >
                      Copy
                    </button>
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
