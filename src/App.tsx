import { useEffect, useState } from "react";
import { type Dispatch, type SetStateAction } from "react";

import { FinalDraw } from "./components/Music";

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
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-[22rem] bg-whitesmoke text-jet text-center p-4 rounded-xl flex flex-col gap-4">
          <div>
            {res != undefined ? (
              <FinalDraw state={res} />
            ) : (
              <h1 className="font-semibold text-2xl py-4">Click to start</h1>
            )}
          </div>
          <button
            className="text-whitesmoke bg-living-coral text-2xl p-4 rounded hover:cursor-pointer hover:rounded-xl hover:opacity-60"
            onClick={() => pullTrigger()}
          >
            Shoot
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
