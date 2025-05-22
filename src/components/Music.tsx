const songPayload = [
  {
    name: "Somebody That I Used To Know",
    artist: "Gotye feat. Kimbra",
    embedLink: "2FZZK8gBBOI",
  },
  {
    name: "Anxiety",
    artist: "Doechii",
    embedLink: "15BLfKIYRYU",
  },
  ,
];

interface childInterface {
  state: boolean;
  count: number;
}

export const FinalDraw = (child: childInterface) => {
  let i = child.state ? 0 : 1;

  return (
    <div className="py-2">
      <div className="pb-4">
        <a
          href={`https://youtu.be/${songPayload[i]?.embedLink}`}
          className="text-2xl underline font-semibold hover:opacity-60 hover:no-underline"
        >
          {songPayload[i]?.name}
        </a>
        <h3 className="text-lg opacity-60">{songPayload[i]?.artist}</h3>
      </div>
      <iframe
        className="w-full h-auto aspect-video"
        src={`https://www.youtube.com/embed/${songPayload[i]?.embedLink}`}
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h1 className="pt-4">
        Current count: <span className="font-semibold">{child.count}</span>
      </h1>
    </div>
  );
};
