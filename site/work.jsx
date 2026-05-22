// Rodtech Our Work page — emerald
// "Slow magazine spread" format: 4 jobs, one per scroll section.
// Each is a big emerald placeholder (with intended-image description)
// + mono caption on the side + one-sentence story underneath.
//
// All case story copy is DRAFT — Dan to confirm/correct details.

const ACCENT = '#0C6B4F';
const INK = '#1a1a2e';
const MUTED = '#6e6e84';
const PAPER = '#ffffff';
const CREAM = '#f7f5ef';

const CASES = [
  {
    n: '01',
    title: 'Chest freezer · Bandaptai',
    when: 'Early 2025',
    service: 'Refrigeration',
    image: 'images/freezer-repair.webp',
    imagePos: 'center 30%',
    story: "A deep freezer that had been off for over a year. Compressor still good — gas leak and a failed thermostat. Re-charged and running cold by the afternoon.",
    aspect: '3/4',
  },
  {
    n: '02',
    title: 'Front-loader washer · home call',
    when: '2024',
    service: 'Home Appliances',
    image: 'images/washing-machine.webp',
    imagePos: 'center 60%',
    story: "Drum bearings had killed the main controller. New board sourced from Nairobi, swapped on-site, washer back in service the next day.",
    aspect: '4/3',
  },
  {
    n: '03',
    title: 'Commercial chiller · Eldoret town',
    when: 'Mid 2024',
    service: 'Refrigeration',
    image: 'images/compressor-r22.jpg',
    imagePos: 'center center',
    story: "Original compressor seized during a hot week in March. Sourced a compatible R22 unit, swapped and re-gassed without losing the day's stock.",
    aspect: '3/4',
  },
  {
    n: '04',
    title: 'Walk-in cold room · butchery',
    when: 'Early 2025',
    service: 'Refrigeration',
    image: 'images/compressor-embraco.webp',
    imagePos: 'center center',
    story: "A walk-in cold room running warm on a Saturday morning. Tracked it to a fouled condenser coil, descaled and flushed. Back to spec inside two hours.",
    aspect: '4/3',
  },
];

function RodtechWork() {
  return (
    <div style={{
      width: '100%', background: PAPER, color: INK,
      fontFamily: '"DM Sans", -apple-system, system-ui, sans-serif',
    }}>
      <WorkNav/>
      <WorkHeader/>
      <div style={{padding: '0 64px'}}>
        {CASES.map((c, i) => <CaseSpread key={i} {...c} index={i}/>)}
      </div>
      <WorkCTA/>
      <SiteFooter/>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────

function WorkNav() {
  return (
    <div style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(255,255,255,0.88)',
      WebkitBackdropFilter: 'blur(20px) saturate(160%)',
      backdropFilter: 'blur(20px) saturate(160%)',
      borderBottom: '1px solid rgba(235,232,225,0.6)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '20px 64px',
    }}>
      <a href="Rodtech Home.html" style={{
        textDecoration: 'none', color: INK,
        fontSize: 26, fontWeight: 700, letterSpacing: '-0.02em',
      }}>
        rod<span style={{color: ACCENT}}>tech</span>
      </a>
      <div style={{
        display: 'flex', gap: 48, alignItems: 'center',
        fontSize: 15, fontWeight: 500, color: INK,
      }}>
        <a href="Rodtech Services.html" style={{color: INK, textDecoration: 'none'}}>Services</a>
        <a href="Rodtech About.html" style={{color: INK, textDecoration: 'none'}}>About</a>
        <span style={{color: ACCENT, fontWeight: 600}}>Our Work</span>
        <span>Get in Touch</span>
        <span style={{
          padding: '10px 18px', borderRadius: 999, background: INK, color: '#fff',
          fontSize: 14, fontWeight: 600,
        }}>
          Call 0793 562 956
        </span>
      </div>
    </div>
  );
}

function WorkHeader() {
  return (
    <div style={{padding: '60px 64px 60px'}}>
      <div style={{
        fontFamily: '"IBM Plex Mono", monospace',
        fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
        color: MUTED, marginBottom: 28,
      }}>
        <a href="Rodtech Home.html" style={{color: MUTED, textDecoration: 'none'}}>Home</a>
        <span style={{margin: '0 12px', opacity: 0.5}}>/</span>
        <span style={{color: INK}}>Our Work</span>
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 80,
        alignItems: 'end',
      }}>
        <h1 style={{
          margin: 0,
          fontSize: 88, lineHeight: 0.98, fontWeight: 700,
          letterSpacing: '-0.04em',
        }}>
          A few jobs we're<br/>
          <span style={{color: ACCENT}}>proud of</span>.
        </h1>
        <div style={{
          fontSize: 17, lineHeight: 1.55, color: '#3a3a4a', maxWidth: 420,
        }}>
          Four cases out of the hundreds we've worked on since 2019.
          Picked because each shows something specific — a part
          replaced, a freezer revived, a commercial line saved
          from a day of lost stock.
        </div>
      </div>
    </div>
  );
}

