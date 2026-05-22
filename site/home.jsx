// Full Rodtech home page — emerald direction
// Sections, top → bottom:
//  1. Nav
//  2. Hero (split-color headline + atmospheric image w/ offset tile)
//  3. Trust strip (4.8★ · 24/7 · same-day · 64 reviews)
//  4. Areas of expertise — 3 cards + "See all services" button
//  5. The revival proof — pull quote from a real review
//  6. Mission line (centered)
//  7. CTA band (call us / WhatsApp)
//  8. Footer

const ACCENT = '#0C6B4F';
const ACCENT_DEEP = '#084A37';
const INK = '#1a1a2e';
const MUTED = '#6e6e84';
const PAPER = '#ffffff';

function useIsMobile(breakpoint = 768) {
  const [mobile, setMobile] = React.useState(window.innerWidth < breakpoint);
  React.useEffect(() => {
    const handler = () => setMobile(window.innerWidth < breakpoint);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, [breakpoint]);
  return mobile;
}

function RodtechHome() {
  return (
    <div style={{
      width: '100%', background: PAPER, color: INK,
      fontFamily: '"DM Sans", -apple-system, system-ui, sans-serif',
    }}>
      <Nav/>
      <Hero/>
      <TrustStrip/>
      <AreasOfExpertise/>
      <RevivalProof/>
      <MissionLine/>
      <CTABand/>
      <Footer/>
    </div>
  );
}

function Nav() {
  const mobile = useIsMobile();
  const [open, setOpen] = React.useState(false);

  return (
    <div style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(255,255,255,0.88)',
      WebkitBackdropFilter: 'blur(20px) saturate(160%)',
      backdropFilter: 'blur(20px) saturate(160%)',
      borderBottom: '1px solid rgba(235,232,225,0.6)',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: mobile ? '16px 20px' : '20px 64px',
      }}>
        <div style={{fontSize: 26, fontWeight: 700, letterSpacing: '-0.02em'}}>
          rod<span style={{color: ACCENT}}>tech</span>
        </div>

        {mobile ? (
          <button
            onClick={() => setOpen(o => !o)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '4px 6px', display: 'flex', flexDirection: 'column',
              gap: 5,
            }}
            aria-label="Toggle menu"
          >
            <span style={{display: 'block', width: 22, height: 2, background: INK, borderRadius: 2}}/>
            <span style={{display: 'block', width: 22, height: 2, background: INK, borderRadius: 2}}/>
            <span style={{display: 'block', width: 22, height: 2, background: INK, borderRadius: 2}}/>
          </button>
        ) : (
          <div style={{
            display: 'flex', gap: 48, alignItems: 'center',
            fontSize: 15, fontWeight: 500, color: INK,
          }}>
            <a href="Rodtech Services.html" style={{color: INK, textDecoration: 'none'}}>Services</a>
            <a href="Rodtech About.html" style={{color: INK, textDecoration: 'none'}}>About</a>
            <a href="Rodtech Our Work.html" style={{color: INK, textDecoration: 'none'}}>Our Work</a>
            <a href="Rodtech Contact.html" style={{
              padding: '10px 18px', borderRadius: 999, background: INK, color: '#fff',
              fontSize: 14, fontWeight: 600, textDecoration: 'none',
            }}>Contact us</a>
          </div>
        )}
      </div>

      {mobile && open && (
        <div style={{
          borderTop: '1px solid rgba(235,232,225,0.6)',
          padding: '12px 20px 20px',
          display: 'flex', flexDirection: 'column', gap: 0,
        }}>
          {[
            ['Services', 'Rodtech Services.html'],
            ['About', 'Rodtech About.html'],
            ['Our Work', 'Rodtech Our Work.html'],
            ['Contact', 'Rodtech Contact.html'],
          ].map(([label, href]) => (
            <a key={label} href={href} style={{
              color: INK, textDecoration: 'none',
              fontSize: 16, fontWeight: 500,
              padding: '12px 0',
              borderBottom: '1px solid rgba(235,232,225,0.6)',
            }}>
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function Hero() {
  const mobile = useIsMobile();
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: mobile ? '1fr' : '1fr 1fr',
      gap: mobile ? 32 : 60,
      padding: mobile ? '60px 20px' : '100px 64px 100px',
      alignItems: 'center',
    }}>
      <div>
        <h1 style={{
          margin: 0,
          fontSize: mobile ? 48 : 92,
          lineHeight: 0.98, fontWeight: 700,
          letterSpacing: '-0.04em',
        }}>
          <span style={{color: ACCENT}}>Reviving</span>
          <br/>
          Appliances.
        </h1>
        <p style={{
          marginTop: mobile ? 28 : 44, marginBottom: 0,
          maxWidth: 480,
          fontSize: mobile ? 15 : 17, lineHeight: 1.55, color: '#3a3a4a',
        }}>
          The 24/7 repair workshop reviving the appliances you'd
          given up on. From a single fridge in a home kitchen to
          cold rooms, generators, and bakery ovens — we diagnose
          on-site and repair the same day.
        </p>
        <p style={{
          marginTop: 18, marginBottom: 0, maxWidth: 480,
          fontSize: mobile ? 15 : 17, lineHeight: 1.55, color: '#3a3a4a',
        }}>
          Based in Bandaptai, Eldoret — covering the North Rift,
          with 4.8★ across 64 verified Google reviews.
        </p>
      </div>

      <div style={{
        position: 'relative',
        height: mobile ? 280 : 560,
        borderRadius: 24, overflow: 'hidden', background: '#0c0a14',
      }}>
        <img src="images/board-hand.webp" alt="On-site appliance repair — Bandaptai workshop" style={{
          width: '100%', height: '100%', objectFit: 'cover',
          objectPosition: 'center 60%',
          filter: 'saturate(0.92) contrast(1.05)',
          display: 'block',
        }}/>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, transparent 55%, rgba(6,20,15,0.65) 100%)',
          pointerEvents: 'none',
        }}/>
        <div style={{
          position: 'absolute', bottom: 22, left: 28,
          color: 'rgba(255,255,255,0.9)',
          fontFamily: '"IBM Plex Mono", monospace',
          fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
          fontWeight: 600,
        }}>
          on-site · bandaptai
        </div>
      </div>
    </div>
  );
}

