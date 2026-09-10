import { useState, useEffect } from "react";

/*
  ============================================
  ALL useEffect CONCEPTS IN ONE FILE
  ============================================
  Har concept ke liye alag chhota component banaya hai,
  taaki confuse na ho aur ek ek karke samajh aaye.
*/

// ------------------------------------------------------
// 1) EFFECT WITHOUT DEPENDENCY ARRAY -> Runs on EVERY render
// ------------------------------------------------------
function NoDependencyExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // No array diya, isliye ye har render ke baad chalega
    // (chahe count change ho ya kuch aur bhi re-render ho)
    console.log("1) Effect ran - runs on every render");
    alert("1) Effect ran - runs on every render")
  }); // <-- no dependency array

  return (
    <div className="box">
      <h3>1. No Dependency Array</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// ------------------------------------------------------
// 2) EMPTY DEPENDENCY ARRAY [] -> Runs ONLY ONCE (on mount)
// ------------------------------------------------------
function EmptyArrayExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // [] khali array ka matlab: sirf pehli baar (mount ke time) chalega
    // Isko "componentDidMount" jaisa treat karte hain
    console.log("2) Effect ran only once - on mount");
    alert("2) Effect ran only once - on mount")
  }, []); // <-- empty array

  return (
    <div className="box">
      <h3>2. Empty Dependency Array []</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// ------------------------------------------------------
// 3) DEPENDENCY ARRAY WITH VALUE(S) -> Runs when that value changes
// ------------------------------------------------------
function DependencyArrayExample() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    // Ye sirf tab chalega jab "count" change hoga
    // "name" change hone par ye NAHI chalega
    console.log("3) Count changed to:", count);
    alert("3) Count changed to:", {count})
  }, [count]); // <-- dependency: count

  return (
    <div className="box">
      <h3>3. Dependency Array [count]</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input
        placeholder="Type name (won't trigger effect)"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

// ------------------------------------------------------
// 4) CLEANUP FUNCTION -> return a function to clean up
// ------------------------------------------------------
function CleanupExample() {             // Cleanup doesn't mean "stop after some time.   It means:  When this component/effect is no longer needed, clean up what it started.
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Timer start kiya
    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    console.log("4) Timer started");

    // CLEANUP FUNCTION:
    // Ye tab chalta hai jab component unmount ho
    // ya jab effect dobara chalne wala ho (next run se pehle)
    // Isse memory leak aur duplicate timers rukte hain
    return () => {
      clearInterval(intervalId);
      console.log("4) Timer cleared (cleanup)");
      alert("4) Timer cleared (cleanup)")
    };
  }, []); // sirf ek baar timer set hoga

  return (
    <div className="box">
      <h3>4. Cleanup Function (Timer)</h3>
      <p>Seconds: {seconds}</p>
    </div>
  );
}


// ------------------------------------------------------
// 5) CLEANUP + EVENT LISTENER (real world use case)
// ------------------------------------------------------
function EventListenerExample() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      alert("window size changes")
    }

    // Event listener add kiya
    window.addEventListener("resize", handleResize);

    // Cleanup: listener hata do warna multiple listeners jud jayenge
    return () => {
      window.removeEventListener("resize", handleResize);
      
    };
  }, []);

  return (
    <div className="box">
      <h3>5. Event Listener + Cleanup</h3>
      <p>Window width: {width}px (resize the window)</p>
      

    </div>
  );
}

// ------------------------------------------------------
// 6) DATA FETCHING with async function inside useEffect
// ------------------------------------------------------
function DataFetchingExample() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // useEffect ka callback khud async nahi ho sakta,
    // isliye andar ek async function banate hain aur usko call karte hain
    let ignore = false; // race condition se bachne ke liye flag

    async function fetchUser() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        const data = await res.json();
        // Agar component unmount ho gaya ya userId change ho gaya
        // to purana result set mat karo
        if (!ignore) {
          setUser(data);
          setLoading(false);
        }
      } catch (error) {
        if (!ignore) setLoading(false);
        console.log("Fetch error:", error);
      }
    }

    fetchUser();

    // Cleanup: agar userId badal jaye beech me, purana request ignore karo
    return () => {
      ignore = true;
    };
  }, [userId]); // jab bhi userId change ho, dobara fetch karo

  return (
    <div className="box">
      <h3>6. Data Fetching</h3>
      <button onClick={() => setUserId((id) => id + 1)}>Next User</button>
      {loading ? <p>Loading...</p> : <p>Name: {user?.name}</p>}
    </div>
  );
}

// ------------------------------------------------------
// 7) MULTIPLE useEffect IN ONE COMPONENT (separation of concerns)
// ------------------------------------------------------
function MultipleEffectsExample() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  // Effect 1: sirf count se related kaam
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  // Effect 2: sirf theme se related kaam
  useEffect(() => {
    console.log("Theme changed to", theme);
    // alert("change theme successfully")
  }, [theme]);

  return (
    <div className="box">
      <h3>7. Multiple useEffects (separate concerns)</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme ({theme})
      </button>
    </div>
  );
}

// ------------------------------------------------------
// 8) COMMON MISTAKE -> Infinite Loop (shown as comment only)
// ------------------------------------------------------
/*
  GALTI (Infinite Loop example - isko run mat karo):

  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1); // state update kar rahe ho
  }); // aur dependency array bhi nahi diya

  Yaha kya hoga:
  render -> effect run -> setCount -> re-render -> effect run -> setCount -> ...(infinite)

  FIX: dependency array do, ya condition lagao ke kab update karna hai
*/

// ------------------------------------------------------
// MAIN APP - sabko ek sath dikhayenge
// ------------------------------------------------------
export default function App() {
  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        maxWidth: 600,
        margin: "0 auto",
        padding: 20,
      }}
    >
      <h1 style={{ marginBottom: 4 }}>useEffect - All Concepts</h1>
      <p style={{ color: "#666", marginTop: 0 }}>
        Console khol ke dekho (F12) - wahan console.log messages aayenge
      </p>

      <style>{`
        .box {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 16px;
          margin-bottom: 16px;
        }
        .box h3 { margin-top: 0; }
        button {
          margin-right: 8px;
          margin-top: 8px;
          padding: 6px 12px;
          cursor: pointer;
        }
        input { margin-top: 8px; padding: 6px; }
      `}</style>

      <NoDependencyExample />
      <EmptyArrayExample />
      <DependencyArrayExample />
      <CleanupExample />
      <EventListenerExample />
      <DataFetchingExample />
      <MultipleEffectsExample />
      
    </div>
  );
}