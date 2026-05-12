import { useState } from "react";

const SALE = [
  { id:1, bhk:3, propType:"Apartment", locality:"Bogadi",        label:"85 Lakhs",    img:"🏢", builder:"Mantri Developers",  sqft:1450, badge:"New Launch",          badgeColor:"#1565C0", badgeBg:"#DBEAFE", grad:"linear-gradient(135deg,#1C2840,#2E4A80)" },
  { id:2, bhk:2, propType:"Apartment", locality:"Bannur Road",   label:"55 Lakhs",    img:"🏗️", builder:"Salarpuria",         sqft:1100, badge:"Under Construction",   badgeColor:"#92400E", badgeBg:"#FEF3C7", grad:"linear-gradient(135deg,#3E2000,#7A4A00)" },
  { id:3, bhk:4, propType:"Villa",     locality:"Kuvempunagar",  label:"2.2 Crores",  img:"🏡", builder:"Prestige Group",     sqft:2800, badge:"Ready to Move",        badgeColor:"#166534", badgeBg:"#DCFCE7", grad:"linear-gradient(135deg,#1A5C52,#0D3D34)" },
  { id:4, bhk:1, propType:"Apartment", locality:"Nazarbad",      label:"32 Lakhs",    img:"🏠", builder:"Local Builder",      sqft:620,  badge:"New Launch",           badgeColor:"#1565C0", badgeBg:"#DBEAFE", grad:"linear-gradient(135deg,#1a237e,#3949ab)" },
  { id:5, bhk:3, propType:"Villa",     locality:"Gokulam",       label:"1.8 Crores",  img:"🏡", builder:"Shriram Properties", sqft:2400, badge:"Ready to Move",        badgeColor:"#166534", badgeBg:"#DCFCE7", grad:"linear-gradient(135deg,#1B5E20,#388E3C)" },
  { id:6, bhk:2, propType:"Apartment", locality:"Vijayanagar",   label:"62 Lakhs",    img:"🏢", builder:"Brigade Group",      sqft:1180, badge:"Pre Launch",           badgeColor:"#6B21A8", badgeBg:"#F3E8FF", grad:"linear-gradient(135deg,#4A148C,#7B1FA2)" },
  { id:7, bhk:"Plot", propType:"Plot", locality:"Varuna",         label:"45 Lakhs",    img:"🏞️", builder:"MUDA Approved",      sqft:2400, badge:"Plot",                 badgeColor:"#92400E", badgeBg:"#FEF3C7", grad:"linear-gradient(135deg,#8B6914,#C8A84B)" },
  { id:8, bhk:"Plot", propType:"Plot", locality:"Ring Road",      label:"2.21 Crores", img:"🏞️", builder:"Nakshe Consultants", sqft:6000, badge:"Plot",                 badgeColor:"#92400E", badgeBg:"#FEF3C7", grad:"linear-gradient(135deg,#5D4037,#8D6E63)" },
];

const RENT = [
  { id:9,  bhk:2, propType:"Apartment", locality:"Saraswathipuram",  label:"18K/mo", img:"🏢", owner:"Owner", sqft:1050, badge:"Owner", badgeColor:"#166534", badgeBg:"#DCFCE7", grad:"linear-gradient(135deg,#0D47A1,#1976D2)" },
  { id:10, bhk:3, propType:"Apartment", locality:"Jayalakshmipuram", label:"25K/mo", img:"🏢", owner:"Agent", sqft:1400, badge:"Agent", badgeColor:"#92400E", badgeBg:"#FEF3C7", grad:"linear-gradient(135deg,#1A237E,#303F9F)" },
  { id:11, bhk:1, propType:"Apartment", locality:"Yadavagiri",       label:"10K/mo", img:"🏠", owner:"Owner", sqft:550,  badge:"Owner", badgeColor:"#166534", badgeBg:"#DCFCE7", grad:"linear-gradient(135deg,#004D40,#00796B)" },
  { id:12, bhk:2, propType:"Apartment", locality:"Hebbal",           label:"14K/mo", img:"🏢", owner:"Agent", sqft:980,  badge:"Agent", badgeColor:"#92400E", badgeBg:"#FEF3C7", grad:"linear-gradient(135deg,#37474F,#546E7A)" },
  { id:13, bhk:3, propType:"Villa",     locality:"Dattagalli",       label:"35K/mo", img:"🏡", owner:"Owner", sqft:2200, badge:"Owner", badgeColor:"#166534", badgeBg:"#DCFCE7", grad:"linear-gradient(135deg,#1A5C52,#2D8A7A)" },
  { id:14, bhk:2, propType:"Apartment", locality:"Ramakrishnanagar", label:"16K/mo", img:"🏢", owner:"Agent", sqft:1020, badge:"Agent", badgeColor:"#92400E", badgeBg:"#FEF3C7", grad:"linear-gradient(135deg,#1C2840,#2E4A80)" },
];

