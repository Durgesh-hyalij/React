import { createContext, useContext, useState } from "react";

/*
  ============================================
  ALL useContext CONCEPTS IN ONE FILE
  ============================================
  Beginner ke liye: useContext ek problem solve karta hai
  jiska naam hai "PROP DRILLING".

  Non-tech example samjho:
  Socho tumhare ghar me ek announcement karni hai sabko
  (jaise "khana ready hai").

  BINA CONTEXT (Prop Drilling):
  Tum Dad ko batao -> Dad Bhai ko batayenge -> Bhai apne Room-mate
  ko batayega -> tab jaake sabko pata chalega.
  Har beech wale insaan ko message AAGE PASS karna padta hai,
  chahe unhe khud usse matlab na ho.

  CONTEXT KE SAATH:
  Ek LOUDSPEAKER lagado ghar me (Provider).
  Jisko bhi sunna hai, wo bas kaan lagaye (useContext) -
  beech wale logo ko pass karne ki zarurat hi nahi.
*/

// ------------------------------------------------------
// 1) CREATE A CONTEXT (the "loudspeaker channel" banate hain)
// ------------------------------------------------------
// Dusra argument default value hai - agar koi Provider na mile to ye use hoga
const ThemeContext = createContext("light");

// ------------------------------------------------------
// 2) PROVIDER - value ko "broadcast" karna
// ------------------------------------------------------
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    // Provider ke andar jitne bhi components hain,
    // sab ye value use kar sakte hain - bina prop pass kiye
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// ------------------------------------------------------
// 3) CONSUMING CONTEXT with useContext (deeply nested child)
// ------------------------------------------------------
function ThemeButton() {
  // Ye component seedha context se value utha raha hai
  // Iske parent ya grandparent ne kuch prop pass nahi ki!
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        border: "1px solid #999",
        padding: "8px 14px",
      }}
    >
      Current theme: {theme} (click to toggle)
    </button>
  );
}

function MiddleLayer() {
  // Ye component sirf pass-through hai, isko theme se koi matlab nahi
  // Notice: koi "props" nahi bhej rahe ThemeButton ko - yahi context ka fayda hai
  return (
    <div style={{ padding: 10, border: "1px dashed #ccc" }}>
      <p>Middle Layer (no props passed through here)</p>
      <ThemeButton />
    </div>
  );
}

function ThemeExample() {
  return (
    <div className="box">
      <h3>1 & 2 & 3. Create, Provide, Consume Context</h3>
      <p>
        Non-tech example: Loudspeaker (Provider) lagaya hai. Beech wala
        MiddleLayer component sirf "room" hai, usse announcement se koi
        matlab nahi, bas andar ke ThemeButton ko awaaz sunai de rahi hai.
      </p>
      <ThemeProvider>
        <MiddleLayer />
      </ThemeProvider>
    </div>
  );
}

// ------------------------------------------------------
// 4) MULTIPLE CONTEXTS TOGETHER (ek se zyada channel)
// ------------------------------------------------------
const UserContext = createContext(null);
const LanguageContext = createContext("en");

function MultipleContextExample() {
  const [user] = useState({ name: "Rohan" });
  const [language, setLanguage] = useState("en");

  return (
    <div className="box">
      <h3>4. Multiple Contexts Together</h3>
      <p>
        Non-tech example: Ghar me do alag loudspeaker channels ho sakte
        hain — ek "Khana Ready" ke liye, ek "Guest Aaye" ke liye. Har
        channel apna kaam karta hai, ek dusre se independent.
      </p>
      <UserContext.Provider value={user}>
        <LanguageContext.Provider value={{ language, setLanguage }}>
          <ProfileDisplay />
        </LanguageContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

function ProfileDisplay() {
  // Do alag contexts se value uthayi - ek saath dono use kar sakte hain
  const user = useContext(UserContext);
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div>
      <p>User: {user.name}</p>
      <p>Language: {language}</p>
      <button onClick={() => setLanguage(language === "en" ? "hi" : "en")}>
        Toggle Language
      </button>
    </div>
  );
}

// ------------------------------------------------------
// 5) CUSTOM HOOK WRAPPING useContext (best practice - real projects me aise hi karte hain)
// ------------------------------------------------------
const CartContext = createContext(null);

function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems((prev) => [...prev, item]);
  }

  return (
    <CartContext.Provider value={{ items, addItem }}>
      {children}
    </CartContext.Provider>
  );
}

