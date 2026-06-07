import { useState, useEffect, useRef } from "react";

const LETTERS = {
  fromSister: {
    title: "A Letter From Chubs 💛",
    content: `Hey you little gremlin,

Dear Subscriber, please note — your 365-day subscription has been successfully renewed! Unlimited yapping, ranting, and storytelling included at no extra charge. As your premium listener, I guarantee uninterrupted support and sarcastic commentary. Terms and conditions apply.

18. Like actually 18. I don't know whether to cry or laugh — so I'll probably do both, which is very on brand for us.

I've been thinking about what to write and honestly nothing feels enough. Because how do you put into words someone who knows every single version of you? The crying version, the unhinged 3am version, the "don't tell anyone but—" version. You've seen all of it. And you're still here, chaotic as ever.

We've shared secrets that will go to the grave. Cried over things that probably didn't deserve that many tears. Laughed at things only we would find funny. Talked about crushes like it was the most important thing in the world — and somehow in that moment, it really was.

No one gets in here. Just us. And I think that's the rarest thing two people can have.

You're stepping into 18 and I just want you to know — whoever you become, however far you go — this stays the same. You'll always have someone in your corner who knows the whole story.

In English, we say — Happy Birthday.

But in poetry —

Today the world feels gentler because you arrived in it. May this new year hold you softly, return your kindness to you in quiet ways, and remind you — again and again — that your existence is a gift time itself celebrates.

I love you more than I'll ever say out loud.

— Chubs 💛`
  },
  loveLetterToSelf: {
    title: "A Love Letter For You 🌙",
    content: `To the one I adore,

I have been watching you carry the weight of worlds you never asked for — quietly, gracefully, like it costs you nothing. But I see you. I see what it costs.

You are the kind of person autumn was made for. The kind of soul that feels everything deeply but shows the world only the surface. And even that surface — God, even that — is breathtaking.

I want you to know something.

You are not too much. You have never been too much. If anything, the world has been too small to hold everything you are.

That thing you do — where you fold yourself smaller so others feel comfortable? Where you swallow your tears before anyone notices? Where you say "I'm fine" like it's a reflex? I see it. And I want you to stop. Not for me. For you.

You were not made to be stone. You were made to be water — deep, feeling, moving, alive.

Let yourself be soft sometimes. Let yourself be held. Let someone sit with you in the hard moments without you having to pretend the hard moments don't exist.

You deserve a love that feels like coming home. And it starts — it has always started — with how you love yourself.

Be gentle with her. She has been so brave for so long.

She deserves rest. She deserves warmth. She deserves everything she has quietly wished for others.

Yours, completely and without condition —
Someone who sees all of you and stays 🌙`
  }
};

const HIDDEN_PASSWORD = "0906";
const HER_NAME = "Muffin";

const GEM_COLORS = [
  "#ff6eb4", "#c084fc", "#67e8f9", "#fcd34d", "#86efac",
  "#f9a8d4", "#a78bfa", "#38bdf8", "#fbbf24", "#34d399"
];

function Sparkle({ style }) {
  return (
    <div style={{
      position: "absolute",
      width: style.size,
      height: style.size,
      borderRadius: "50%",
      background: style.color,
      boxShadow: `0 0 ${parseInt(style.size) * 2}px ${style.color}, 0 0 ${parseInt(style.size) * 4}px ${style.color}`,
      animation: `twinkle ${style.duration} ease-in-out infinite`,
      animationDelay: style.delay,
      top: style.top,
      left: style.left,
      pointerEvents: "none",
      zIndex: 0,
    }} />
  );
}

function FloatingGems() {
  const gems = Array.from({ length: 28 }, (_, i) => ({
    id: i,
    size: `${Math.random() * 10 + 4}px`,
    color: GEM_COLORS[i % GEM_COLORS.length],
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: `${Math.random() * 3 + 2}s`,
    delay: `${Math.random() * 4}s`,
  }));
  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0 }}>
      {gems.map(g => <Sparkle key={g.id} style={g} />)}
    </div>
  );
}