const HOT = [
  { id:15, name:"Prestige Falcon City", bhk:"2 & 3 BHK", locality:"Kuvempunagar", label:"₹90L–1.8Cr", img:"🏙️", tag:"🔥 Most Enquired", grad:"linear-gradient(135deg,#1A5C52,#0D3D34)" },
  { id:16, name:"Brigade El Mysuru",    bhk:"1,2 & 3 BHK", locality:"Ring Road",  label:"₹55L–1.4Cr", img:"🏢", tag:"⭐ New Launch",    grad:"linear-gradient(135deg,#1C2840,#2E4A80)" },
  { id:17, name:"Sobha Dream Gardens",  bhk:"2 & 3 BHK", locality:"Bannur Road",  label:"₹65L–1.2Cr", img:"🌿", tag:"🏅 Top Rated",     grad:"linear-gradient(135deg,#1B5E20,#388E3C)" },
  { id:18, name:"Mantri Synergy",       bhk:"3 & 4 BHK", locality:"Bogadi",       label:"₹1.1Cr–2Cr", img:"🏗️", tag:"🔥 Most Booked",   grad:"linear-gradient(135deg,#4A148C,#7B1FA2)" },
  { id:19, name:"Godrej Panorama",      bhk:"2,3 & 4 BHK", locality:"Gokulam",   label:"₹80L–2.5Cr", img:"🏡", tag:"💎 Premium",       grad:"linear-gradient(135deg,#8B6914,#C8A84B)" },
];

const LOCALITIES = [
  {name:"Bogadi",count:48,icon:"🏘️"},{name:"Bannur Road",count:34,icon:"🛣️"},
  {name:"Kuvempunagar",count:56,icon:"🌿"},{name:"Gokulam",count:41,icon:"🏡"},
  {name:"Vijayanagar",count:63,icon:"🏙️"},{name:"Saraswathipuram",count:29,icon:"📚"},
  {name:"Jayalakshmipuram",count:37,icon:"🌸"},{name:"Nazarbad",count:22,icon:"🕌"},
  {name:"Yadavagiri",count:31,icon:"⛰️"},{name:"Ring Road",count:55,icon:"🔄"},
];

const BHK_TYPES = ["1 BHK","2 BHK","3 BHK","4 BHK","4+ BHK","Plot"];
const PROP_TYPES = ["Apartments","Villas","Row Houses","Plots"];

const SERVICES = [
  { id:"s1", name:"Legal Services",        img:"⚖️",  imgGrad:"linear-gradient(145deg,#C8A882,#A07850)" },
  { id:"s2", name:"Renovation",            img:"🛋️",  imgGrad:"linear-gradient(145deg,#D4C8B8,#B8AA98)" },
  { id:"s3", name:"Home Loan",             img:"🏠",  imgGrad:"linear-gradient(145deg,#C8D8B0,#A8BF88)" },
  { id:"s4", name:"Interiors",             img:"🪑",  imgGrad:"linear-gradient(145deg,#E8D5C0,#D4B896)" },
  { id:"s5", name:"Construction",          img:"🏗️",  imgGrad:"linear-gradient(145deg,#B8C8D8,#8AA8C0)" },
  { id:"s6", name:"Legal Verification",    img:"🔍",  imgGrad:"linear-gradient(145deg,#D8C0C0,#C0A0A0)" },
  { id:"s7", name:"Property Registration", img:"📋",  imgGrad:"linear-gradient(145deg,#C0CCD8,#9AB0C8)" },
  { id:"s8", name:"Legal Opinion",         img:"📜",  imgGrad:"linear-gradient(145deg,#D4C4A8,#B8A888)" },
];

