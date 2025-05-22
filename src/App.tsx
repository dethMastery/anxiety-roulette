import { useEffect, useState } from "react";
import { type Dispatch, type SetStateAction } from "react";

import { FinalDraw } from "./components/Music";
import { Footer } from "./components/Footer";

const resetTrigger = (
  setTrigger: Dispatch<SetStateAction<number | undefined>>
) => {
  setTrigger(Math.floor(Math.random() * 6));
};

function App() {
  const [trigger, setTrigger] = useState<number>();
  const [res, setRes] = useState<boolean>();
  const [count, setCount] = useState<number>(0);
  const [list, setList] = useState<number[]>([0, 1, 2, 3, 4, 5]);

  const basedList = [0, 1, 2, 3, 4, 5];

  useEffect(() => {
    if (trigger == undefined) {
      resetTrigger(setTrigger);
    }
  }, []);

  const pullTrigger = () => {
    if (res == false) {
      resetTrigger(setTrigger);
      setList(basedList);
      setRes(undefined);
      console.log(`new trigger: ${trigger}`);
    } else {
      if (list.length == 0) {
        setList(basedList);
      }

      let rand = Math.floor(Math.random() * list.length);
      let resp = list[rand];
      console.log(list);
      console.log(resp);

      let filtered = list.filter((x) => x !== resp);
      setList(filtered);

      setCount(count + 1);
      setRes(resp != trigger);
    }
  };

  return (
    <div className="w-full min-h-screen bg-jet">
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-[22rem] bg-whitesmoke text-jet text-center p-4 rounded-xl flex flex-col gap-4">
          <div>
            {res != undefined ? (
              <FinalDraw state={res} count={count} />
            ) : (
              <h1 className="font-semibold text-3xl py-4">Click to start</h1>
            )}
          </div>
          <button
            className="text-whitesmoke bg-living-coral text-2xl p-4 rounded hover:cursor-pointer hover:rounded-xl hover:opacity-60"
            onClick={() => pullTrigger()}
          >
            {res != undefined ? (res ? "Shoot!!" : "Retry?") : "Shoot!!"}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
