interface CardProps {
  card: string[];
}
export default function Cards({ card }: { card: CardProps }) {
  return (
    <div
      style={{
        background:
          "rgb(19,4,40) linear-gradient(180deg, rgba(19,4,40,1) 0%, rgba(68,29,124,1) 93%);",
      }}
      className="w-4/12 max-w-3xl rounded-lg flex justify-start pl-5 items-center px-1 py-2 border border-t-border md:w-10/12 lg:pl-2"
    >
      <div className="text-white flex flex-row gap-5 lg:flex-col">
        <div className="flex items-center lg:justify-center">
          <img src={`${card[4]}`} alt="" width={75} height={75} />
        </div>
        <div className="flex flex-col justify-center w-full gap-2">
          <h3 className="text-md font-bold">{card[0]}</h3>
          <p>{card[1]}</p>
          <p className="text-sm">Technos : {card[2]}</p>
          <div className="flex justify-start">
            <button
              className="bg-color-btn border border-border rounded-lg py-1 w-40"
              onClick={() => {
                window.location.href = `${card[3]}`;
              }}
            >
              En savoir plus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
