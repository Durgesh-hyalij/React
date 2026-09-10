import { useState, useRef, useEffect } from "react";

/*
  ============================================
  ALL useRef CONCEPTS IN ONE FILE
  ============================================
  Beginner ke liye: useRef ek "box" jaisa hai jisme tum
  koi bhi value rakh sakte ho, aur wo value change hone par
  bhi component RE-RENDER nahi hota.

  Non-tech example samjho:
  useState = ek WHITEBOARD hai. Jab tum usme kuch likhte ho,
  poora room (component) turant dekh leta hai (re-render hota hai).

  useRef = ek DIARY hai jo tum apni jeb me rakhte ho.
  Usme tum kuch bhi likho, koi announcement nahi hoti,
  bas jab zarurat ho tab diary khol ke dekh lo.
*/

// ------------------------------------------------------
// 1) ACCESSING A DOM ELEMENT (sabse common use)
// ------------------------------------------------------
function DomAccessExample() {
  // inputRef ek "box" hai jo abhi khali hai (null)
  // React isko automatically <input> element se jod dega
  const inputRef = useRef(null);

  function handleFocusClick() {
    // .current me actual DOM element aa jata hai
    // Non-tech example: jaise tum kisi ka naam bol ke
    // seedhe unke paas pahunch jao, bina dhundhe
    inputRef.current.focus();
  }

  return (
    <div className="box">
      <h3>1. Access DOM Element (Focus an input)</h3>
      <input ref={inputRef} placeholder="Click button to focus me" />
      <button onClick={handleFocusClick}>Focus Input</button>
    </div>
  );
}

// ------------------------------------------------------
// 2) STORING A VALUE THAT DOESN'T CAUSE RE-RENDER
// ------------------------------------------------------
function NoRerenderExample() {
  const [renderCount, setRenderCount] = useState(0);
  const clickCountRef = useRef(0); // ye value UI update nahi karegi

  function handleClick() {
    clickCountRef.current = clickCountRef.current + 1;
    // Note: yaha useState use nahi kiya isliye
    // component RE-RENDER NAHI hoga, sirf ref value badlegi
    console.log("Ref click count:", clickCountRef.current);
  }

  return (
    <div className="box">
      <h3>2. Ref Value Without Re-render</h3>
      <p>
        Non-tech example: Ye jaisa hai ek "secret tally" jo tum apne dimaag
        me gin rahe ho, bina kisi ko bataye. Number badhta hai, but kisi ko
        pata nahi chalta jab tak tum khud na batao.
      </p>
      <button onClick={handleClick}>Click me (check console)</button>
      <p>
        Click count is in console, NOT shown here — kyunki ref change hone
        se UI update nahi hota.
      </p>
      <hr />
      <button onClick={() => setRenderCount(renderCount + 1)}>
        Force Re-render (State) - Count: {renderCount}
      </button>
    </div>
  );
}