// ─── HORIZONTAL PROPERTY CARD (image left, details right) ───────────────────
function HCard({ p, isRent }) {
  const title = p.bhk === "Plot" ? "Plot" : `${p.bhk} BHK ${p.propType}`;
  const sub   = p.builder ? p.builder : p.owner;
  return (
    <div style={{
      minWidth: 270, maxWidth: 270, height: 120,
      background: "white", borderRadius: 16,
      boxShadow: "0 2px 14px rgba(28,24,18,0.09)",
      display: "flex", overflow: "hidden",
      scrollSnapAlign: "start", flexShrink: 0, cursor: "pointer",
      transition: "box-shadow 0.2s, transform 0.2s",
    }}
      onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow="0 8px 28px rgba(28,24,18,0.16)";}}
      onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="0 2px 14px rgba(28,24,18,0.09)";}}
    >
      {/* LEFT — image panel */}
      <div style={{
        width: 96, flexShrink: 0,
        background: p.grad,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 34, position: "relative",
      }}>
        {p.img}
        <span style={{
          position:"absolute", bottom:6, left:"50%", transform:"translateX(-50%)",
          background: p.badgeBg, color: p.badgeColor,
          fontSize: 8, fontFamily:"'DM Sans',sans-serif", fontWeight:700,
          padding:"2px 7px", borderRadius:999, whiteSpace:"nowrap",
        }}>{p.badge}</span>
      </div>

      {/* RIGHT — details */}
      <div style={{ flex:1, padding:"12px 13px", display:"flex", flexDirection:"column", justifyContent:"space-between", overflow:"hidden" }}>
        <div>
          <div style={{ fontFamily:"'DM Sans',sans-serif", fontWeight:700, fontSize:13, color:"#1C1812", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>{title}</div>
          <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:11, color:"#888", marginTop:2, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>📍 {p.locality} · {p.sqft} sq.ft</div>
          <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:10, color:"#BBB", marginTop:1, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>{sub}</div>
        </div>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginTop:4 }}>
          <div style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, fontSize:15, color:"#C8782A" }}>₹ {p.label}</div>
          <button style={{
            background:"linear-gradient(135deg,#C8782A,#A85E1A)", color:"white",
            border:"none", borderRadius:8, padding:"5px 12px",
            fontFamily:"'DM Sans',sans-serif", fontWeight:600, fontSize:11, cursor:"pointer",
          }}>{isRent ? "Contact" : "Enquire"}</button>
        </div>
      </div>
    </div>
  );
}

// ─── HORIZONTAL HOT PROJECT CARD ─────────────────────────────────────────────
function HotHCard({ p }) {
  return (
    <div style={{
      minWidth: 270, maxWidth: 270, height: 112,
      background:"white", borderRadius:16,
      boxShadow:"0 2px 14px rgba(28,24,18,0.09)",
      display:"flex", overflow:"hidden",
      scrollSnapAlign:"start", flexShrink:0, cursor:"pointer",
      transition:"box-shadow 0.2s, transform 0.2s",
    }}
      onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow="0 8px 28px rgba(28,24,18,0.16)";}}
      onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="0 2px 14px rgba(28,24,18,0.09)";}}
    >
      <div style={{ width:88, flexShrink:0, background:p.grad, display:"flex", alignItems:"center", justifyContent:"center", fontSize:32, position:"relative" }}>
        {p.img}
        <div style={{ position:"absolute", bottom:0, left:0, right:0, background:"linear-gradient(transparent,rgba(0,0,0,0.7))", padding:"4px 6px" }}>
          <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:9, color:"#FFD700", fontWeight:700 }}>{p.tag}</div>
        </div>
      </div>
      <div style={{ flex:1, padding:"12px 12px", display:"flex", flexDirection:"column", justifyContent:"space-between", overflow:"hidden" }}>
        <div>
          <div style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, fontSize:13, color:"#1C1812", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>{p.name}</div>
          <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:11, color:"#888", marginTop:2 }}>📍 {p.locality}</div>
          <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:10, color:"#AAA", marginTop:1 }}>{p.bhk}</div>
        </div>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <div style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, fontSize:13, color:"#C8782A" }}>{p.label}</div>
          <button style={{ background:"transparent", color:"#C8782A", border:"1.5px solid #C8782A", borderRadius:7, padding:"4px 10px", fontFamily:"'DM Sans',sans-serif", fontWeight:600, fontSize:11, cursor:"pointer" }}>Details →</button>
        </div>
      </div>
    </div>
  );
}