function TrustStrip() {
  const mobile = useIsMobile();
  const items = [
    ['4.8★', '64 verified reviews'],
    ['24 / 7', 'always on call'],
    ['Same-day', 'most repairs done'],
    ['30 days', 'parts guarantee'],
  ];
  return (
    <div style={{
      borderTop: '1px solid #ebe8e1', borderBottom: '1px solid #ebe8e1',
      padding: mobile ? '28px 20px' : '36px 64px',
      display: 'grid',
      gridTemplateColumns: mobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
      gap: mobile ? 20 : 24,
    }}>
      {items.map(([big, small], i) => (
        <div key={i} style={{
          paddingLeft: (!mobile && i) ? 32 : 0,
          borderLeft: (!mobile && i) ? '1px solid #ebe8e1' : 'none',
        }}>
          <div style={{
            fontSize: mobile ? 28 : 38, fontWeight: 700, letterSpacing: '-0.025em',
            lineHeight: 1, color: INK,
          }}>
            {big}
          </div>
          <div style={{
            fontSize: 13, color: MUTED, marginTop: 8,
            letterSpacing: '0.02em',
          }}>
            {small}
          </div>
        </div>
      ))}
    </div>
  );
}

function AreasOfExpertise() {
  const mobile = useIsMobile();
  const cards = [
    {
      title: 'Refrigeration',
      body: "Fridges, freezers, walk-in cold rooms, ice machines and bakery display units. Diagnosed and repaired on-site, with a 30-day guarantee on every part we touch.",
      tags: 'Fridges · Freezers · Cold rooms · Ice machines',
      icon: 'fridge',
    },
    {
      title: 'Electrical & Power',
      body: "Wiring, fault-finding, generators, solar inverters and battery banks. Fast emergency response across Eldoret and the wider North Rift, twenty-four hours a day.",
      tags: 'Wiring · Generators · Solar · Inverters',
      icon: 'bolt',
    },
    {
      title: 'Home Appliances',
      body: "Washing machines, dryers, cookers, microwaves and water dispensers. Bringing the appliances you were ready to throw out back to working order.",
      tags: 'Washers · Dryers · Cookers · Microwaves',
      icon: 'machine',
    },
  ];
  return (
    <div style={{padding: mobile ? '60px 20px 0' : '110px 64px 0'}}>
      <div style={{
        display: 'flex',
        flexDirection: mobile ? 'column' : 'row',
        alignItems: mobile ? 'flex-start' : 'flex-end',
        justifyContent: 'space-between',
        marginBottom: mobile ? 32 : 56,
        gap: mobile ? 16 : 40,
      }}>
        <h2 style={{
          margin: 0,
          fontSize: mobile ? 36 : 64, fontWeight: 700, letterSpacing: '-0.035em',
          lineHeight: 1, maxWidth: 700,
        }}>
          Areas of <span style={{color: ACCENT}}>expertise</span>.
        </h2>
        <p style={{
          margin: 0, maxWidth: 360, fontSize: 15, lineHeight: 1.55, color: MUTED,
        }}>
          Three core practices covering the work we do day-to-day.
          Specialist services — solar, industrial, commercial laundry —
          live under each.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)',
        gap: 24,
      }}>
        {cards.map((c, i) => (
          <div key={i} style={{
            background: ACCENT, color: '#fff',
            padding: '40px 36px 36px', borderRadius: 22,
            display: 'flex', flexDirection: 'column',
          }}>
            <CardIcon kind={c.icon}/>
            <div style={{
              fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em',
              marginTop: 60, marginBottom: 14,
            }}>
              {c.title}
            </div>
            <div style={{
              fontSize: 15, lineHeight: 1.5,
              color: 'rgba(255,255,255,0.9)',
              flexGrow: 1,
            }}>
              {c.body}
            </div>
            <div style={{
              marginTop: 28, paddingTop: 18,
              borderTop: '1px solid rgba(255,255,255,0.2)',
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: 10.5, letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.75)',
            }}>
              {c.tags}
            </div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: 36, display: 'flex', justifyContent: 'center',
      }}>
        <a href="Rodtech Services.html" style={{
          textDecoration: 'none',
          display: 'inline-flex', alignItems: 'center', gap: 12,
          padding: '16px 28px', borderRadius: 999,
          border: `1.5px solid ${INK}`, color: INK,
          fontSize: 15, fontWeight: 600,
        }}>
          See all 12+ services
          <span style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: 22, height: 22, borderRadius: '50%', background: ACCENT, color: '#fff',
            fontSize: 13, fontWeight: 700,
          }}>→</span>
        </a>
      </div>
    </div>
  );
}