// ------------------------------------------------------
// 3) TRACKING PREVIOUS VALUE (very common pattern)
// ------------------------------------------------------
function PreviousValueExample() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(); // pehle kuch nahi hai isme

  useEffect(() => {
    // Har render ke baad, current count ko ref me save kar do
    // Ye agle render me "previous value" ban jayega
    prevCountRef.current = count;
  }, [count]);

  return (
    <div className="box">
      <h3>3. Track Previous Value</h3>
      <p>
        Non-tech example: Jaise tum roz apna weight likhte ho diary me.
        Aaj ka weight dekhne se pehle, kal wala weight bhi pata hota hai —
        taaki compare kar sako.
      </p>
      <p>Current: {count}</p>
      <p>Previous: {prevCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// ------------------------------------------------------
// 4) STORING TIMER / INTERVAL ID (so you can clear it later)
// ------------------------------------------------------
function TimerRefExample() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null); // timer ka "ID card" yaha rakhenge

  function startTimer() {
    // Agar pehle se koi timer chal raha hai to naya start mat karo
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null; // ID card wapas khali kar do
  }

  return (
    <div className="box">
      <h3>4. Store Timer ID in Ref</h3>
      <p>
        Non-tech example: Jaise tum kisi parcel ka tracking number likh ke
        rakhte ho. Jab parcel cancel karna ho, tumhe wo number chahiye —
        useRef wahi number safe rakhta hai.
      </p>
      <p>Seconds: {seconds}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

// ------------------------------------------------------
// 5) COUNTING RENDERS (how many times component re-rendered)
// ------------------------------------------------------
function RenderCountExample() {
  const [text, setText] = useState("");
  const renderCount = useRef(1); // 1st render already ho chuka

  useEffect(() => {
    // Har render ke baad ye chalega aur count badhayega
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div className="box">
      <h3>5. Count How Many Times Component Rendered</h3>
      <input
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>This component rendered {renderCount.current} times</p>
    </div>
  );
}

// ------------------------------------------------------
// 6) useRef vs useState -> SIDE BY SIDE COMPARISON
// ------------------------------------------------------
function CompareStateAndRef() {
  const [stateValue, setStateValue] = useState(0);
  const refValue = useRef(0);

  function updateBoth() {
    setStateValue(stateValue + 1); // UI turant update hoga
    refValue.current = refValue.current + 1; // UI update NAHI hoga
    console.log("State:", stateValue + 1, "| Ref:", refValue.current);
  }

  return (
    <div className="box">
      <h3>6. useState vs useRef (Side by Side)</h3>
      <p>
        Non-tech example: useState ek RESULT BOARD hai jo public me sabko
        dikhta hai (jaise cricket match ka scoreboard). useRef ek PRIVATE
        NOTEBOOK hai jo sirf tumhare paas hai — value hoti hai but display
        nahi hoti jab tak khud na dikhao.
      </p>
      <p>State value (UI updates automatically): {stateValue}</p>
      <p>
        Ref value (UI NOT updated automatically, check console): keep
        clicking and see console log
      </p>
      <button onClick={updateBoth}>Update Both</button>
    </div>
  );
}

// ------------------------------------------------------
// 7) COMMON MISTAKE -> Reading ref.current during render
// ------------------------------------------------------
/*
  GALTI (isko avoid karo):

  function Example() {
    const countRef = useRef(0);
    countRef.current = countRef.current + 1; // render ke time hi change kar diya

    return <p>{countRef.current}</p>; // ye kabhi kabhi galat/inconsistent value dikha sakta hai
  }

  Reason: Ref ki value render ke DAURAN change karna best practice nahi hai.
  Ref ko hamesha EVENT HANDLERS ya useEffect ke ANDAR change karo,
  render ke time nahi.

  FIX: countRef.current ko useEffect ke andar ya
  button click jaise event ke andar update karo (jaise upar ke examples me kiya hai)
*/

// ------------------------------------------------------
// MAIN APP - sabko ek sath dikhayenge
// ------------------------------------------------------
export default function App() {
  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        maxWidth: 650,
        margin: "0 auto",
        padding: 20,
      }}
    >
      <h1 style={{ marginBottom: 4 }}>useRef - All Concepts</h1>
      <p style={{ color: "#666", marginTop: 0 }}>
        Console khol ke dekho (F12) - kuch examples wahan value print
        karenge
      </p>

      <style>{`
        .box {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 16px;
          margin-bottom: 16px;
        }
        .box h3 { margin-top: 0; }
        .box p { color: #333; line-height: 1.5; }
        button {
          margin-right: 8px;
          margin-top: 8px;
          padding: 6px 12px;
          cursor: pointer;
        }
        input { margin-top: 8px; padding: 6px; }
        hr { margin: 16px 0; border: none; border-top: 1px solid #eee; }
      `}</style>

      <DomAccessExample />
      <NoRerenderExample />
      <PreviousValueExample />
      <TimerRefExample />
      <RenderCountExample />
      <CompareStateAndRef />
    </div>
  );
}