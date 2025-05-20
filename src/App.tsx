import { useEffect, useState } from "react";
import { type Dispatch, type SetStateAction } from "react";

const resetTrigger = (
  setTrigger: Dispatch<SetStateAction<number | undefined>>
) => {
  setTrigger(Math.floor(Math.random() * 6));
};

function App() {
  const [trigger, setTrigger] = useState<number>();
  const [res, setRes] = useState<boolean>();

  useEffect(() => {
    if (trigger == undefined) {
      resetTrigger(setTrigger);
    }
  }, []);

  const pullTrigger = () => {
    let resp = Math.floor(Math.random() * 6);
    console.log(resp);
    console.log(trigger);
    console.log(resp != trigger);

    setRes(resp != trigger);
  };

  return (
    <div className="w-full min-h-screen bg-jet">
      <h1 className="text-2xl text-whitesmoke">
        {/* <div>{trigger}</div> */}
        <div>{res != undefined ? String(res) : ""}</div>
        <button
          className="bg-living-coral hover:cursor-pointer hover:opacity-60"
          onClick={() => pullTrigger()}
        >
          Shoot
        </button>
      </h1>
    </div>
  );
}

export default App;