function CaseSpread({n, title, when, service, image, imagePos, story, aspect, index}) {
  // Alternate layout — image-right on even indexes, image-left on odd
  const imageRight = index % 2 === 0;
  return (
    <div style={{
      padding: '100px 0',
      borderTop: index === 0 ? `1px solid #ebe8e1` : 'none',
      borderBottom: `1px solid #ebe8e1`,
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: imageRight ? '1fr 1.4fr' : '1.4fr 1fr',
        gap: 60, alignItems: 'center',
      }}>
        {!imageRight && <CaseImage src={image} pos={imagePos} aspect={aspect} n={n}/>}
        <div>
          <div style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: ACCENT, marginBottom: 22, fontWeight: 600,
            display: 'flex', alignItems: 'center', gap: 14,
          }}>
            <span>Case {n}</span>
            <span style={{opacity: 0.4}}>—</span>
            <span style={{color: MUTED, fontWeight: 500}}>{service} · {when}</span>
          </div>
          <h2 style={{
            margin: 0,
            fontSize: 46, fontWeight: 700, lineHeight: 1.05,
            letterSpacing: '-0.03em',
          }}>
            {title}
          </h2>
          <p style={{
            marginTop: 28, marginBottom: 0,
            fontSize: 17, lineHeight: 1.6, color: '#3a3a4a',
            maxWidth: 460,
          }}>
            {story}
          </p>
        </div>
        {imageRight && <CaseImage src={image} pos={imagePos} aspect={aspect} n={n}/>}
      </div>
    </div>
  );
}

function CaseImage({src, pos, aspect, n}) {
  return (
    <div style={{
      aspectRatio: aspect, borderRadius: 22, overflow: 'hidden',
      background: '#0c0a14', position: 'relative',
    }}>
      <img src={src} alt={`Case ${n} — documentation photo`} style={{
        width: '100%', height: '100%', objectFit: 'cover',
        objectPosition: pos || 'center center',
        filter: 'saturate(0.92) contrast(1.05)',
        display: 'block',
      }}/>
      {/* Subtle vignette + bottom gradient for stamp legibility */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(6,20,15,0.35) 0%, transparent 25%, transparent 70%, rgba(6,20,15,0.5) 100%)',
        pointerEvents: 'none',
      }}/>
      {/* Case # stamp */}
      <div style={{
        position: 'absolute', top: 20, left: 22,
        fontFamily: '"IBM Plex Mono", monospace', fontSize: 10,
        letterSpacing: '0.18em', textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.9)', fontWeight: 600,
        padding: '6px 12px', borderRadius: 999,
        background: 'rgba(0,0,0,0.4)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}>
        Ref #{n}
      </div>
    </div>
  );
}

function WorkCTA() {
  return (
    <div style={{padding: '120px 64px 100px'}}>
      <div style={{
        textAlign: 'center', maxWidth: 720, margin: '0 auto',
      }}>
        <div style={{
          fontFamily: '"IBM Plex Mono", monospace',
          fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: ACCENT, marginBottom: 22, fontWeight: 600,
        }}>
          Your appliance next?
        </div>
        <h2 style={{
          margin: 0,
          fontSize: 56, fontWeight: 700, lineHeight: 1.05,
          letterSpacing: '-0.03em',
        }}>
          Tell us what's<br/>
          <span style={{color: ACCENT}}>broken</span>.
        </h2>
        <div style={{marginTop: 36}}>
          <a href="#" style={{
            display: 'inline-flex', alignItems: 'center', gap: 14,
            padding: '18px 30px', borderRadius: 999, background: INK, color: '#fff',
            fontSize: 16, fontWeight: 600, textDecoration: 'none',
          }}>
            Contact us
            <span style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: 26, height: 26, borderRadius: '50%', background: ACCENT, color: '#fff',
              fontSize: 14, fontWeight: 700,
            }}>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function SiteFooter() {
  return (
    <div style={{padding: '0 64px 60px'}}>
      <div style={{
        borderTop: '1px solid #ebe8e1', paddingTop: 50,
        display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
        gap: 40,
      }}>
        <div>
          <div style={{fontSize: 26, fontWeight: 700, letterSpacing: '-0.02em'}}>
            rod<span style={{color: ACCENT}}>tech</span>
          </div>
          <div style={{marginTop: 18, fontSize: 14, color: MUTED, lineHeight: 1.55, maxWidth: 280}}>
            Rodtech Ventures Ltd. Bandaptai, Eldoret — covering the
            North Rift region of Kenya since 2019.
          </div>
        </div>
        <FooterCol title="Services" items={['Refrigeration', 'Electrical', 'Appliances', 'Solar & Inverters', 'Industrial']}/>
        <FooterCol title="Company" items={['Services', 'About', 'Our Work', 'Get in Touch']}/>
        <FooterCol title="Contact" items={['0793 562 956', 'WhatsApp', 'hello@rodtech.co.ke', 'Bandaptai, Eldoret', 'Open 24 / 7']}/>
      </div>
      <div style={{
        marginTop: 50, paddingTop: 24, borderTop: '1px solid #ebe8e1',
        display: 'flex', justifyContent: 'space-between',
        fontSize: 12, color: MUTED,
      }}>
        <span>© 2026 Rodtech Ventures Ltd</span>
        <span>Built in Eldoret · v1.0</span>
      </div>
    </div>
  );
}

function FooterCol({title, items}) {
  return (
    <div>
      <div style={{
        fontFamily: '"IBM Plex Mono", monospace', fontSize: 10,
        letterSpacing: '0.16em', textTransform: 'uppercase',
        color: MUTED, marginBottom: 18,
      }}>
        {title}
      </div>
      <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
        {items.map((it, i) => (
          <div key={i} style={{fontSize: 14, color: INK}}>{it}</div>
        ))}
      </div>
    </div>
  );
}

window.RodtechWork = RodtechWork;