function RevivalProof() {
  const mobile = useIsMobile();
  return (
    <div style={{padding: mobile ? '60px 20px 0' : '120px 64px 0'}}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: mobile ? '1fr' : '1fr 1.2fr',
        gap: mobile ? 40 : 80,
        alignItems: 'center',
      }}>
        <div>
          <div style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: ACCENT, marginBottom: 18, fontWeight: 600,
          }}>
            ★★★★★ — From the reviews
          </div>
          <div style={{
            fontSize: mobile ? 26 : 38, lineHeight: 1.2, letterSpacing: '-0.02em',
            fontWeight: 600,
          }}>
            "Almost ready to dispose of my fridge —
            they brought it{' '}
            <span style={{color: ACCENT}}>back to life</span>."
          </div>
          <div style={{
            marginTop: 22,
            fontSize: 14, color: MUTED,
          }}>
            Naomi K. · Verified Google review · May 2026
          </div>
          <div style={{
            marginTop: 36, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap',
          }}>
            <a href="https://www.google.com/search?client=ms-android-motorola-rvo3&sca_esv=ce94e24e788b5151&cs=0&sxsrf=ANbL-n6_56GjT5G3aAIXGFFjdVdNM_NPUg:1779278085765&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOR3roYylx7z1hPWw8DHntcs80ndUU3z04yQ3vQHMo8RMDE8KMq4AlVS7mhzcspyzNXiGNdREKoqJLF7lPQMpvfFCJi7StwJKGMbv93Dm_QxNsS6jtw%3D%3D&q=Rodtech+Ventures+Ltd+Reviews&sa=X&ved=2ahUKEwiyxIiy58eUAxX33QIHHYmYATEQ0bkNegQIKhAF&biw=1536&bih=730&dpr=1.25" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 12,
              padding: '12px 20px', borderRadius: 999,
              background: '#fff', border: '1.5px solid #ebe8e1',
              color: INK, fontSize: 14, fontWeight: 600, textDecoration: 'none',
            }}>
              <svg width="16" height="16" viewBox="0 0 18 18" aria-hidden="true">
                <path d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.91c1.7-1.57 2.69-3.88 2.69-6.62z" fill="#4285F4"/>
                <path d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.91-2.26c-.81.54-1.84.86-3.05.86-2.34 0-4.33-1.58-5.04-3.7H.96v2.33A9 9 0 0 0 9 18z" fill="#34A853"/>
                <path d="M3.96 10.72A5.4 5.4 0 0 1 3.68 9c0-.6.1-1.18.28-1.72V4.95H.96A9 9 0 0 0 0 9c0 1.45.35 2.82.96 4.05l3-2.33z" fill="#FBBC05"/>
                <path d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.59A8.97 8.97 0 0 0 9 0 9 9 0 0 0 .96 4.95l3 2.33C4.67 5.16 6.66 3.58 9 3.58z" fill="#EA4335"/>
              </svg>
              <span>Read all 64 reviews on Google</span>
              <span style={{color: ACCENT, fontSize: 16}}>→</span>
            </a>
            <span style={{fontSize: 13, color: MUTED}}>4.8★ average</span>
          </div>
        </div>
        <div>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14,
          }}>
            {[
              ['Deep freezer · dead 1 year', 'Working in an afternoon'],
              ['Bakery oven · element gone', 'Back open next morning'],
              ['Solar inverter · burnt', 'Replaced & re-wired'],
              ['Washer · "literally dead"', 'Now on its second life'],
            ].map(([before, after], i) => (
              <div key={i} style={{
                background: '#f7f5ef', borderRadius: 16, padding: 20,
                display: 'flex', flexDirection: 'column', gap: 8,
              }}>
                <div style={{
                  fontFamily: '"IBM Plex Mono", monospace', fontSize: 10,
                  letterSpacing: '0.16em', textTransform: 'uppercase',
                  color: MUTED,
                }}>
                  Before
                </div>
                <div style={{fontSize: 14, fontWeight: 600, lineHeight: 1.35}}>
                  {before}
                </div>
                <div style={{
                  height: 1, background: '#e3e0d6', margin: '6px 0',
                }}/>
                <div style={{
                  fontFamily: '"IBM Plex Mono", monospace', fontSize: 10,
                  letterSpacing: '0.16em', textTransform: 'uppercase',
                  color: ACCENT,
                }}>
                  After
                </div>
                <div style={{fontSize: 14, fontWeight: 600, lineHeight: 1.35}}>
                  {after}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MissionLine() {
  const mobile = useIsMobile();
  return (
    <div style={{
      padding: mobile ? '70px 20px 40px' : '140px 64px 60px',
      display: 'flex', justifyContent: 'center',
    }}>
      <div style={{
        maxWidth: 880, textAlign: 'center',
        fontSize: mobile ? 32 : 56, fontWeight: 700, lineHeight: 1.1,
        letterSpacing: '-0.03em',
      }}>
        At <span style={{color: ACCENT}}>Rodtech</span> we firmly
        believe that no appliance is too far gone to be brought
        back to life.
      </div>
    </div>
  );
}

function CTABand() {
  const mobile = useIsMobile();
  return (
    <div style={{padding: mobile ? '20px 20px 60px' : '40px 64px 110px'}}>
      <div style={{
        background: INK, borderRadius: 28, padding: mobile ? '60px 28px' : '80px 56px',
        color: '#f5f3ec', position: 'relative', overflow: 'hidden',
        textAlign: 'center',
      }}>
        <div style={{
          position: 'absolute', top: -120, right: -80,
          width: 380, height: 380, borderRadius: '50%',
          background: `radial-gradient(circle, ${ACCENT}88 0%, transparent 65%)`,
        }}/>
        <div style={{position: 'relative'}}>
          <div style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
            opacity: 0.7, marginBottom: 18,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
          }}>
            <span style={{
              width: 8, height: 8, borderRadius: '50%', background: '#5fd4a5',
              boxShadow: '0 0 12px #5fd4a5',
            }}/>
            Available right now
          </div>
          <div style={{
            fontSize: mobile ? 36 : 56, fontWeight: 700, letterSpacing: '-0.03em',
            lineHeight: 1.0,
          }}>
            Tell us what's<br/>
            <span style={{color: '#5fd4a5'}}>broken.</span>
          </div>
          <div style={{
            marginTop: 24, fontSize: mobile ? 15 : 16, lineHeight: 1.5, opacity: 0.75,
            maxWidth: 460, margin: '24px auto 0',
          }}>
            Dan or one of the crew is on call twenty-four hours a day.
            Call, WhatsApp, or drop a message — your choice.
          </div>
          <div style={{marginTop: 36}}>
            <a href="Rodtech Contact.html" style={{
              display: 'inline-flex', alignItems: 'center', gap: 14,
              padding: '18px 32px', borderRadius: 999,
              background: ACCENT, color: '#fff',
              fontSize: 16, fontWeight: 600, textDecoration: 'none',
            }}>
              Contact us
              <span style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 26, height: 26, borderRadius: '50%',
                background: 'rgba(255,255,255,0.2)', color: '#fff',
                fontSize: 14, fontWeight: 700,
              }}>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  const mobile = useIsMobile();
  return (
    <div style={{padding: mobile ? '0 20px 40px' : '0 64px 60px'}}>
      <div style={{
        borderTop: '1px solid #ebe8e1', paddingTop: 50,
        display: 'grid',
        gridTemplateColumns: mobile ? '1fr 1fr' : '1.4fr 1fr 1fr 1fr',
        rowGap: mobile ? 32 : 40, columnGap: mobile ? 0 : 40,
      }}>
        <div style={{
          paddingRight: mobile ? 24 : 0,
          borderRight: mobile ? '1px solid #ebe8e1' : 'none',
        }}>
          <div style={{fontSize: 26, fontWeight: 700, letterSpacing: '-0.02em'}}>
            rod<span style={{color: ACCENT}}>tech</span>
          </div>
          <div style={{marginTop: 18, fontSize: 14, color: MUTED, lineHeight: 1.55, maxWidth: 280}}>
            Rodtech Ventures Ltd. Bandaptai, Eldoret — covering the
            North Rift region of Kenya since 2019.
          </div>
        </div>
        <FooterCol title="Services" items={['Refrigeration', 'Electrical', 'Appliances', 'Solar & Inverters', 'Industrial']} style={{paddingLeft: mobile ? 24 : 0}}/>
        <FooterCol title="Company" items={[
          {label: 'Services', href: 'Rodtech Services.html'},
          {label: 'About', href: 'Rodtech About.html'},
          {label: 'Our Work', href: 'Rodtech Our Work.html'},
          {label: 'Get in Touch', href: 'Rodtech Contact.html'},
        ]}/>
        <FooterCol title="Contact" items={['0793 562 956', 'WhatsApp', 'hello@rodtech.co.ke', 'Bandaptai, Eldoret', 'Open 24 / 7']} style={{paddingLeft: mobile ? 24 : 0}}/>
      </div>
      <div style={{
        marginTop: 50, paddingTop: 24, borderTop: '1px solid #ebe8e1',
        display: 'flex',
        flexDirection: mobile ? 'column' : 'row',
        justifyContent: 'space-between',
        gap: mobile ? 6 : 0,
        fontSize: 12, color: MUTED,
      }}>
        <span>© 2026 Rodtech Ventures Ltd</span>
        <span>Built in Eldoret · v1.0</span>
      </div>
    </div>
  );
}

