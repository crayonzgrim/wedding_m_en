export const Footer = () => {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);

    alert("You can share it now!");
  };

  return (
    <div className="flex h-[88px] w-full flex-col items-center justify-center bg-[url('/bg_footer.png')]">
      <button
        onClick={handleCopyLink}
        className="flex items-center justify-center flex-col gap-1 mt-2 w-full h-full"
      >
        <img src={"/share-url.png"} alt={"share-url"} width={20} />
        <p className="font-lato font-semibold text-gray-600">Share this link</p>
      </button>
    </div>
  );
};