// ─── HORIZONTAL LOCALITY CARD ─────────────────────────────────────────────────
function LocHCard({ loc }) {
  return (
    <div style={{
      minWidth:150, height:60,
      background:"white", borderRadius:14,
      boxShadow:"0 2px 8px rgba(28,24,18,0.07)",
      display:"flex", alignItems:"center", gap:10, padding:"0 14px",
      scrollSnapAlign:"start", flexShrink:0, cursor:"pointer",
      border:"1.5px solid transparent", transition:"all 0.2s",
    }}
      onMouseEnter={e=>{e.currentTarget.style.borderColor="#C8782A";e.currentTarget.style.transform="translateY(-2px)";}}
      onMouseLeave={e=>{e.currentTarget.style.borderColor="transparent";e.currentTarget.style.transform="";}}
    >
      <span style={{fontSize:22}}>{loc.icon}</span>
      <div>
        <div style={{fontFamily:"'DM Sans',sans-serif",fontWeight:700,fontSize:13,color:"#1C1812"}}>{loc.name}</div>
        <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:10,color:"#C8782A",fontWeight:700}}>{loc.count} properties</div>
      </div>
    </div>
  );
}

// ─── HORIZONTAL PROPERTY TYPE CARD ────────────────────────────────────────────
function TypeHCard({ t }) {
  return (
    <div style={{
      minWidth:150, height:64,
      background:"white", borderRadius:14,
      boxShadow:"0 2px 8px rgba(28,24,18,0.07)",
      display:"flex", alignItems:"center", gap:11, padding:"0 14px",
      scrollSnapAlign:"start", flexShrink:0, cursor:"pointer", transition:"all 0.2s",
    }}
      onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 6px 20px rgba(28,24,18,0.12)";}}
      onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="0 2px 8px rgba(28,24,18,0.07)";}}
    >
      <div style={{ width:40,height:40,borderRadius:11,background:t.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0 }}>{t.icon}</div>
      <div>
        <div style={{fontFamily:"'DM Sans',sans-serif",fontWeight:700,fontSize:13,color:"#1C1812"}}>{t.type}</div>
        <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:10,color:t.accent,fontWeight:700}}>{t.count} listings</div>
      </div>
    </div>
  );
}

// ─── HORIZONTAL BUDGET CARD ────────────────────────────────────────────────────
function BudgetHCard({ b }) {
  return (
    <div style={{
      minWidth:170, height:68,
      background:"white", borderRadius:14,
      boxShadow:"0 2px 8px rgba(28,24,18,0.07)",
      display:"flex", alignItems:"center", gap:11, padding:"0 14px",
      scrollSnapAlign:"start", flexShrink:0, cursor:"pointer", transition:"all 0.2s",
    }}
      onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 6px 20px rgba(28,24,18,0.12)";}}
      onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="0 2px 8px rgba(28,24,18,0.07)";}}
    >
      <div style={{ width:44,height:44,borderRadius:12,background:b.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0 }}>{b.icon}</div>
      <div>
        <div style={{fontFamily:"'DM Sans',sans-serif",fontWeight:700,fontSize:13,color:"#1C1812"}}>{b.label}</div>
        <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:10,color:"#999"}}>{b.sub}</div>
        <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:10,color:b.color,fontWeight:700,marginTop:1}}>{b.count} properties</div>
      </div>
    </div>
  );
}

// ─── SERVICE CARD (vertical: large rounded image top, label below, rose border)
function ServiceCard({ s }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={()=>setHover(true)}
      onMouseLeave={()=>setHover(false)}
      style={{
        minWidth:118, maxWidth:118,
        background:"white", borderRadius:20,
        border: hover ? "1.5px solid #C8A89A" : "1.5px solid #F0D8D0",
        boxShadow: hover ? "0 6px 20px rgba(200,120,42,0.14)" : "0 1px 6px rgba(28,24,18,0.06)",
        padding:"12px 10px 14px",
        display:"flex", flexDirection:"column", alignItems:"center", gap:9,
        scrollSnapAlign:"start", flexShrink:0, cursor:"pointer",
        transform: hover ? "translateY(-3px)" : "none",
        transition:"all 0.2s",
      }}
    >
      <div style={{
        width:84, height:84, borderRadius:18, overflow:"hidden",
        background:s.imgGrad, flexShrink:0,
        display:"flex", alignItems:"center", justifyContent:"center",
        fontSize:40, boxShadow:"0 2px 8px rgba(0,0,0,0.10)",
      }}>
        {s.img}
      </div>
      <div style={{
        fontFamily:"'DM Sans',sans-serif", fontWeight:700, fontSize:12,
        color:"#1C1812", textAlign:"center", lineHeight:1.35,
      }}>{s.name}</div>
    </div>
  );
}