function FooterCol({title, items, style}) {
  return (
    <div style={style}>
      <div style={{
        fontFamily: '"IBM Plex Mono", monospace', fontSize: 10,
        letterSpacing: '0.16em', textTransform: 'uppercase',
        color: MUTED, marginBottom: 18,
      }}>
        {title}
      </div>
      <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
        {items.map((it, i) => {
          const label = typeof it === 'string' ? it : it.label;
          const href = typeof it === 'object' && it.href ? it.href : null;
          return href
            ? <a key={i} href={href} style={{fontSize: 14, color: INK, textDecoration: 'none'}}>{label}</a>
            : <div key={i} style={{fontSize: 14, color: INK}}>{label}</div>;
        })}
      </div>
    </div>
  );
}

function CardIcon({kind}) {
  const stroke = 'rgba(255,255,255,0.95)';
  const sw = 2.2;
  const common = {fill: 'none', stroke, strokeWidth: sw, strokeLinecap: 'round', strokeLinejoin: 'round'};
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" style={{display: 'block'}}>
      {kind === 'fridge' && (
        <g {...common}>
          <rect x="14" y="8" width="28" height="40" rx="3"/>
          <line x1="14" y1="22" x2="42" y2="22"/>
          <line x1="19" y1="14" x2="19" y2="18"/>
          <line x1="19" y1="28" x2="19" y2="34"/>
        </g>
      )}
      {kind === 'bolt' && (
        <g {...common}>
          <path d="M30 6 L16 30 L26 30 L22 50 L40 24 L30 24 Z"/>
        </g>
      )}
      {kind === 'machine' && (
        <g {...common}>
          <rect x="10" y="8" width="36" height="40" rx="3"/>
          <circle cx="28" cy="32" r="9"/>
          <circle cx="16" cy="15" r="1.2" fill={stroke}/>
          <circle cx="22" cy="15" r="1.2" fill={stroke}/>
          <line x1="34" y1="15" x2="42" y2="15"/>
        </g>
      )}
    </svg>
  );
}

window.RodtechHome = RodtechHome;
