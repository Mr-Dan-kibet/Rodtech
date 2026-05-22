// Rodtech About page — emerald
// Sections:
//  1. Nav
//  2. Hero — portrait of Dan (placeholder) + name + opening line
//  3. The story — short origin paragraph (DRAFT — needs Dan to confirm)
//  4. The team — Dan + 4 placeholder techs
//  5. How we work — 4 principles
//  6. Service area — North Rift towns within a day
//  7. By the numbers
//  8. CTA + Footer

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#0C6B4F",
  "ownerName": "Dan Bundotich",
  "ownerRole": "Founder & Lead Technician",
  "foundedYear": "2019",
  "teamSize": "3",
  "phone": "0793 562 956",
  "ctaLabel": "Contact us",
  "showStory": true,
  "showNumbers": true
}/*EDITMODE-END*/;

const INK = '#1a1a2e';
const MUTED = '#6e6e84';
const PAPER = '#ffffff';
const CREAM = '#f7f5ef';

// Computed-from-accent helpers
function softFor(hex) {
  // very light tinted bg derived from accent
  return hex + '14';
}

function useIsMobile(breakpoint = 768) {
  const [mobile, setMobile] = React.useState(window.innerWidth < breakpoint);
  React.useEffect(() => {
    const handler = () => setMobile(window.innerWidth < breakpoint);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, [breakpoint]);
  return mobile;
}

function RodtechAbout() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const accent = t.accent;

  return (
    <div style={{
      width: '100%', background: PAPER, color: INK,
      fontFamily: '"DM Sans", -apple-system, system-ui, sans-serif',
    }}>
      <AboutNav accent={accent} phone={t.phone}/>
      <AboutHero accent={accent} ownerName={t.ownerName} ownerRole={t.ownerRole} foundedYear={t.foundedYear} teamSize={t.teamSize}/>
      {t.showStory && <StorySection accent={accent}/>}
      <TeamSection accent={accent} ownerName={t.ownerName}/>
      <HowWeWork accent={accent}/>
      <TestimonialsSection accent={accent}/>
      <ServiceArea accent={accent}/>
      {t.showNumbers && <ByTheNumbers accent={accent} foundedYear={t.foundedYear} teamSize={t.teamSize}/>}
      <AboutCTA accent={accent} ctaLabel={t.ctaLabel}/>
      <SiteFooter accent={accent}/>

      <TweaksPanel>
        <TweakSection label="Brand"/>
        <TweakColor label="Accent" value={t.accent}
          options={['#0C6B4F', '#8B1E2C', '#0E5562', '#1F4FE0', '#1a1a2e']}
          onChange={(v) => setTweak('accent', v)}/>

        <TweakSection label="Owner"/>
        <TweakText label="Name" value={t.ownerName}
          onChange={(v) => setTweak('ownerName', v)}/>
        <TweakText label="Role" value={t.ownerRole}
          onChange={(v) => setTweak('ownerRole', v)}/>
        <TweakText label="Year founded" value={t.foundedYear}
          onChange={(v) => setTweak('foundedYear', v)}/>
        <TweakText label="Lead techs" value={t.teamSize}
          onChange={(v) => setTweak('teamSize', v)}/>

        <TweakSection label="Contact"/>
        <TweakText label="Phone" value={t.phone}
          onChange={(v) => setTweak('phone', v)}/>
        <TweakText label="CTA label" value={t.ctaLabel}
          onChange={(v) => setTweak('ctaLabel', v)}/>

        <TweakSection label="Sections"/>
        <TweakToggle label="Show story" value={t.showStory}
          onChange={(v) => setTweak('showStory', v)}/>
        <TweakToggle label="Show numbers" value={t.showNumbers}
          onChange={(v) => setTweak('showNumbers', v)}/>
      </TweaksPanel>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────

function AboutNav({accent, phone}) {
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
        <a href="Rodtech Home.html" style={{
          textDecoration: 'none', color: INK,
          fontSize: 26, fontWeight: 700, letterSpacing: '-0.02em',
        }}>
          rod<span style={{color: accent}}>tech</span>
        </a>

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
            <span style={{color: accent, fontWeight: 600}}>About</span>
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
          display: 'flex', flexDirection: 'column',
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

function AboutHero({accent, ownerName, ownerRole, foundedYear, teamSize}) {
  const mobile = useIsMobile();
  // Split name on first space so the surname gets the accent color
  const [firstName, ...rest] = (ownerName || '').split(' ');
  const lastName = rest.join(' ');
  const otherTechs = Math.max(0, (parseInt(teamSize, 10) || 1) - 1);

  return (
    <div style={{padding: mobile ? '40px 20px 60px' : '60px 64px 100px'}}>
      <div style={{
        fontFamily: '"IBM Plex Mono", monospace',
        fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
        color: MUTED, marginBottom: 28,
      }}>
        <a href="Rodtech Home.html" style={{color: MUTED, textDecoration: 'none'}}>Home</a>
        <span style={{margin: '0 12px', opacity: 0.5}}>/</span>
        <span style={{color: INK}}>About</span>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: mobile ? '1fr' : '0.85fr 1.15fr',
        gap: mobile ? 32 : 80,
        alignItems: 'end',
      }}>
        {/* Portrait — placeholder, notched corner top-right matches home hero */}
        <div style={{position: 'relative', height: mobile ? 300 : 560}}>
          <div style={{
            position: 'absolute', inset: 0,
            borderRadius: 24, overflow: 'hidden',
            background: 'linear-gradient(165deg, #06140f 0%, #0a2c20 60%, #103e2d 100%)',
            clipPath: 'polygon(0 0, 70% 0, 70% 22%, 100% 22%, 100% 100%, 0 100%)',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: `
                radial-gradient(55% 50% at 50% 70%, ${accent}55 0%, transparent 60%),
                radial-gradient(40% 30% at 30% 30%, #ffffff22 0%, transparent 60%)
              `,
            }}/>
            <div style={{
              position: 'absolute', bottom: 22, left: 28,
              color: 'rgba(255,255,255,0.5)',
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
            }}>
              portrait · placeholder
            </div>
          </div>
          {/* Small badge tile, top-right */}
          <div style={{
            position: 'absolute', top: 0, right: 0,
            width: '28%', height: '20%',
            borderRadius: 18, background: accent, color: '#fff',
            padding: 20, boxSizing: 'border-box',
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          }}>
            <div style={{
              fontFamily: '"IBM Plex Mono", monospace', fontSize: 10,
              letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.85,
            }}>
              Est.
            </div>
            <div style={{fontSize: mobile ? 22 : 34, fontWeight: 700, letterSpacing: '-0.02em'}}>
              {foundedYear}
            </div>
          </div>
        </div>

        {/* Right — name & opening line */}
        <div>
          <div style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: accent, marginBottom: 22, fontWeight: 600,
          }}>
            {ownerRole}
          </div>
          <h1 style={{
            margin: 0,
            fontSize: mobile ? 52 : 88, lineHeight: 0.98, fontWeight: 700,
            letterSpacing: '-0.04em',
          }}>
            {firstName}{lastName ? <br/> : null}
            {lastName && <span style={{color: accent}}>{lastName}</span>}.
          </h1>
          <p style={{
            marginTop: mobile ? 24 : 36, marginBottom: 0,
            fontSize: mobile ? 16 : 20, lineHeight: 1.45, color: '#3a3a4a',
            maxWidth: 520, fontWeight: 500,
          }}>
            {firstName} runs Rodtech out of a workshop in Bandaptai with
            {' '}{numberWord(otherTechs)} lead technicians and a wider crew
            working under their direction. Between them they've revived
            freezers, fridges, generators and cold rooms across Eldoret
            and the wider North Rift since {foundedYear}.
          </p>
        </div>
      </div>
    </div>
  );
}

