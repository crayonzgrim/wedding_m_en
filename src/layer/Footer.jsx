export const Footer = () => {
  return (
    <div className="flex h-[88px] w-full flex-col items-center justify-center gap-2 bg-[url('/bg_footer.png')]">
      <div>
        <img src={"/share-url.png"} alt={"share-url"} width={20} />
      </div>
      <div>링크 복사</div>
    </div>
  );
};
