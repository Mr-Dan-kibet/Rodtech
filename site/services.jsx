// Rodtech Services page — emerald
// Same visual language as Home (DM Sans, emerald accent, notched shapes, mono captions).
//
// Structure:
//  1. Nav
//  2. Page header — smaller hero, breadcrumb + title + intro
//  3. Quick jump bar (sticky-feeling pills to each section)
//  4. Three big service sections (Refrigeration / Electrical & Power / Home Appliances)
//     Each section: emerald banner row, then 4-5 detailed service cards
//  5. Industrial & Commercial callout (the "we do this too" bucket)
//  6. CTA band
//  7. Footer

const ACCENT = '#0C6B4F';
const ACCENT_SOFT = '#E8F1ED';
const INK = '#1a1a2e';
const MUTED = '#6e6e84';
const PAPER = '#ffffff';
const CREAM = '#f7f5ef';

function useIsMobile(breakpoint = 768) {
  const [mobile, setMobile] = React.useState(window.innerWidth < breakpoint);
  React.useEffect(() => {
    const handler = () => setMobile(window.innerWidth < breakpoint);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, [breakpoint]);
  return mobile;
}

function RodtechServices() {
  return (
    <div style={{
      width: '100%', background: PAPER, color: INK,
      fontFamily: '"DM Sans", -apple-system, system-ui, sans-serif',
    }}>
      <ServicesNav/>
      <PageHeader/>
      <JumpBar/>
      <ServiceSection
        id="refrigeration"
        eyebrow="01 — Refrigeration"
        title="Anything that keeps cold."
        body="Most calls we get are refrigeration. Compressor failures, gas leaks, frost build-up, thermostats that have given up — we've seen all of it. On-site diagnosis is free if you go ahead with the repair."
        items={[
          {
            name: 'Domestic fridges & freezers',
            desc: 'Single-door, double-door, side-by-side, chest freezers.',
            fixes: ['Compressor failure', 'Gas re-charge', 'Thermostat', 'Door seal & gasket'],
            response: 'Same day · most jobs',
          },
          {
            name: 'Walk-in cold rooms',
            desc: 'Restaurants, butcheries, supermarkets and hotels.',
            fixes: ['Refrigerant leaks', 'Evaporator coil', 'Condenser fan', 'Insulation breach'],
            response: 'Priority · 4-hour callout',
          },
          {
            name: 'Ice machines',
            desc: 'Hotel bars, bakeries, fishmongers.',
            fixes: ['Water inlet valve', 'Drain pump', 'Cycle controller', 'Scale & descale'],
            response: 'Same day · most jobs',
          },
          {
            name: 'Bakery display units',
            desc: 'Cold display cabinets and pastry chillers.',
            fixes: ['LED & lighting', 'Glass door seal', 'Temperature drift', 'Compressor swap'],
            response: 'Same day · most jobs',
          },
          {
            name: 'Commercial chillers',
            desc: 'Bottle coolers, dairy chillers, lab fridges.',
            fixes: ['Pressure switch', 'Defrost timer', 'Gas top-up', 'Control board'],
            response: 'Same day · most jobs',
          },
        ]}
      />
      <ServiceSection
        id="electrical"
        eyebrow="02 — Electrical & Power"
        title="The power side of the business."
        body="From a wiring fault in a house to a hospital generator that won't start, we cover the whole power side. Includes solar — Eldoret gets enough sun that off-grid and hybrid setups are now the norm, and they need service like anything else."
        items={[
          {
            name: 'Wiring & fault-finding',
            desc: 'Houses, shops, small offices. Diagnose, isolate, fix.',
            fixes: ['Tripping circuits', 'Earth faults', 'Re-wires', 'New circuits'],
            response: 'Same day · most jobs',
          },
          {
            name: 'Generators',
            desc: 'Petrol, diesel, gas — domestic up to commercial scale.',
            fixes: ['Won\'t start', 'AVR failure', 'Battery replacement', 'Routine service'],
            response: 'Priority · 4-hour callout',
          },
          {
            name: 'Solar inverters',
            desc: 'Hybrid and off-grid inverters across major brands.',
            fixes: ['Output dropout', 'Burnt MOSFETs', 'Firmware re-flash', 'Replacement'],
            response: '24–48 hours',
          },
          {
            name: 'Solar panels',
            desc: 'Installation faults, performance issues, broken panels.',
            fixes: ['Output testing', 'Bypass diodes', 'Re-wire array', 'Panel swap'],
            response: '24–48 hours',
          },
          {
            name: 'Battery banks',
            desc: 'Lead-acid and lithium banks for solar & UPS.',
            fixes: ['Cell testing', 'Bank rebalancing', 'BMS faults', 'Replacement'],
            response: '24–48 hours',
          },
        ]}
      />
      <ServiceSection
        id="appliances"
        eyebrow="03 — Home Appliances"
        title="The things you use every day."
        body="Washers, dryers, cookers — the appliances that quietly run a household until they don't. Most of these have a single failing part. We carry the common ones in the van."
        items={[
          {
            name: 'Washing machines',
            desc: 'Front loaders, top loaders, semi-automatics.',
            fixes: ['Won\'t drain', 'Drum bearings', 'Door lock', 'Motor brushes'],
            response: 'Same day · most jobs',
          },
          {
            name: 'Tumble dryers',
            desc: 'Vented and condenser dryers.',
            fixes: ['No heat', 'Belt slipping', 'Thermistor', 'Door catch'],
            response: 'Same day · most jobs',
          },
          {
            name: 'Cookers & ovens',
            desc: 'Gas, electric and dual-fuel.',
            fixes: ['Ignition', 'Element burn-out', 'Thermostat', 'Gas valve'],
            response: 'Same day · most jobs',
          },
          {
            name: 'Microwaves',
            desc: 'Counter-top and built-in.',
            fixes: ['Magnetron', 'Door switch', 'Turntable motor', 'Display board'],
            response: 'Same day · most jobs',
          },
          {
            name: 'Water dispensers',
            desc: 'Hot & cold dispensers, office and home models.',
            fixes: ['No cooling', 'No heating', 'Tap drip', 'Compressor swap'],
            response: 'Same day · most jobs',
          },
          {
            name: 'Televisions',
            desc: 'LED, LCD and smart TVs — home and commercial.',
            fixes: ["Won't power on", 'No picture / backlight', 'HDMI & ports', 'Sound faults'],
            response: 'Same day · most jobs',
          },
        ]}
      />
      <IndustrialCallout/>
      <ServicesCTA/>
      <SiteFooter/>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────

function ServicesNav() {
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
          rod<span style={{color: ACCENT}}>tech</span>
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
            <span style={{color: ACCENT, fontWeight: 600}}>Services</span>
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
          <div style={{marginTop: 16}}>
            <a href="tel:0793562956" style={{
              display: 'block', textAlign: 'center',
              padding: '14px 20px', borderRadius: 999,
              background: INK, color: '#fff',
              fontSize: 15, fontWeight: 600, textDecoration: 'none',
            }}>
              Call 0793 562 956
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

function PageHeader() {
  const mobile = useIsMobile();
  return (
    <div style={{padding: mobile ? '40px 20px' : '60px 64px 60px'}}>
      <div style={{
        fontFamily: '"IBM Plex Mono", monospace',
        fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
        color: MUTED, marginBottom: 28,
      }}>
        <a href="Rodtech Home.html" style={{color: MUTED, textDecoration: 'none'}}>Home</a>
        <span style={{margin: '0 12px', opacity: 0.5}}>/</span>
        <span style={{color: INK}}>Services</span>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: mobile ? '1fr' : '1.4fr 1fr',
        gap: mobile ? 24 : 80,
        alignItems: 'end',
      }}>
        <h1 style={{
          margin: 0,
          fontSize: mobile ? 52 : 88, lineHeight: 0.98, fontWeight: 700,
          letterSpacing: '-0.04em',
        }}>
          Everything we<br/>
          <span style={{color: ACCENT}}>repair</span>.
        </h1>
        <div style={{
          fontSize: mobile ? 15 : 17, lineHeight: 1.55, color: '#3a3a4a', maxWidth: 420,
        }}>
          Three practices, around fifteen services. Most jobs are
          done on the spot — same day for almost everything inside
          Eldoret. Below is the full list, with the failure modes
          we see most often under each.
        </div>
      </div>
    </div>
  );
}

function JumpBar() {
  const mobile = useIsMobile();
  return (
    <div style={{
      margin: mobile ? '0 20px' : '0 64px',
      borderTop: '1px solid #ebe8e1', borderBottom: '1px solid #ebe8e1',
      padding: '20px 0', display: 'flex', gap: 12, flexWrap: 'wrap',
    }}>
      <a href="#refrigeration" style={{textDecoration: 'none', color: 'inherit'}}><JumpPill label="Refrigeration" count="5 services" active/></a>
      <a href="#electrical" style={{textDecoration: 'none', color: 'inherit'}}><JumpPill label="Electrical & Power" count="5 services"/></a>
      <a href="#appliances" style={{textDecoration: 'none', color: 'inherit'}}><JumpPill label="Home Appliances" count="6 services"/></a>
      <a href="#industrial" style={{textDecoration: 'none', color: 'inherit'}}><JumpPill label="Industrial & Commercial" count="On request"/></a>
    </div>
  );
}

function JumpPill({label, count, active}) {
  return (
    <span style={{
      padding: '12px 20px', borderRadius: 999,
      background: active ? '#E8F1ED' : 'transparent',
      border: `1px solid ${active ? '#E8F1ED' : '#e3e0d6'}`,
      display: 'inline-flex', alignItems: 'center', gap: 10,
      fontSize: 14, fontWeight: 600,
    }}>
      {label}
      <span style={{
        fontFamily: '"IBM Plex Mono", monospace', fontSize: 10,
        letterSpacing: '0.12em', textTransform: 'uppercase',
        color: MUTED, fontWeight: 500,
      }}>{count}</span>
    </span>
  );
}

function ServiceSection({id, eyebrow, title, body, items}) {
  const mobile = useIsMobile();
  return (
    <div id={id} style={{padding: mobile ? '60px 20px 0' : '100px 64px 0', scrollMarginTop: 32}}>
      {/* Section banner */}
      <div style={{
        background: ACCENT, color: '#fff',
        padding: mobile ? '32px 28px' : '40px 44px', borderRadius: 22,
        display: 'grid',
        gridTemplateColumns: mobile ? '1fr' : '1fr 1fr',
        gap: mobile ? 16 : 60,
        alignItems: 'end',
      }}>
        <div>
          <div style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
            opacity: 0.8, marginBottom: 18,
          }}>
            {eyebrow}
          </div>
          <h2 style={{
            margin: 0,
            fontSize: mobile ? 32 : 48, fontWeight: 700, lineHeight: 1.05,
            letterSpacing: '-0.03em',
          }}>
            {title}
          </h2>
        </div>
        <div style={{
          fontSize: 15, lineHeight: 1.55,
          color: 'rgba(255,255,255,0.9)', paddingBottom: 6,
        }}>
          {body}
        </div>
      </div>

      {/* Service cards grid */}
      <div style={{
        marginTop: 24,
        display: 'grid',
        gridTemplateColumns: mobile ? '1fr' : 'repeat(2, 1fr)',
        gap: 18,
      }}>
        {items.map((s, i) => <ServiceCard key={i} {...s}/>)}
      </div>
    </div>
  );
}