function GlitterText({ children, size = "1em", gradient }) {
  return (
    <span style={{
      background: gradient || "linear-gradient(135deg, #fcd34d, #f9a8d4, #c084fc, #67e8f9, #86efac, #fcd34d)",
      backgroundSize: "200% 200%",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      animation: "shimmer 3s linear infinite",
      fontSize: size,
      fontWeight: 800,
      display: "inline-block",
    }}>{children}</span>
  );
}

function LandingPage({ onEnter }) {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShowButton(true), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      textAlign: "center", padding: "2rem", position: "relative", zIndex: 1,
    }}>
      <div style={{ animation: "floatUp 1s ease-out forwards", opacity: 0 }}>
        <div style={{ fontSize: "5rem", marginBottom: "0.5rem", animation: "bounce 2s ease-in-out infinite" }}>✨💎✨</div>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2.5rem, 8vw, 5rem)",
          lineHeight: 1.1,
          marginBottom: "0.5rem",
          letterSpacing: "-0.02em",
        }}>
          <GlitterText size="1em">Happy 18th</GlitterText>
        </h1>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(1.8rem, 5vw, 3rem)",
          color: "#f9a8d4",
          marginBottom: "1rem",
          fontStyle: "italic",
          textShadow: "0 0 30px rgba(249,168,212,0.6)",
        }}>
          {HER_NAME === "REPLACE_WITH_HER_NAME" ? "My Favourite Person 💛" : HER_NAME + " 💛"}
        </h2>
        <p style={{
          fontFamily: "'Lora', serif",
          color: "#e2c4f0",
          fontSize: "1.1rem",
          maxWidth: "380px",
          margin: "0 auto 2rem",
          lineHeight: 1.7,
          fontStyle: "italic",
        }}>
          Something special was made just for you. Open with your whole heart. 💌
        </p>
      </div>
      {showButton && (
        <button onClick={onEnter} style={{
          background: "linear-gradient(135deg, #fcd34d, #f9a8d4, #c084fc)",
          border: "none",
          borderRadius: "50px",
          padding: "1rem 2.5rem",
          fontSize: "1.1rem",
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          color: "#1a0a2e",
          cursor: "pointer",
          boxShadow: "0 0 30px rgba(192,132,252,0.5), 0 0 60px rgba(252,211,77,0.3)",
          animation: "pulse 2s ease-in-out infinite, floatUp 0.6s ease-out forwards",
          opacity: 0,
          transform: "translateY(20px)",
          transition: "transform 0.2s",
          zIndex: 2,
          position: "relative",
        }}
          onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
          onMouseLeave={e => e.target.style.transform = "scale(1)"}
        >
          💎 Open Your Gift 💎
        </button>
      )}
    </div>
  );
}

function NavDot({ label, active, onClick }) {
  return (
    <button onClick={onClick} style={{
      background: active ? "linear-gradient(135deg, #fcd34d, #f9a8d4)" : "rgba(255,255,255,0.15)",
      border: "none",
      borderRadius: "20px",
      padding: "0.4rem 1rem",
      fontSize: "0.75rem",
      fontFamily: "'Lora', serif",
      color: active ? "#1a0a2e" : "#e2c4f0",
      cursor: "pointer",
      fontWeight: active ? 700 : 400,
      transition: "all 0.3s",
      boxShadow: active ? "0 0 15px rgba(252,211,77,0.4)" : "none",
      whiteSpace: "nowrap",
    }}>{label}</button>
  );
}

function LetterPage({ letter }) {
  return (
    <div style={{
      maxWidth: "680px", margin: "0 auto", padding: "2rem 1.5rem",
      animation: "floatUp 0.6s ease-out forwards",
    }}>
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        textAlign: "center",
        marginBottom: "2rem",
        fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
      }}>
        <GlitterText>{letter.title}</GlitterText>
      </h2>
      <div style={{
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(252,211,77,0.2)",
        borderRadius: "24px",
        padding: "2.5rem",
        boxShadow: "0 0 60px rgba(192,132,252,0.1), inset 0 1px 0 rgba(255,255,255,0.1)",
      }}>
        {letter.content.split("\n\n").map((para, i) => (
          <p key={i} style={{
            fontFamily: "'Lora', serif",
            color: "#f0e6ff",
            lineHeight: 1.9,
            marginBottom: "1.2rem",
            fontSize: "1rem",
            whiteSpace: "pre-wrap",
          }}>{para}</p>
        ))}
      </div>
    </div>
  );
}