function numberWord(n) {
  const words = ['no', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  return words[n] || String(n);
}

function StorySection({accent}) {
  const mobile = useIsMobile();
  return (
    <div style={{padding: mobile ? '40px 20px 0' : '60px 64px 0', background: CREAM, marginTop: 40}}>
      <div style={{padding: mobile ? '50px 0' : '90px 0'}}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: mobile ? '1fr' : '0.4fr 1fr',
          gap: mobile ? 20 : 80,
          alignItems: 'start',
        }}>
          <div style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: accent, fontWeight: 600,
          }}>
            01 — The Story
          </div>
          <div>
            <h2 style={{
              margin: 0,
              fontSize: mobile ? 28 : 44, fontWeight: 700, lineHeight: 1.15,
              letterSpacing: '-0.025em',
            }}>
              We started Rodtech because too many
              good appliances were getting <span style={{color: accent}}>thrown out</span>.
            </h2>
            <div style={{
              marginTop: 36, display: 'grid',
              gridTemplateColumns: mobile ? '1fr' : '1fr 1fr',
              gap: mobile ? 20 : 40,
              fontSize: 16, lineHeight: 1.65, color: '#3a3a4a',
            }}>
              <p style={{margin: 0}}>
                A fridge that needed a new compressor would be replaced.
                A washer with a small part would be thrown out. We saw
                it on every job and started Rodtech in 2019 to do
                something about it — proper diagnosis first, an
                honest repair second, and a replacement only when
                it genuinely makes sense.
              </p>
              <p style={{margin: 0}}>
                Today we're a team of five working across Eldoret
                and the wider North Rift. We're on call 24 hours a
                day, every day of the year, because most appliance
                emergencies don't happen at convenient times.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamSection({accent, ownerName}) {
  const mobile = useIsMobile();
  const initials = (ownerName || 'D B').split(' ').map(s => s[0]).join('').slice(0, 2).toUpperCase();
  const team = [
    {name: ownerName, role: 'Founder & Lead', spec: 'All practices · Refrigeration, Electrical', tag: initials},
    {name: 'Lead Technician 02', role: 'Refrigeration & Cold-chain', spec: 'Fridges, freezers, walk-in cold rooms', tag: 'L2'},
    {name: 'Lead Technician 03', role: 'Electrical & Power', spec: 'Wiring, generators, solar', tag: 'L3'},
  ];
  return (
    <div style={{padding: mobile ? '60px 20px 0' : '120px 64px 0'}}>
      <div style={{
        display: 'flex',
        flexDirection: mobile ? 'column' : 'row',
        alignItems: mobile ? 'flex-start' : 'flex-end',
        justifyContent: 'space-between',
        marginBottom: mobile ? 32 : 48,
        gap: mobile ? 12 : 40,
      }}>
        <h2 style={{
          margin: 0,
          fontSize: mobile ? 36 : 64, fontWeight: 700, letterSpacing: '-0.035em',
          lineHeight: 1, maxWidth: 700,
        }}>
          The <span style={{color: accent}}>leads</span>.
        </h2>
        <p style={{
          margin: 0, maxWidth: 360, fontSize: 15, lineHeight: 1.55, color: MUTED,
        }}>
          Three lead technicians, with a wider crew of technicians
          and apprentices working under their direction. The lead
          on your job is the one who signs off on the work.
        </p>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)',
        gap: mobile ? 28 : 18,
      }}>
        {team.map((m, i) => (
          <div key={i} style={{
            display: mobile ? 'flex' : 'flex',
            flexDirection: mobile ? 'row' : 'column',
            gap: mobile ? 20 : 16,
            alignItems: mobile ? 'center' : 'stretch',
          }}>
            {/* Photo placeholder */}
            <div style={{
              flexShrink: 0,
              width: mobile ? 80 : 'auto',
              height: mobile ? 80 : 'auto',
              aspectRatio: mobile ? '1' : '4/5',
              borderRadius: mobile ? '50%' : 16,
              overflow: 'hidden',
              background: i === 0
                ? `linear-gradient(165deg, ${accent} 0%, ${accent}cc 100%)`
                : 'linear-gradient(165deg, #1a1a2e 0%, #2a2a40 100%)',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                background: `radial-gradient(60% 50% at 50% 65%, rgba(255,255,255,0.08) 0%, transparent 60%)`,
              }}/>
              {!mobile && (
                <div style={{
                  position: 'absolute', top: 12, left: 12,
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: 10, letterSpacing: '0.14em',
                  color: 'rgba(255,255,255,0.7)',
                }}>
                  #{m.tag}
                </div>
              )}
              {!mobile && i !== 0 && (
                <div style={{
                  position: 'absolute', bottom: 14, left: 14,
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.45)',
                }}>
                  photo · placeholder
                </div>
              )}
            </div>
            <div>
              <div style={{
                fontSize: 16, fontWeight: 700, letterSpacing: '-0.01em',
              }}>
                {m.name}
              </div>
              <div style={{
                fontSize: 13, color: accent, marginTop: 2, fontWeight: 600,
              }}>
                {m.role}
              </div>
              <div style={{
                fontSize: 12.5, color: MUTED, marginTop: 8, lineHeight: 1.45,
              }}>
                {m.spec}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HowWeWork({accent}) {
  const mobile = useIsMobile();
  const principles = [
    {
      n: '01',
      title: 'We diagnose before we touch.',
      body: "Every job starts with a free on-site diagnosis. You get a fixed quote before we open anything up — no surprises on the invoice.",
    },
    {
      n: '02',
      title: "We tell you when not to repair.",
      body: "If a replacement is cheaper than the repair, we'll say so. We'd rather lose a job than fix something that's beyond saving.",
    },
    {
      n: '03',
      title: 'Same crew, every time.',
      body: "Five technicians, no sub-contractors. The person who diagnoses your fridge is the one who fixes it and signs off on the work.",
    },
    {
      n: '04',
      title: '30 days on every part.',
      body: "Anything we replace carries a 30-day guarantee. If it fails again on that part, we come back, no charge.",
    },
  ];
  return (
    <div style={{padding: mobile ? '60px 20px 0' : '120px 64px 0'}}>
      <h2 style={{
        margin: 0, marginBottom: mobile ? 32 : 48,
        fontSize: mobile ? 36 : 64, fontWeight: 700, letterSpacing: '-0.035em',
        lineHeight: 1,
      }}>
        How we <span style={{color: accent}}>work</span>.
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: mobile ? '1fr' : 'repeat(2, 1fr)',
        gap: 18,
      }}>
        {principles.map((p, i) => (
          <div key={i} style={{
            border: '1px solid #ebe8e1', borderRadius: 20, padding: '34px 36px',
            display: 'grid', gridTemplateColumns: '60px 1fr', gap: 24,
            alignItems: 'start',
          }}>
            <div style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: 13, color: accent, fontWeight: 600,
              letterSpacing: '0.08em',
            }}>
              {p.n}
            </div>
            <div>
              <div style={{
                fontSize: mobile ? 20 : 24, fontWeight: 700, letterSpacing: '-0.02em',
                lineHeight: 1.2,
              }}>
                {p.title}
              </div>
              <p style={{
                marginTop: 12, marginBottom: 0,
                fontSize: 15, lineHeight: 1.6, color: '#4a4a5a',
              }}>
                {p.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────

function TestimonialsSection({accent}) {
  const mobile = useIsMobile();
  const items = [
    {
      quote: "Told me my fridge wasn't worth fixing and saved me KSh 30,000 on a replacement I didn't need. Came back three weeks later for the new one.",
      proves: 'Principle 02 — we tell you when not to repair',
      who: 'Janet M.',
      when: 'February 2026',
    },
    {
      quote: "Called at 9pm on a Sunday with a dead deep freezer full of meat. Someone was at my door by 10 and it was running again before midnight.",
      proves: 'The 24/7 promise',
      who: 'Patrick R.',
      when: 'November 2025',
    },
  ];
  return (
    <div style={{padding: mobile ? '60px 20px 0' : '120px 64px 0'}}>
      <div style={{
        display: 'flex',
        flexDirection: mobile ? 'column' : 'row',
        alignItems: mobile ? 'flex-start' : 'flex-end',
        justifyContent: 'space-between',
        marginBottom: mobile ? 24 : 40,
        gap: mobile ? 8 : 40,
      }}>
        <h2 style={{
          margin: 0,
          fontSize: mobile ? 36 : 64, fontWeight: 700, letterSpacing: '-0.035em',
          lineHeight: 1, maxWidth: 700,
        }}>
          What clients <span style={{color: accent}}>say</span>.
        </h2>
        <div style={{
          fontFamily: '"IBM Plex Mono", monospace',
          fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase',
          color: MUTED,
        }}>
          Two of 64 · Google verified
        </div>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: mobile ? '1fr' : 'repeat(2, 1fr)',
        gap: 18,
      }}>
        {items.map((it, i) => (
          <div key={i} style={{
            border: '1px solid #ebe8e1', borderRadius: 20, padding: '32px 34px',
            display: 'flex', flexDirection: 'column', gap: 22,
          }}>
            <div style={{
              fontFamily: '"IBM Plex Mono", monospace', fontSize: 10,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: accent, fontWeight: 600,
            }}>
              ★★★★★ · {it.proves}
            </div>
            <div style={{
              fontSize: mobile ? 17 : 20, lineHeight: 1.4, letterSpacing: '-0.01em',
              fontWeight: 500, color: INK, flexGrow: 1,
            }}>
              "{it.quote}"
            </div>
            <div style={{
              fontSize: 13, color: MUTED,
              paddingTop: 18, borderTop: '1px dashed #e3e0d6',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <span style={{color: INK, fontWeight: 600}}>{it.who}</span>
              <span>{it.when}</span>
            </div>
          </div>
        ))}
      </div>
      <div style={{
        marginTop: 36, display: 'flex', justifyContent: 'center',
      }}>
        <a href="https://www.google.com/search?client=ms-android-motorola-rvo3&sca_esv=ce94e24e788b5151&cs=0&sxsrf=ANbL-n6_56GjT5G3aAIXGFFjdVdNM_NPUg:1779278085765&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOR3roYylx7z1hPWw8DHntcs80ndUU3z04yQ3vQHMo8RMDE8KMq4AlVS7mhzcspyzNXiGNdREKoqJLF7lPQMpvfFCJi7StwJKGMbv93Dm_QxNsS6jtw%3D%3D&q=Rodtech+Ventures+Ltd+Reviews&sa=X&ved=2ahUKEwiyxIiy58eUAxX33QIHHYmYATEQ0bkNegQIKhAF&biw=1536&bih=730&dpr=1.25" target="_blank" rel="noopener noreferrer" style={{
          display: 'inline-flex', alignItems: 'center', gap: 12,
          padding: '14px 22px', borderRadius: 999,
          background: '#fff', border: '1.5px solid #ebe8e1',
          color: INK, fontSize: 14, fontWeight: 600, textDecoration: 'none',
        }}>
          <AboutGoogleG/>
          <span>Read all 64 reviews on Google</span>
          <span style={{color: accent, fontSize: 16}}>→</span>
        </a>
      </div>
    </div>
  );
}

function AboutGoogleG() {
  return (
    <svg width="16" height="16" viewBox="0 0 18 18" aria-hidden="true">
      <path d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.91c1.7-1.57 2.69-3.88 2.69-6.62z" fill="#4285F4"/>
      <path d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.91-2.26c-.81.54-1.84.86-3.05.86-2.34 0-4.33-1.58-5.04-3.7H.96v2.33A9 9 0 0 0 9 18z" fill="#34A853"/>
      <path d="M3.96 10.72A5.4 5.4 0 0 1 3.68 9c0-.6.1-1.18.28-1.72V4.95H.96A9 9 0 0 0 0 9c0 1.45.35 2.82.96 4.05l3-2.33z" fill="#FBBC05"/>
      <path d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.59A8.97 8.97 0 0 0 9 0 9 9 0 0 0 .96 4.95l3 2.33C4.67 5.16 6.66 3.58 9 3.58z" fill="#EA4335"/>
    </svg>
  );
}

function ServiceArea({accent}) {
  const mobile = useIsMobile();
  const towns = [
    'Eldoret', 'Bandaptai', 'Kapsabet', 'Kitale', 'Iten', 'Mosoriot',
    'Burnt Forest', 'Ziwa', 'Nandi Hills', 'Moi\'s Bridge', 'Webuye',
    'Kabarnet', 'Kakamega', 'Bungoma', 'Eldama Ravine',
  ];
  return (
    <div style={{padding: mobile ? '60px 20px 0' : '120px 64px 0'}}>
      <div style={{
        background: INK, color: '#f5f3ec', borderRadius: 28,
        padding: mobile ? '40px 28px' : '64px 56px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: -120, right: -100,
          width: 420, height: 420, borderRadius: '50%',
          background: `radial-gradient(circle, ${accent}66 0%, transparent 70%)`,
        }}/>
        <div style={{
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: mobile ? '1fr' : '1fr 1.2fr',
          gap: mobile ? 32 : 80,
          alignItems: 'center',
        }}>
          <div>
            <div style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
              opacity: 0.7, marginBottom: 18,
            }}>
              Service area
            </div>
            <h2 style={{
              margin: 0,
              fontSize: mobile ? 32 : 52, fontWeight: 700, lineHeight: 1.0,
              letterSpacing: '-0.03em',
            }}>
              Anywhere in the<br/>
              <span style={{color: accent, filter: 'brightness(1.6) saturate(0.9)'}}>North Rift</span><br/>
              we can reach in a day.
            </h2>
            <p style={{
              marginTop: 22, marginBottom: 0, fontSize: mobile ? 15 : 16, lineHeight: 1.55,
              opacity: 0.75, maxWidth: 460,
            }}>
              Eldoret is our base. If you can get to us by road, we
              can get to you. For commercial work further afield —
              hotels and bakeries in the wider region — we plan
              the visit and quote travel separately.
            </p>
          </div>
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: 8,
          }}>
            {towns.map((town, i) => (
              <span key={i} style={{
                padding: '10px 16px', borderRadius: 999,
                background: i === 0 ? accent : 'rgba(255,255,255,0.08)',
                border: `1px solid ${i === 0 ? accent : 'rgba(255,255,255,0.12)'}`,
                fontSize: 14, fontWeight: i === 0 ? 700 : 500,
                color: i === 0 ? '#fff' : '#f5f3ec',
              }}>
                {i === 0 && '● '}{town}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ByTheNumbers({accent, foundedYear, teamSize}) {
  const mobile = useIsMobile();
  const cols = mobile ? 2 : 3;
  const stats = [
    [foundedYear, 'Year founded'],
    [teamSize, 'Lead technicians'],
    ['64', 'Verified Google reviews'],
    ['4.8★', 'Average rating'],
    ['24 / 7', 'Always on call'],
    ['30 days', 'Guarantee on parts'],
  ];
  return (
    <div style={{padding: mobile ? '60px 20px 0' : '120px 64px 0'}}>
      <div style={{
        display: 'flex',
        flexDirection: mobile ? 'column' : 'row',
        alignItems: mobile ? 'flex-start' : 'flex-end',
        justifyContent: 'space-between',
        marginBottom: 40,
        gap: mobile ? 8 : 0,
      }}>
        <h2 style={{
          margin: 0,
          fontSize: mobile ? 32 : 50, fontWeight: 700, letterSpacing: '-0.03em',
          lineHeight: 1,
        }}>
          By the <span style={{color: accent}}>numbers</span>.
        </h2>
        <div style={{
          fontFamily: '"IBM Plex Mono", monospace',
          fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase',
          color: MUTED,
        }}>
          As of May 2026
        </div>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap: 0,
        border: '1px solid #ebe8e1', borderRadius: 22, overflow: 'hidden',
      }}>
        {stats.map(([big, small], i) => (
          <div key={i} style={{
            padding: mobile ? '28px 20px' : '36px 32px',
            borderRight: (i % cols !== cols - 1) ? '1px solid #ebe8e1' : 'none',
            borderBottom: i < stats.length - cols ? '1px solid #ebe8e1' : 'none',
          }}>
            <div style={{
              fontSize: mobile ? 36 : 56, fontWeight: 700, letterSpacing: '-0.035em',
              lineHeight: 1, color: INK,
            }}>
              {big}
            </div>
            <div style={{
              fontSize: 13, color: MUTED, marginTop: 10,
            }}>
              {small}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AboutCTA({accent, ctaLabel}) {
  const mobile = useIsMobile();
  return (
    <div style={{padding: mobile ? '60px 20px' : '120px 64px 100px'}}>
      <div style={{
        textAlign: 'center', maxWidth: 720, margin: '0 auto',
      }}>
        <div style={{
          fontFamily: '"IBM Plex Mono", monospace',
          fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: accent, marginBottom: 22, fontWeight: 600,
        }}>
          That's us.
        </div>
        <h2 style={{
          margin: 0,
          fontSize: mobile ? 36 : 56, fontWeight: 700, lineHeight: 1.05,
          letterSpacing: '-0.03em',
        }}>
          Have something that<br/>
          needs <span style={{color: accent}}>looking at</span>?
        </h2>
        <div style={{marginTop: 36}}>
          <a href="Rodtech Contact.html" style={{
            display: 'inline-flex', alignItems: 'center', gap: 14,
            padding: '18px 30px', borderRadius: 999, background: INK, color: '#fff',
            fontSize: 16, fontWeight: 600, textDecoration: 'none',
          }}>
            {ctaLabel}
            <span style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: 26, height: 26, borderRadius: '50%', background: accent, color: '#fff',
              fontSize: 14, fontWeight: 700,
            }}>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function SiteFooter({accent}) {
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
            rod<span style={{color: accent}}>tech</span>
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

window.RodtechAbout = RodtechAbout;