function ServiceCard({name, desc, fixes, response}) {
  return (
    <div style={{
      border: '1px solid #ebe8e1', borderRadius: 18, padding: '28px 30px',
      display: 'flex', flexDirection: 'column', gap: 18,
      background: PAPER,
    }}>
      <div>
        <div style={{
          fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em', color: INK,
        }}>
          {name}
        </div>
        <div style={{
          fontSize: 14, color: MUTED, marginTop: 6, lineHeight: 1.5,
        }}>
          {desc}
        </div>
      </div>

      <div style={{
        display: 'flex', gap: 8, flexWrap: 'wrap',
      }}>
        {fixes.map((f, i) => (
          <span key={i} style={{
            padding: '6px 12px', borderRadius: 999, background: CREAM,
            fontSize: 12.5, color: INK, fontWeight: 500,
          }}>
            {f}
          </span>
        ))}
      </div>

      <div style={{
        marginTop: 'auto', paddingTop: 14, borderTop: '1px dashed #e3e0d6',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{
          fontFamily: '"IBM Plex Mono", monospace', fontSize: 10,
          letterSpacing: '0.14em', textTransform: 'uppercase',
          color: ACCENT, fontWeight: 600,
        }}>
          ◐ {response}
        </div>
        <div style={{
          fontSize: 13, fontWeight: 600, color: INK,
        }}>
          Request →
        </div>
      </div>
    </div>
  );
}

function IndustrialCallout() {
  const mobile = useIsMobile();
  return (
    <div id="industrial" style={{padding: mobile ? '60px 20px 0' : '100px 64px 0', scrollMarginTop: 32}}>
      <div style={{
        background: INK, color: '#f5f3ec',
        borderRadius: 28, padding: mobile ? '40px 28px' : '64px 56px',
        display: 'grid',
        gridTemplateColumns: mobile ? '1fr' : '1.2fr 1fr',
        gap: mobile ? 32 : 80,
        alignItems: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', bottom: -100, left: -80,
          width: 340, height: 340, borderRadius: '50%',
          background: `radial-gradient(circle, ${ACCENT}66 0%, transparent 70%)`,
        }}/>
        <div style={{position: 'relative'}}>
          <div style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
            opacity: 0.7, marginBottom: 18,
          }}>
            04 — Industrial & Commercial
          </div>
          <h2 style={{
            margin: 0, fontSize: mobile ? 32 : 44, fontWeight: 700, lineHeight: 1.05,
            letterSpacing: '-0.03em',
          }}>
            We work with kitchens,<br/>
            bakeries, laundries<br/>
            and hotels.
          </h2>
          <p style={{
            marginTop: 22, marginBottom: 0, fontSize: mobile ? 15 : 16, lineHeight: 1.55,
            opacity: 0.75, maxWidth: 480,
          }}>
            Larger-scale commercial work is quoted job-by-job —
            commercial laundry, bakery production lines, hotel
            cold chains, butchery cold rooms. Call us to walk
            through what you have.
          </p>
        </div>
        <div style={{position: 'relative', display: 'flex', flexDirection: 'column', gap: 10}}>
          {[
            ['Hotels', 'Cold chains, generators, kitchen lines'],
            ['Bakeries', 'Ovens, mixers, dough proofing, chillers'],
            ['Butcheries', 'Cold rooms, freezers, mincers, scales'],
            ['Laundries', 'Industrial washers, dryers, ironers'],
          ].map(([k, v], i) => (
            <div key={i} style={{
              padding: '18px 22px', borderRadius: 14,
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              display: 'grid',
              gridTemplateColumns: mobile ? '90px 1fr' : '120px 1fr',
              gap: 18,
              alignItems: 'center',
            }}>
              <div style={{fontSize: 16, fontWeight: 700}}>{k}</div>
              <div style={{fontSize: 13, opacity: 0.75, lineHeight: 1.5}}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ServicesCTA() {
  const mobile = useIsMobile();
  return (
    <div style={{padding: mobile ? '60px 20px' : '100px 64px'}}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: mobile ? '1fr' : '1fr 1fr',
        gap: mobile ? 32 : 60,
        alignItems: 'center',
      }}>
        <div>
          <div style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: ACCENT, marginBottom: 18, fontWeight: 600,
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <span style={{
              width: 8, height: 8, borderRadius: '50%', background: ACCENT,
              boxShadow: `0 0 12px ${ACCENT}`,
            }}/>
            Available right now
          </div>
          <h3 style={{
            margin: 0,
            fontSize: mobile ? 36 : 54, fontWeight: 700, lineHeight: 1.0,
            letterSpacing: '-0.03em',
          }}>
            Don't see your<br/>
            appliance?
          </h3>
          <p style={{
            marginTop: 22, marginBottom: 0, fontSize: mobile ? 15 : 16, lineHeight: 1.55,
            color: MUTED, maxWidth: 460,
          }}>
            The list above is what we get called for most. If
            yours isn't there, call us anyway — we've seen
            stranger things, and we'll tell you honestly if
            it's not our patch.
          </p>
        </div>
        <div style={{
          display: 'flex', flexDirection: 'column', gap: 12,
        }}>
          <div style={{
            padding: '24px 28px', borderRadius: 18, background: ACCENT,
            color: '#fff', display: 'flex', alignItems: 'center',
            justifyContent: 'space-between', gap: 24,
          }}>
            <div>
              <div style={{fontSize: 12, opacity: 0.85, letterSpacing: '0.06em', textTransform: 'uppercase'}}>Call</div>
              <div style={{fontSize: mobile ? 22 : 26, fontWeight: 700, marginTop: 4, letterSpacing: '-0.02em'}}>0793 562 956</div>
            </div>
            <span style={{fontSize: 22}}>→</span>
          </div>
          <div style={{
            padding: '24px 28px', borderRadius: 18,
            border: '1.5px solid #e3e0d6', color: INK,
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between', gap: 24,
          }}>
            <div>
              <div style={{fontSize: 12, color: MUTED, letterSpacing: '0.06em', textTransform: 'uppercase'}}>WhatsApp</div>
              <div style={{fontSize: 18, fontWeight: 600, marginTop: 4}}>Send a photo of the issue</div>
            </div>
            <span style={{fontSize: 22, color: ACCENT}}>→</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SiteFooter() {
  const mobile = useIsMobile();
  return (
    <div style={{padding: mobile ? '0 20px 40px' : '0 64px 60px'}}>
      <div style={{
        borderTop: '1px solid #ebe8e1', paddingTop: 50,
        display: 'grid',
        gridTemplateColumns: mobile ? '1fr' : '1.4fr 1fr 1fr 1fr',
        gap: mobile ? 32 : 40,
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
        <FooterCol title="Company" items={[
          {label: 'Services', href: 'Rodtech Services.html'},
          {label: 'About', href: 'Rodtech About.html'},
          {label: 'Our Work', href: 'Rodtech Our Work.html'},
          {label: 'Get in Touch', href: 'Rodtech Contact.html'},
        ]}/>
        <FooterCol title="Contact" items={['0793 562 956', 'WhatsApp', 'hello@rodtech.co.ke', 'Bandaptai, Eldoret', 'Open 24 / 7']}/>
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

window.RodtechServices = RodtechServices;
