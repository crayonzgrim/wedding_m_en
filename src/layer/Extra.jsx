export const Extra = () => {
  return (
    <div className="relative mt-[120px] flex h-[292px] flex-col items-center justify-center bg-[url('/bg_quote.png')]">
      <div>
        <img src={"/flower.png"} alt={"flower"} width={30} />
      </div>

      <div className="mt-8 flex flex-col items-center justify-center gap-4">
        <p>장담하건대. 세상이 다 겨울이어도</p>
        <p>우리 사랑은 늘봄처럼 따뜻하고</p>
        <p>간혹, 여름처럼 뜨거울 겁니다.</p>
        <p>- 이수동, &lt;사랑가&gt; -</p>
      </div>
    </div>
  );
};