// Ye custom hook hai - ise banane ka fayda:
// 1) Chhota naam milta hai: useCart() instead of useContext(CartContext)
// 2) Error check kar sakte hain agar Provider hi na mila ho
function useCart() {
  const context = useContext(CartContext);
  if (context === null) {
    // Agar koi component Provider ke BAHAR se useCart() call kare,
    // to turant clear error milega - debugging aasan
    throw new Error("useCart must be used inside a CartProvider");
  }
  return context;
}

function AddToCartButton() {
  const { addItem } = useCart(); // seedha custom hook use kiya
  return <button onClick={() => addItem("Apple")}>Add Apple to Cart</button>;
}

function CartCount() {
  const { items } = useCart();
  return <p>Items in cart: {items.length}</p>;
}

function CustomHookExample() {
  return (
    <div className="box">
      <h3>5. Custom Hook Wrapping useContext (Best Practice)</h3>
      <p>
        Non-tech example: Har baar poora "loudspeaker channel ka naam"
        bolne ki jagah, ek chhota nickname bana diya - jaise "Cart channel"
        ko sabne "useCart" bula diya. Aasan aur safe.
      </p>
      <CartProvider>
        <AddToCartButton />
        <CartCount />
      </CartProvider>
    </div>
  );
}

// ------------------------------------------------------
// 6) DEFAULT VALUE -> jab Provider hi nahi mila
// ------------------------------------------------------
const NotificationContext = createContext("No Provider found - using default");

function ShowNotification() {
  const message = useContext(NotificationContext);
  return <p>{message}</p>;
}

function DefaultValueExample() {
  return (
    <div className="box">
      <h3>6. Default Value (No Provider Wrapped)</h3>
      <p>
        Non-tech example: Agar loudspeaker hi nahi laga (Provider missing),
        to ek "default announcement" chalta rehta hai - crash nahi hota.
      </p>
      {/* Notice: Yaha koi <NotificationContext.Provider> nahi hai */}
      <ShowNotification />
    </div>
  );
}

// ------------------------------------------------------
// 7) COMMON MISTAKE -> Putting Provider in the wrong place
// ------------------------------------------------------
/*
  GALTI (isko avoid karo):

  function ComponentA() {
    return <ComponentB />; // Provider nahi laga
  }

  function ComponentB() {
    const value = useContext(SomeContext); // yaha Provider nahi mila upar
    // agar default value nahi di createContext me,
    // to value "undefined" ya "null" milega - bugs ho sakte hain
  }

  FIX: Context ko us level pe wrap karo jaha se saare
  child components ko value chahiye - usually App ke root ke paas.

  ANOTHER MISTAKE: Context value ko HAR render me naya object banake dena
  <MyContext.Provider value={{ a, b }}> // {} har render me NAYA object hai!
  Isse saare consumers re-render ho jate hain chahe kuch na bhi badla ho.
  FIX: useMemo use karo value ko wrap karne ke liye bade projects me.
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
      <h1 style={{ marginBottom: 4 }}>useContext - All Concepts</h1>
      <p style={{ color: "#666", marginTop: 0 }}>
        Prop drilling avoid karne ka sabse common tareeka
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
      `}</style>

      <ThemeExample />
      <MultipleContextExample />
      <CustomHookExample />
      <DefaultValueExample />
    </div>
  );
}