function MemoriesPage() {
  const appreciations = [
    { emoji: "🐱", title: "Cute & Sassy", desc: "You walk into a room and own it without even trying. That perfect mix of cute and boss energy? Nobody does it like you." },
    { emoji: "👑", title: "Total Girlboss", desc: "Bossy in the best way. You know what you want, you go after it, and you make it look effortless. Iconic behaviour honestly." },
    { emoji: "🎨", title: "Artist Soul", desc: "The way you draw anime, the way you see beauty in things — you have an artist's eye and it makes everything you touch feel special." },
    { emoji: "🥂", title: "Royal Taste", desc: "Chandeliers, gold interiors, champagne energy — you were built for the finer things and honestly the finer things were built for you." },
    { emoji: "🐻", title: "Soft at Heart", desc: "Behind all that sassy girlboss energy is someone who loves teddy bears and cuddles and that softness is your most beautiful side." },
    { emoji: "✨", title: "Lucky Girl Energy", desc: "You carry this quiet confidence that makes the universe want to work in your favour. Lucky Girl Syndrome? No — you just deserve it all." },
    { emoji: "🖤", title: "Drip & Vibe", desc: "Your taste in music, fashion, everything — it's so distinctly YOU. From Babymonster to Jennie, even your playlist has main character energy." },
    { emoji: "💛", title: "My Favourite Person", desc: "Of all the people in this world, you are my most favourite chaos. Happy 18th Muffin — the world got luckier the day you arrived in it." },
  ];
  return (
    <div style={{ maxWidth: "680px", margin: "0 auto", padding: "2rem 1.5rem", animation: "floatUp 0.6s ease-out forwards" }}>
      <h2 style={{ fontFamily: "'Playfair Display', serif", textAlign: "center", marginBottom: "0.5rem", fontSize: "clamp(1.5rem, 4vw, 2.2rem)" }}>
        <GlitterText>Everything You Are 💛</GlitterText>
      </h2>
      <p style={{ textAlign: "center", fontFamily: "'Lora', serif", color: "#c4a8d4", fontSize: "0.9rem", marginBottom: "2rem", fontStyle: "italic" }}>
        a love letter in pieces — just for you 🌙
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        {appreciations.map((a, i) => (
          <div key={i} style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(249,168,212,0.2)",
            borderRadius: "20px",
            padding: "1.5rem 1.2rem",
            backdropFilter: "blur(10px)",
            animation: `floatUp 0.5s ease-out ${i * 0.08}s forwards`,
            opacity: 0,
            transition: "all 0.3s",
          }}
            onMouseEnter={e => { e.currentTarget.style.border = "1px solid rgba(252,211,77,0.4)"; e.currentTarget.style.background = "rgba(252,211,77,0.06)"; }}
            onMouseLeave={e => { e.currentTarget.style.border = "1px solid rgba(249,168,212,0.2)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{a.emoji}</div>
            <div style={{ fontFamily: "'Playfair Display', serif", color: "#fcd34d", fontWeight: 700, marginBottom: "0.4rem", fontSize: "0.95rem" }}>{a.title}</div>
            <div style={{ fontFamily: "'Lora', serif", color: "#e2c4f0", fontSize: "0.82rem", lineHeight: 1.7 }}>{a.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HiddenPage() {
  const [input, setInput] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [wrong, setWrong] = useState(false);

  const tryUnlock = () => {
    if (input.trim().toLowerCase() === HIDDEN_PASSWORD.toLowerCase()) {
      setUnlocked(true);
      setWrong(false);
    } else {
      setWrong(true);
      setTimeout(() => setWrong(false), 1500);
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "2rem 1.5rem", textAlign: "center", animation: "floatUp 0.6s ease-out forwards" }}>
      <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔮</div>
      <h2 style={{ fontFamily: "'Playfair Display', serif", marginBottom: "0.5rem", fontSize: "1.8rem" }}>
        <GlitterText>Secret Room</GlitterText>
      </h2>
      {!unlocked ? (
        <>
          <p style={{ fontFamily: "'Lora', serif", color: "#c4a8d4", marginBottom: "1.5rem", fontStyle: "italic" }}>
            Only you know the password 🤭
          </p>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && tryUnlock()}
            placeholder="Type it here..."
            style={{
              background: "rgba(255,255,255,0.08)",
              border: `1px solid ${wrong ? "#ff6b6b" : "rgba(192,132,252,0.4)"}`,
              borderRadius: "12px",
              padding: "0.9rem 1.2rem",
              fontSize: "1rem",
              color: "#f0e6ff",
              fontFamily: "'Lora', serif",
              width: "100%",
              marginBottom: "1rem",
              outline: "none",
              textAlign: "center",
              transition: "border 0.3s",
              boxSizing: "border-box",
            }}
          />
          {wrong && <p style={{ color: "#ff8fab", fontFamily: "'Lora', serif", fontSize: "0.9rem", marginBottom: "0.5rem" }}>Not quite... try again 💀</p>}
          <button onClick={tryUnlock} style={{
            background: "linear-gradient(135deg, #c084fc, #f9a8d4)",
            border: "none", borderRadius: "50px", padding: "0.8rem 2rem",
            fontSize: "1rem", fontFamily: "'Playfair Display', serif", fontWeight: 700,
            color: "#1a0a2e", cursor: "pointer",
            boxShadow: "0 0 20px rgba(192,132,252,0.4)",
          }}>Unlock ✨</button>
        </>
      ) : (
        <div style={{ animation: "floatUp 0.5s ease-out forwards" }}>
          <div style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(192,132,252,0.3)",
            borderRadius: "20px",
            padding: "2rem",
            marginBottom: "1rem",
          }}>
            <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>🤍</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#fcd34d", marginBottom: "1rem", fontSize: "1.2rem" }}>Big Sis Advice — Keep This Forever</h3>
            <p style={{ fontFamily: "'Lora', serif", color: "#f0e6ff", lineHeight: 1.9, fontSize: "0.95rem" }}>
              You don't have to be strong all the time. The people who love you — they want to hold you too, not just be held by you. Let yourself be warm. Let yourself lean. Not every hard thing needs to be carried alone in silence.
            </p>
            <p style={{ fontFamily: "'Lora', serif", color: "#f0e6ff", lineHeight: 1.9, fontSize: "0.95rem", marginTop: "1rem" }}>
              You are allowed to need people. You are allowed to say "I'm not okay today." That's not weakness — that's trust. And the right people will always show up for it.
            </p>
            <p style={{ fontFamily: "'Lora', serif", color: "#e2c4f0", lineHeight: 1.9, fontSize: "0.95rem", marginTop: "1rem", fontStyle: "italic" }}>
              Be someone's safe place, yes — but let someone be yours too. Starting with me. Always me. 💛
            </p>
          </div>
          <div style={{
            background: "rgba(252,211,77,0.06)",
            border: "1px solid rgba(252,211,77,0.3)",
            borderRadius: "20px",
            padding: "1.5rem",
          }}>
            <div style={{ fontSize: "2rem", marginBottom: "0.8rem" }}>🕵️‍♀️</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#fcd34d", marginBottom: "0.8rem", fontSize: "1.1rem" }}>Classified Intel 🤭</h3>
            <p style={{ fontFamily: "'Lora', serif", color: "#f0e6ff", lineHeight: 1.9, fontSize: "0.95rem" }}>
              Also — totally unrelated — your big sis has officially launched Operation: Find Muffin A Good Man. 
            </p>
            <p style={{ fontFamily: "'Lora', serif", color: "#e2c4f0", lineHeight: 1.9, fontSize: "0.9rem", marginTop: "0.5rem", fontStyle: "italic" }}>
              Requirements: must survive my interrogation, must match your royal energy, must be worthy of you. Screening is ongoing. Updates to follow. You're welcome. 😂👑
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function MusicPlayer() {
  const songs = [
    { title: "It's Me", artist: "ILLIT", emoji: "💎", url: "https://youtu.be/bMhDJ0S0OBA" },
    { title: "Like JENNIE", artist: "JENNIE", emoji: "👑", url: "https://youtu.be/XD00TJ-6WSw" },
    { title: "Birthday", artist: "Jeon Somi", emoji: "🎂", url: "https://youtu.be/oDJ4ct59NC4" },
    { title: "Lucky Girl Syndrome", artist: "ILLIT", emoji: "🍀", url: "https://youtu.be/UCmgGZbfjmk" },
  ];
  const [current, setCurrent] = useState(null);

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "2rem 1.5rem", animation: "floatUp 0.6s ease-out forwards" }}>
      <h2 style={{ fontFamily: "'Playfair Display', serif", textAlign: "center", marginBottom: "0.5rem", fontSize: "1.8rem" }}>
        <GlitterText>Your Vibe 🎵</GlitterText>
      </h2>
      <p style={{ textAlign: "center", fontFamily: "'Lora', serif", color: "#c4a8d4", fontSize: "0.85rem", marginBottom: "1.5rem", fontStyle: "italic" }}>
        your personality in a playlist 👑✨
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
        {songs.map((s, i) => (
          <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <div onMouseEnter={() => setCurrent(i)} onMouseLeave={() => setCurrent(null)} style={{
              background: current === i ? "rgba(252,211,77,0.12)" : "rgba(255,255,255,0.04)",
              border: `1px solid ${current === i ? "rgba(252,211,77,0.5)" : "rgba(255,255,255,0.1)"}`,
              borderRadius: "16px", padding: "1.2rem 1.5rem",
              cursor: "pointer", display: "flex", alignItems: "center", gap: "1rem",
              transition: "all 0.3s",
              boxShadow: current === i ? "0 0 20px rgba(252,211,77,0.2)" : "none",
            }}>
              <span style={{ fontSize: "1.8rem" }}>{s.emoji}</span>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", color: current === i ? "#fcd34d" : "#f0e6ff", fontWeight: 600 }}>{s.title}</div>
                <div style={{ fontFamily: "'Lora', serif", color: "#c4a8d4", fontSize: "0.8rem" }}>{s.artist}</div>
              </div>
              <div style={{ marginLeft: "auto", fontSize: "1.2rem" }}>▶️</div>
            </div>
          </a>
        ))}
      </div>
      <p style={{ textAlign: "center", fontFamily: "'Lora', serif", color: "#c4a8d4", fontSize: "0.85rem", marginTop: "1.5rem", fontStyle: "italic" }}>
        tap any song to play on YouTube 🎵
      </p>
    </div>
  );
}

const PAGES = ["home", "letter1", "letter2", "memories", "music", "secret"];
const PAGE_LABELS = ["🏠", "💌 Letter", "🌙 For You", "💛 You", "🎵 Music", "🔮 Secret"];

export default function App() {
  const [entered, setEntered] = useState(false);
  const [page, setPage] = useState("home");
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    if (entered) {
      const pieces = Array.from({ length: 60 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        color: GEM_COLORS[i % GEM_COLORS.length],
        size: Math.random() * 8 + 4,
        delay: Math.random() * 2,
        duration: Math.random() * 2 + 2,
      }));
      setConfetti(pieces);
      setTimeout(() => setConfetti([]), 4000);
    }
  }, [entered]);

  return (
    <div style={{
      minHeight: "100vh",
      background: "radial-gradient(ellipse at 20% 20%, #1a0a3e 0%, #0d0015 40%, #0a0a1a 70%, #000510 100%)",
      color: "#f0e6ff",
      position: "relative",
      overflowX: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,800;1,400&family=Lora:ital,wght@0,400;0,600;1,400&display=swap');
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.4); }
        }
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes floatUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 30px rgba(192,132,252,0.5), 0 0 60px rgba(252,211,77,0.3); }
          50% { box-shadow: 0 0 50px rgba(192,132,252,0.8), 0 0 80px rgba(252,211,77,0.5); }
        }
        @keyframes confettiFall {
          0% { transform: translateY(-20px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(192,132,252,0.4); border-radius: 2px; }
      `}</style>

      <FloatingGems />

      {confetti.map(p => (
        <div key={p.id} style={{
          position: "fixed",
          top: "-20px",
          left: `${p.x}%`,
          width: p.size,
          height: p.size,
          borderRadius: "50%",
          background: p.color,
          boxShadow: `0 0 6px ${p.color}`,
          animation: `confettiFall ${p.duration}s ease-in ${p.delay}s forwards`,
          zIndex: 100,
          pointerEvents: "none",
        }} />
      ))}

      {!entered ? (
        <LandingPage onEnter={() => setEntered(true)} />
      ) : (
        <div style={{ position: "relative", zIndex: 1, paddingBottom: "100px" }}>
          {/* Header */}
          <div style={{ textAlign: "center", padding: "2rem 1rem 0.5rem", animation: "floatUp 0.6s ease-out forwards" }}>
            <div style={{ fontSize: "2rem" }}>💎✨💎</div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.3rem, 4vw, 2rem)", margin: "0.3rem 0" }}>
              <GlitterText>
                {HER_NAME === "REPLACE_WITH_HER_NAME" ? "Happy 18th, Beautiful 💛" : `Happy 18th, ${HER_NAME} 💛`}
              </GlitterText>
            </h1>
            <p style={{ fontFamily: "'Lora', serif", color: "#c4a8d4", fontSize: "0.85rem", fontStyle: "italic" }}>
              Made with love by Chubs 🤭
            </p>
          </div>

          {/* Content */}
          <div style={{ minHeight: "60vh" }}>
            {page === "home" && (
              <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem 1.5rem", textAlign: "center", animation: "floatUp 0.6s ease-out forwards" }}>
                <div style={{ fontSize: "4rem", margin: "1rem 0", animation: "bounce 2s ease-in-out infinite" }}>🎂</div>
                <p style={{ fontFamily: "'Lora', serif", color: "#f0e6ff", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                  This whole little world was built just for you. Explore every corner. Read every word. There's a secret room at the end 🤭
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  {[
                    { page: "letter1", label: "Letter from Chubs", emoji: "💌", color: "#f9a8d4" },
                    { page: "letter2", label: "A Love Letter", emoji: "🌙", color: "#c084fc" },
                    { page: "memories", label: "Everything You Are", emoji: "💛", color: "#67e8f9" },
                    { page: "music", label: "Your Vibe", emoji: "🎵", color: "#fcd34d" },
                  ].map(item => (
                    <button key={item.page} onClick={() => setPage(item.page)} style={{
                      background: "rgba(255,255,255,0.05)",
                      border: `1px solid ${item.color}40`,
                      borderRadius: "20px",
                      padding: "1.5rem 1rem",
                      cursor: "pointer",
                      color: "#f0e6ff",
                      fontFamily: "'Lora', serif",
                      fontSize: "0.9rem",
                      transition: "all 0.3s",
                      backdropFilter: "blur(10px)",
                    }}
                      onMouseEnter={e => { e.currentTarget.style.background = `${item.color}15`; e.currentTarget.style.borderColor = item.color; }}
                      onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = `${item.color}40`; }}
                    >
                      <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{item.emoji}</div>
                      {item.label}
                    </button>
                  ))}
                </div>
                <button onClick={() => setPage("secret")} style={{
                  marginTop: "1rem",
                  background: "rgba(192,132,252,0.1)",
                  border: "1px solid rgba(192,132,252,0.3)",
                  borderRadius: "20px",
                  padding: "1rem 2rem",
                  color: "#c084fc",
                  fontFamily: "'Lora', serif",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  width: "100%",
                  transition: "all 0.3s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(192,132,252,0.2)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(192,132,252,0.1)"; }}
                >🔮 There's a secret room...</button>
              </div>
            )}
            {page === "letter1" && <LetterPage letter={LETTERS.fromSister} />}
            {page === "letter2" && <LetterPage letter={LETTERS.loveLetterToSelf} />}
            {page === "memories" && <MemoriesPage />}
            {page === "music" && <MusicPlayer />}
            {page === "secret" && <HiddenPage />}
          </div>

          {/* Bottom Nav */}
          <div style={{
            position: "fixed", bottom: 0, left: 0, right: 0,
            background: "rgba(10,0,25,0.9)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(192,132,252,0.2)",
            padding: "0.8rem 1rem",
            display: "flex", gap: "0.4rem", overflowX: "auto",
            justifyContent: "center",
            zIndex: 50,
          }}>
            {PAGES.map((p, i) => (
              <NavDot key={p} label={PAGE_LABELS[i]} active={page === p} onClick={() => setPage(p)} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