// ─── SECTION WRAPPER ──────────────────────────────────────────────────────────
function Section({ title, sub, linkLabel, children }) {
  return (
    <div style={{ padding:"26px 0 16px" }}>
      <div style={{ padding:"0 20px", display:"flex", justifyContent:"space-between", alignItems:"baseline", marginBottom:2 }}>
        <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:19, fontWeight:700, color:"#1C1812" }}>{title}</h2>
        {linkLabel && <a href="#" style={{ fontFamily:"'DM Sans',sans-serif", fontSize:12, color:"#C8782A", textDecoration:"none", fontWeight:700 }}>{linkLabel}</a>}
      </div>
      {sub && <p style={{ padding:"0 20px", fontFamily:"'DM Sans',sans-serif", fontSize:12, color:"#AAA", marginBottom:14 }}>{sub}</p>}
      <div style={{
        display:"flex", gap:12, overflowX:"auto", paddingLeft:20, paddingRight:20, paddingBottom:10,
        scrollSnapType:"x mandatory", WebkitOverflowScrolling:"touch", scrollbarWidth:"none", msOverflowStyle:"none",
      }}
        className="nobar"
      >
        {children}
      </div>
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function MysurHomes() {
  const [tab, setTab]             = useState("Buy");
  const [search, setSearch]       = useState("");
  const [activeBhk, setActiveBhk] = useState(null);
  const [listingTab, setListingTab] = useState("sale");
  const [showForm, setShowForm]   = useState(false);

  const bhkFilter = list => {
    if (!activeBhk) return list;
    if (activeBhk === "Plot")    return list.filter(p => p.bhk === "Plot");
    if (activeBhk === "4+ BHK") return list.filter(p => typeof p.bhk === "number" && p.bhk >= 4);
    return list.filter(p => String(p.bhk) === activeBhk.replace(" BHK",""));
  };

  const listed = listingTab === "sale" ? bhkFilter(SALE) : bhkFilter(RENT);

  return (
    <div style={{ fontFamily:"'Georgia',serif", background:"#FBF7F0", minHeight:"100vh", color:"#1C1812" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        .nobar::-webkit-scrollbar{display:none;}
        .tb{padding:9px 16px;border:none;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:500;transition:all .2s;border-radius:6px 6px 0 0;}
        .ta{background:#C8782A;color:white;}
        .ti{background:rgba(255,255,255,.15);color:rgba(255,255,255,.75);}
        .ti:hover{background:rgba(255,255,255,.25);}
        .chip{padding:7px 15px;border-radius:999px;border:1.5px solid #C8782A;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:500;transition:all .2s;background:white;color:#1C1812;white-space:nowrap;flex-shrink:0;scroll-snap-align:start;}
        .chip-a{background:#C8782A;color:white;}
        .lt{padding:8px 20px;border:none;cursor:pointer;font-family:'DM Sans',sans-serif;font-weight:600;font-size:14px;border-bottom:3px solid transparent;background:transparent;color:#AAA;transition:all .2s;}
        .lt-a{color:#C8782A;border-bottom-color:#C8782A;}
        .bp{background:linear-gradient(135deg,#C8782A,#A85E1A);color:white;border:none;padding:11px 22px;border-radius:10px;cursor:pointer;font-family:'DM Sans',sans-serif;font-weight:600;font-size:14px;transition:all .2s;}
        .bp:hover{opacity:.9;transform:translateY(-1px);}
        .bo{background:transparent;color:white;border:2px solid rgba(255,255,255,.8);padding:10px 22px;border-radius:10px;cursor:pointer;font-family:'DM Sans',sans-serif;font-weight:600;font-size:14px;}
        .mov{position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:100;display:flex;align-items:center;justify-content:center;padding:16px;}
        .mod{background:white;border-radius:20px;padding:26px 22px;max-width:440px;width:100%;max-height:90vh;overflow-y:auto;}
        input,select{width:100%;padding:10px 13px;border:1.5px solid #E0D9CF;border-radius:8px;font-family:'DM Sans',sans-serif;font-size:14px;outline:none;background:#FAFAF8;}
        input:focus,select:focus{border-color:#C8782A;}
        label{font-family:'DM Sans',sans-serif;font-size:12px;color:#666;display:block;margin-bottom:4px;}
        .g2{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
        .empty{font-family:'DM Sans',sans-serif;color:#BBB;font-size:13px;padding:10px 0;flex-shrink:0;}
      `}</style>

      {/* ── NAV ── */}
      <nav style={{ background:"white", borderBottom:"1px solid #EDE5D8", padding:"0 20px", display:"flex", alignItems:"center", justifyContent:"space-between", height:58, position:"sticky", top:0, zIndex:50, boxShadow:"0 2px 10px rgba(0,0,0,.06)" }}>
        <div style={{ display:"flex", alignItems:"center", gap:9 }}>
          <div style={{ width:32, height:32, background:"linear-gradient(135deg,#C8782A,#1A5C52)", borderRadius:9, display:"flex", alignItems:"center", justifyContent:"center", fontSize:16 }}>🏰</div>
          <div>
            <div style={{ fontFamily:"'Playfair Display',serif", fontSize:17, fontWeight:700, color:"#1C1812", lineHeight:1 }}>MysurHomes</div>
            <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:9, color:"#C8782A", letterSpacing:".09em", fontWeight:700 }}>MYSURU · ZERO BROKERAGE</div>
          </div>
        </div>
        <button className="bp" style={{ padding:"7px 15px", fontSize:13 }} onClick={()=>setShowForm(true)}>+ Post Free</button>
      </nav>

      {/* ── HERO ── */}
      <section style={{ background:"linear-gradient(160deg,#1A5C52 0%,#0D3D34 55%,#1C2818 100%)", padding:"40px 20px 52px", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:-40, right:-40, width:160, height:160, borderRadius:"50%", background:"rgba(200,120,42,.12)", pointerEvents:"none" }}/>
        <div style={{ position:"absolute", bottom:-20, left:-20, width:110, height:110, borderRadius:"50%", background:"rgba(200,120,42,.08)", pointerEvents:"none" }}/>

        <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:11, color:"#F0C87A", letterSpacing:".13em", fontWeight:700, marginBottom:10, textAlign:"center" }}>🏰 MYSURU'S OWN PROPERTY PORTAL</div>
        <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:24, fontWeight:900, color:"white", textAlign:"center", lineHeight:1.3, marginBottom:8 }}>
          Find Your Dream Property<br/>@ <span style={{ color:"#F0C87A" }}>Heritage & Fast Developing</span><br/>City Mysuru
        </h1>
        <p style={{ fontFamily:"'DM Sans',sans-serif", textAlign:"center", color:"rgba(255,255,255,.55)", fontSize:13, marginBottom:24 }}>Apartments · Villas · Plots · Zero Brokerage</p>

        <div style={{ display:"flex", justifyContent:"center", gap:3, marginBottom:0 }}>
          {["Buy","Rent","Plots","Commercial"].map(t=>(
            <button key={t} className={`tb ${tab===t?"ta":"ti"}`} onClick={()=>setTab(t)}>{t}</button>
          ))}
        </div>
        <div style={{ background:"white", borderRadius:"0 12px 12px 12px", padding:"13px", maxWidth:490, margin:"0 auto", boxShadow:"0 8px 32px rgba(0,0,0,.25)" }}>
          <div style={{ display:"flex", gap:8 }}>
            <div style={{ flex:1, position:"relative" }}>
              <span style={{ position:"absolute", left:10, top:"50%", transform:"translateY(-50%)", fontSize:15 }}>📍</span>
              <input placeholder="Search locality or project…" value={search} onChange={e=>setSearch(e.target.value)} style={{ paddingLeft:32 }}/>
            </div>
            <button className="bp" style={{ padding:"10px 16px", fontSize:14 }}>Search</button>
          </div>
          <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:11, color:"#AAA", marginTop:7 }}>
            Popular:{" "}
            {["Bogadi","Kuvempunagar","Ring Road","Gokulam"].map((l,i,a)=>(
              <span key={l}><span style={{ color:"#C8782A", cursor:"pointer" }}>{l}</span>{i<a.length-1?" · ":""}</span>
            ))}
          </div>
        </div>
        <div style={{ display:"flex", justifyContent:"center", gap:26, marginTop:24 }}>
          {[["500+","Properties"],["200+","Owners"],["10+","Localities"]].map(([n,l])=>(
            <div key={l} style={{ textAlign:"center" }}>
              <div style={{ fontFamily:"'Playfair Display',serif", fontSize:21, fontWeight:700, color:"#F0C87A" }}>{n}</div>
              <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:11, color:"rgba(255,255,255,.5)" }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BHK FILTER ── */}
      <div style={{ padding:"16px 0 4px" }}>
        <p style={{ padding:"0 20px 8px", fontFamily:"'DM Sans',sans-serif", fontWeight:600, fontSize:12, color:"#777" }}>Filter by size:</p>
        <div className="nobar" style={{ display:"flex", gap:10, overflowX:"auto", paddingLeft:20, paddingRight:20, paddingBottom:6, scrollSnapType:"x mandatory", WebkitOverflowScrolling:"touch", scrollbarWidth:"none" }}>
          {BHK_TYPES.map(b=>(
            <button key={b} className={`chip ${activeBhk===b?"chip-a":""}`} onClick={()=>setActiveBhk(activeBhk===b?null:b)}>{b}</button>
          ))}
        </div>
      </div>

      {/* ── NEW LAUNCHES ── */}
      <Section title="New Launches" sub="RERA-verified projects · Swipe to explore →" linkLabel="View all →">
        {bhkFilter(SALE).length > 0
          ? bhkFilter(SALE).map(p=><HCard key={p.id} p={p} isRent={false}/>)
          : <p className="empty">No properties match this filter.</p>}
      </Section>

      {/* ── SERVICES ── */}
      <Section title="Our Services" sub="Everything you need, beyond just a listing" linkLabel="See all →">
        {SERVICES.map(s=><ServiceCard key={s.id} s={s}/>)}
      </Section>

      {/* ── HOT PROJECTS ── */}
      <Section title="🔥 Hot Projects" sub="Most enquired in Mysuru right now" linkLabel="See all →">
        {HOT.map(p=><HotHCard key={p.id} p={p}/>)}
      </Section>

      {/* ── RECENT LISTINGS ── */}
      <div style={{ padding:"26px 0 16px" }}>
        <div style={{ padding:"0 20px", display:"flex", justifyContent:"space-between", alignItems:"baseline", marginBottom:4 }}>
          <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:19, fontWeight:700 }}>Recent Listings</h2>
          <a href="#" style={{ fontFamily:"'DM Sans',sans-serif", fontSize:12, color:"#C8782A", textDecoration:"none", fontWeight:700 }}>View all →</a>
        </div>
        <div style={{ padding:"0 20px", display:"flex", borderBottom:"1.5px solid #EDE5D8", marginBottom:14 }}>
          <button className={`lt ${listingTab==="sale"?"lt-a":""}`} onClick={()=>setListingTab("sale")}>For Sale</button>
          <button className={`lt ${listingTab==="rent"?"lt-a":""}`} onClick={()=>setListingTab("rent")}>For Rent</button>
        </div>
        <div className="nobar" style={{ display:"flex", gap:12, overflowX:"auto", paddingLeft:20, paddingRight:20, paddingBottom:10, scrollSnapType:"x mandatory", WebkitOverflowScrolling:"touch", scrollbarWidth:"none" }}>
          {listed.length > 0
            ? listed.map(p=><HCard key={p.id} p={p} isRent={listingTab==="rent"}/>)
            : <p className="empty">No listings match this filter.</p>}
        </div>
      </div>

      {/* ── PROPERTY TYPES ── */}
      <Section title="Property Types" sub="Browse by what you're looking for">
        {[
          {type:"Apartments",icon:"🏢",color:"#DBEAFE",accent:"#1565C0",count:234},
          {type:"Villas",    icon:"🏡",color:"#F3E8FF",accent:"#6B21A8",count:67},
          {type:"Plots",     icon:"🏞️",color:"#FEF3C7",accent:"#92400E",count:128},
          {type:"Row Houses",icon:"🏘️",color:"#DCFCE7",accent:"#166534",count:43},
          {type:"Commercial",icon:"🏗️",color:"#FFF9C4",accent:"#827717",count:28},
        ].map(t=><TypeHCard key={t.type} t={t}/>)}
      </Section>

      {/* ── BUDGET ── */}
      <Section title="Browse by Budget" sub="Pick your price range in Mysuru">
        {[
          {label:"Affordable",sub:"Below ₹50 Lakhs",  color:"#1A5C52",bg:"#DCFCE7",icon:"🌱",count:142},
          {label:"Mid-Range", sub:"₹50L – ₹1.5Cr",   color:"#C8782A",bg:"#FEF3C7",icon:"⭐",count:198},
          {label:"Premium",   sub:"₹1.5Cr – ₹4Cr",   color:"#6B21A8",bg:"#F3E8FF",icon:"💎",count:87},
          {label:"Luxury",    sub:"Above ₹4 Crore",   color:"#B45309",bg:"#FFF9C4",icon:"👑",count:23},
        ].map(b=><BudgetHCard key={b.label} b={b}/>)}
      </Section>

      {/* ── POPULAR LOCALITIES ── */}
      <Section title="Popular Localities" sub="Mysuru's most sought-after neighbourhoods" linkLabel="All →">
        {LOCALITIES.map(loc=><LocHCard key={loc.name} loc={loc}/>)}
      </Section>

      {/* ── CTA ── */}
      <section style={{ margin:"8px 20px 32px", background:"linear-gradient(135deg,#1A5C52,#0D3D34)", borderRadius:20, padding:"26px 22px", textAlign:"center" }}>
        <div style={{ fontSize:32, marginBottom:8 }}>🏰</div>
        <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:20, fontWeight:700, color:"white", marginBottom:8 }}>List Your Mysuru Property</h2>
        <p style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,.6)", fontSize:13, marginBottom:18, lineHeight:1.6 }}>
          Free listing. Reach genuine buyers & renters. Zero brokerage.
        </p>
        <div style={{ display:"flex", gap:10, justifyContent:"center" }}>
          <button className="bp" onClick={()=>setShowForm(true)}>Post Free Ad</button>
          <button className="bo">Learn More</button>
        </div>
        <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:11, color:"rgba(255,255,255,.38)", marginTop:12 }}>✓ Verified Buyers · ✓ Free · ✓ Mysuru Only</div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background:"#1C1812", padding:"24px 20px", textAlign:"center" }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:8, marginBottom:10 }}>
          <div style={{ width:26, height:26, background:"linear-gradient(135deg,#C8782A,#1A5C52)", borderRadius:7, display:"flex", alignItems:"center", justifyContent:"center", fontSize:13 }}>🏰</div>
          <span style={{ fontFamily:"'Playfair Display',serif", color:"white", fontSize:15, fontWeight:700 }}>MysurHomes</span>
        </div>
        <p style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,.35)", fontSize:12, lineHeight:1.7 }}>
          Mysuru's most trusted local property portal<br/>Zero brokerage · Free listing · 100% Mysuru
        </p>
        <div style={{ display:"flex", justifyContent:"center", gap:18, marginTop:14 }}>
          {["Buy","Rent","Plots","About","Contact"].map(l=>(
            <span key={l} style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,.38)", fontSize:12, cursor:"pointer" }}>{l}</span>
          ))}
        </div>
        <div style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,.18)", fontSize:11, marginTop:12 }}>© 2026 MysurHomes. Built with ❤️ for Mysuru.</div>
      </footer>

      {/* ── MODAL ── */}
      {showForm && (
        <div className="mov" onClick={e=>e.target===e.currentTarget&&setShowForm(false)}>
          <div className="mod">
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:18 }}>
              <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:19, fontWeight:700 }}>Post Your Property</h2>
              <button onClick={()=>setShowForm(false)} style={{ background:"none", border:"none", fontSize:24, cursor:"pointer", color:"#999" }}>×</button>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:13 }}>
              <div><label>Your Name</label><input placeholder="e.g. Ramesh Kumar"/></div>
              <div><label>Phone Number</label><input placeholder="+91 98765 43210" type="tel"/></div>
              <div className="g2">
                <div><label>Listing Type</label><select><option>For Sale</option><option>For Rent</option></select></div>
                <div><label>Property Type</label><select>{PROP_TYPES.map(t=><option key={t}>{t}</option>)}</select></div>
              </div>
              <div><label>Locality in Mysuru</label><select>{LOCALITIES.map(l=><option key={l.name}>{l.name}</option>)}</select></div>
              <div className="g2">
                <div><label>BHK / Size</label><select>{["1 BHK","2 BHK","3 BHK","4 BHK","4+ BHK","Plot"].map(b=><option key={b}>{b}</option>)}</select></div>
                <div><label>Price (₹)</label><input placeholder="e.g. 55,00,000"/></div>
              </div>
              <button className="bp" style={{ width:"100%", marginTop:4 }}>Submit Free Listing 🏡</button>
              <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:11, color:"#AAA", textAlign:"center" }}>✓ Free · ✓ No brokerage · ✓ Mysuru verified buyers</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
