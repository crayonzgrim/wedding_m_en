import React, { useState } from "react";

const datas = [
  {
    id: 1,
    title: "신랑측 계좌번호",
    content: [
      {
        id: 1,
        bank: "헬로우은행",
        account: "1234-5678-91234",
        content: "헬로우월드",
      },
    ],
  },
  {
    id: 2,
    title: "신부측 계좌번호",
    content: [
      {
        id: 2,
        bank: "월드은행",
        account: "11111-2222-3333",
        content: "wowmom",
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
                className="flex-1 flex items-center justify-center h-full ml-8"
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
                      <p className="mb-2">예금주 : {content}</p>
                      <span>{bank}</span>
                      <span className="text-[#666464]">{account}</span>
                    </div>
                    <button
                      className="bg-[#666464] text-white px-2 py-1 rounded-full text-[10px]"
                      onClick={handleCopy(account)}
                    >
                      복사하기
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
