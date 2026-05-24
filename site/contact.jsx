// Rodtech Contact page — emerald, v2
// Changes from v1:
//  - Two small contact cards (Call + WhatsApp) side by side, no third card
//  - Classic form: Name, Email, Phone (optional), Location,
//    Problem type dropdown (incl. Job application), Description
//  - Tweakable: accent, phone, email, address, hours, response time, show map

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#0C6B4F",
  "phone": "0793 562 956",
  "whatsappLabel": "Send a photo of the issue",
  "email": "hello@rodtech.co.ke",
  "address": "Bandaptai, Eldoret · Uasin Gishu County",
  "hours": "Open 24 / 7",
  "responseTime": "< 4 hours",
  "showMap": true,
  "showHours": true
}/*EDITMODE-END*/;

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

function RodtechContact() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const accent = t.accent;

  return (
    <div style={{
      width: '100%', background: PAPER, color: INK,
      fontFamily: '"DM Sans", -apple-system, system-ui, sans-serif',
    }}>
      <ContactNav accent={accent} phone={t.phone}/>
      <ContactHero accent={accent}/>
      <ContactMethods accent={accent} phone={t.phone} whatsappLabel={t.whatsappLabel}/>
      <IntakeForm accent={accent}/>
      {t.showMap && <LocationCard accent={accent} address={t.address} email={t.email}/>}
      {t.showHours && <HoursStrip accent={accent} hours={t.hours} responseTime={t.responseTime}/>}
      <SiteFooter accent={accent}/>

      <TweaksPanel>
        <TweakSection label="Brand"/>
        <TweakColor label="Accent" value={t.accent}
          options={['#0C6B4F', '#8B1E2C', '#0E5562', '#1F4FE0', '#1a1a2e']}
          onChange={(v) => setTweak('accent', v)}/>

        <TweakSection label="Contact"/>
        <TweakText label="Phone" value={t.phone}
          onChange={(v) => setTweak('phone', v)}/>
        <TweakText label="WhatsApp tagline" value={t.whatsappLabel}
          onChange={(v) => setTweak('whatsappLabel', v)}/>
        <TweakText label="Email" value={t.email}
          onChange={(v) => setTweak('email', v)}/>
        <TweakText label="Address" value={t.address}
          onChange={(v) => setTweak('address', v)}/>

        <TweakSection label="Hours"/>
        <TweakText label="Hours line" value={t.hours}
          onChange={(v) => setTweak('hours', v)}/>
        <TweakText label="Response time" value={t.responseTime}
          onChange={(v) => setTweak('responseTime', v)}/>

        <TweakSection label="Sections"/>
        <TweakToggle label="Show map card" value={t.showMap}
          onChange={(v) => setTweak('showMap', v)}/>
        <TweakToggle label="Show hours strip" value={t.showHours}
          onChange={(v) => setTweak('showHours', v)}/>
      </TweaksPanel>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────

function ContactNav({accent, phone}) {
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
        </div>
      )}
    </div>
  );
}

function ContactHero({accent}) {
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
        <span style={{color: INK}}>Get in Touch</span>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: mobile ? '1fr' : '1.5fr 1fr',
        gap: mobile ? 20 : 80,
        alignItems: 'end',
      }}>
        <div>
          <div style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: accent, marginBottom: 22, fontWeight: 600,
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <span style={{
              display: 'inline-block', width: 8, height: 8, borderRadius: '50%',
              background: accent, boxShadow: `0 0 12px ${accent}`,
              animation: 'rodPulse 2s ease-in-out infinite',
            }}/>
            <style>{`@keyframes rodPulse{0%,100%{opacity:1}50%{opacity:0.4}}`}</style>
            Available right now
          </div>
          <h1 style={{
            margin: 0,
            fontSize: mobile ? 64 : 88, lineHeight: 0.95, fontWeight: 700,
            letterSpacing: '-0.04em',
          }}>
            Talk to <span style={{color: accent}}>us</span>.
          </h1>
        </div>
        <p style={{
          margin: 0, fontSize: mobile ? 15 : 17, lineHeight: 1.55, color: '#3a3a4a',
          maxWidth: 400, paddingBottom: 8,
        }}>
          Two fast ways to reach us, or fill in the form below
          and we'll call back. Dan or one of the crew is on call
          twenty-four hours a day.
        </p>
      </div>
    </div>
  );
}

function ContactMethods({accent, phone, whatsappLabel}) {
  const mobile = useIsMobile();
  return (
    <div style={{padding: mobile ? '0 20px' : '20px 64px 0'}}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: mobile ? '1fr' : '1fr 1fr',
        gap: 14,
      }}>
        {/* Call — primary (emerald) */}
        <div style={{
          background: accent, color: '#fff',
          borderRadius: 22, padding: '32px 34px',
          display: 'flex', flexDirection: 'column', gap: 16,
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <MethodIcon kind="phone" accent/>
            <span style={{
              fontFamily: '"IBM Plex Mono", monospace', fontSize: 10,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              opacity: 0.8,
            }}>
              ● 24 / 7 line
            </span>
          </div>
          <div>
            <div style={{
              fontFamily: '"IBM Plex Mono", monospace', fontSize: 10,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              opacity: 0.75, marginBottom: 8, fontWeight: 600,
            }}>
              Call
            </div>
            <div style={{
              fontSize: mobile ? 26 : 34, fontWeight: 700, letterSpacing: '-0.025em',
              lineHeight: 1,
            }}>
              {phone}
            </div>
            <div style={{
              fontSize: 13, opacity: 0.85, marginTop: 10,
            }}>
              Fastest — Dan or the crew picks up.
            </div>
          </div>
          <a href={`tel:${phone.replace(/\s/g, '').replace(/^0/, '+254')}`} style={{
            marginTop: 'auto', paddingTop: 16,
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '12px 18px', borderRadius: 999,
            background: '#fff', color: accent,
            fontSize: 14, fontWeight: 600, alignSelf: 'flex-start',
            textDecoration: 'none',
          }}>
            Tap to call
            <span>→</span>
          </a>
        </div>

        {/* WhatsApp — secondary (white) */}
        <div style={{
          border: '1px solid #ebe8e1', borderRadius: 22, padding: '32px 34px',
          display: 'flex', flexDirection: 'column', gap: 16,
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <MethodIcon kind="whatsapp"/>
            <span style={{
              fontFamily: '"IBM Plex Mono", monospace', fontSize: 10,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: MUTED,
            }}>
              Remote diagnosis
            </span>
          </div>
          <div>
            <div style={{
              fontFamily: '"IBM Plex Mono", monospace', fontSize: 10,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: MUTED, marginBottom: 8, fontWeight: 600,
            }}>
              WhatsApp
            </div>
            <div style={{
              fontSize: mobile ? 20 : 24, fontWeight: 700, letterSpacing: '-0.02em',
              lineHeight: 1.15,
            }}>
              {whatsappLabel}
            </div>
            <div style={{
              fontSize: 13, color: MUTED, marginTop: 10,
            }}>
              Great for non-urgent problems, we'll triage before the visit.
            </div>
          </div>
          <a href={`https://wa.me/${phone.replace(/\s/g, '').replace(/^0/, '254')}?text=Hello%20Rodtech!%20I%27d%20like%20help%20with%20an%20appliance%20repair.`} target="_blank" rel="noopener noreferrer" style={{
            marginTop: 'auto', paddingTop: 16,
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '12px 18px', borderRadius: 999,
            background: INK, color: '#fff',
            fontSize: 14, fontWeight: 600, alignSelf: 'flex-start',
            textDecoration: 'none',
          }}>
            Open WhatsApp
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function MethodIcon({kind, accent}) {
  const stroke = accent ? 'rgba(255,255,255,0.95)' : INK;
  const sw = 2;
  const common = {fill: 'none', stroke, strokeWidth: sw, strokeLinecap: 'round', strokeLinejoin: 'round'};
  return (
    <svg width="40" height="40" viewBox="0 0 48 48" style={{display: 'block'}}>
      {kind === 'phone' && (
        <g {...common}>
          <path d="M14 8 h6 l4 8 l-5 3 a18 18 0 0 0 10 10 l3-5 l8 4 v6 a2 2 0 0 1-2 2 A28 28 0 0 1 12 10 a2 2 0 0 1 2-2 z"/>
        </g>
      )}
      {kind === 'whatsapp' && (
        <g {...common}>
          <path d="M10 38 l3-8 a14 14 0 1 1 5 5 z"/>
          <path d="M18 22 c1 4 4 7 8 8 l3-2 l4 2 v3 c-7 1-13-5-12-12 z" strokeWidth="1.5"/>
        </g>
      )}
    </svg>
  );
}

function IntakeForm({accent}) {
  const mobile = useIsMobile();
  return (
    <div style={{padding: mobile ? '40px 20px 0' : '120px 64px 0'}}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: mobile ? '1fr' : '0.85fr 1.15fr',
        gap: mobile ? 32 : 80,
        alignItems: 'start',
      }}>
        <div>
          <div style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: accent, marginBottom: 22, fontWeight: 600,
          }}>
            Send a request
          </div>
          <h2 style={{
            margin: 0,
            fontSize: mobile ? 36 : 52, fontWeight: 700, lineHeight: 1.0,
            letterSpacing: '-0.03em',
          }}>
            Tell us what's<br/>going on.
          </h2>
          <p style={{
            marginTop: 24, marginBottom: 0,
            fontSize: mobile ? 15 : 16, lineHeight: 1.6, color: MUTED, maxWidth: 380,
          }}>
            Looking for a repair, a quote, or a job? Fill in the
            form and we'll get back inside the day. If it's urgent,
            the phone is faster.
          </p>
          <div style={{
            marginTop: 36, padding: '20px 24px', borderRadius: 16,
            background: CREAM,
            fontSize: 14, lineHeight: 1.55, color: '#3a3a4a',
          }}>
            <div style={{
              fontFamily: '"IBM Plex Mono", monospace', fontSize: 10,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: accent, fontWeight: 600, marginBottom: 8,
            }}>
              ◐ Typical response
            </div>
            Inside business hours: under 30 minutes. After hours:
            under an hour. For emergencies, please call.
          </div>
        </div>

        {/* ── Netlify Forms: name + data-netlify required. onSubmit posts to Netlify then redirects. ── */}
        <form
          name="contact"
          data-netlify="true"
          style={{
            border: '1px solid #ebe8e1', borderRadius: 24,
            padding: mobile ? '28px 24px' : '36px 40px 32px',
            display: 'flex', flexDirection: 'column', gap: 24,
          }}
          onSubmit={(e) => {
            e.preventDefault();
            fetch('/Rodtech%20Contact.html', {
              method: 'POST',
              headers: {'Content-Type': 'application/x-www-form-urlencoded'},
              body: new URLSearchParams(new FormData(e.target)).toString(),
            })
              .then(() => { window.location.href = '/thank-you.html'; })
              .catch(() => { alert('Something went wrong. Please try calling or WhatsApp instead.'); });
          }}
        >
          {/* Required hidden field for Netlify Forms with React */}
          <input type="hidden" name="form-name" value="contact" />

          <FormRow>
            <Field label="Full name">
              <TextInput name="full-name" placeholder="e.g. Naomi Kiprop" required accent={accent}/>
            </Field>
          </FormRow>

          <FormRow cols="1fr 1fr">
            <Field label="Email">
              <TextInput name="email" type="email" placeholder="you@example.com" required accent={accent}/>
            </Field>
            <Field label="Phone" hint="Optional">
              <TextInput name="phone" type="tel" placeholder="07XX XXX XXX" accent={accent}/>
            </Field>
          </FormRow>

          <FormRow cols="1fr 1fr">
            <Field label="Location">
              <TextInput name="location" placeholder="e.g. Eldoret town, Pioneer estate" required accent={accent}/>
            </Field>
            <Field label="What's it about?">
              <SelectInput name="service" accent={accent} options={[
                'Refrigeration repair',
                'Electrical / wiring',
                'Generator or solar',
                'Home appliance (washer, cooker, etc.)',
                'Industrial / commercial',
                'Job application',
                'Something else',
              ]}/>
            </Field>
          </FormRow>

          <Field label="Tell us more" hint="A sentence or two is plenty">
            <textarea rows={4} name="message"
              placeholder="e.g. The freezer isn't cooling. Compressor sounds like it's running but everything is at room temp." style={{
              width: '100%', border: '1.5px solid #ebe8e1', borderRadius: 12,
              padding: '14px 16px', boxSizing: 'border-box', resize: 'vertical',
              fontFamily: '"DM Sans", sans-serif', fontSize: 15, lineHeight: 1.5,
              color: INK, outline: 'none',
              transition: 'border-color 0.15s',
            }}
            onFocus={(e) => e.target.style.borderColor = accent}
            onBlur={(e) => e.target.style.borderColor = '#ebe8e1'}
            />
          </Field>

          <div style={{
            paddingTop: 8, display: 'flex',
            flexDirection: mobile ? 'column' : 'row',
            alignItems: mobile ? 'stretch' : 'center',
            justifyContent: 'space-between',
            gap: mobile ? 16 : 20,
          }}>
            <div style={{
              fontSize: 12, color: MUTED, maxWidth: 280,
            }}>
              We'll only use this to contact you about what you submitted.
            </div>
            <button type="submit" style={{
              padding: '16px 24px', borderRadius: 999,
              background: INK, color: '#fff', border: 'none',
              fontFamily: '"DM Sans", sans-serif',
              fontSize: 15, fontWeight: 600, cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 12,
            }}>
              Send message
              <span style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 22, height: 22, borderRadius: '50%', background: accent, color: '#fff',
                fontSize: 13, fontWeight: 700,
              }}>→</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function FormRow({cols = '1fr', children}) {
  const mobile = useIsMobile();
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: mobile ? '1fr' : cols,
      gap: 18,
    }}>
      {children}
    </div>
  );
}

function Field({label, hint, children}) {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
      <div style={{
        display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12,
      }}>
        <label style={{
          fontSize: 13, fontWeight: 700, letterSpacing: '-0.01em', color: INK,
        }}>
          {label}
        </label>
        {hint && (
          <span style={{
            fontFamily: '"IBM Plex Mono", monospace', fontSize: 10,
            letterSpacing: '0.12em', textTransform: 'uppercase', color: MUTED,
          }}>
            {hint}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

function TextInput({type = 'text', placeholder, required, accent, name}) {
  return (
    <input type={type} placeholder={placeholder} required={required} name={name} style={{
      width: '100%', border: '1.5px solid #ebe8e1', borderRadius: 12,
      padding: '14px 16px', boxSizing: 'border-box',
      fontFamily: '"DM Sans", sans-serif', fontSize: 15,
      color: INK, outline: 'none',
      transition: 'border-color 0.15s',
    }}
    onFocus={(e) => e.target.style.borderColor = accent}
    onBlur={(e) => e.target.style.borderColor = '#ebe8e1'}
    />
  );
}

function SelectInput({options, accent, name}) {
  return (
    <select defaultValue="" required name={name} style={{
      width: '100%', border: '1.5px solid #ebe8e1', borderRadius: 12,
      padding: '14px 16px', boxSizing: 'border-box',
      fontFamily: '"DM Sans", sans-serif', fontSize: 15,
      color: INK, outline: 'none', background: '#fff',
      appearance: 'none', cursor: 'pointer',
      backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path d='M1 1 L6 6 L11 1' stroke='%231a1a2e' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/></svg>")`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 16px center',
      paddingRight: 40,
      transition: 'border-color 0.15s',
    }}
    onFocus={(e) => e.target.style.borderColor = accent}
    onBlur={(e) => e.target.style.borderColor = '#ebe8e1'}
    >
      <option value="" disabled>Pick the closest match…</option>
      {options.map((o, i) => <option key={i} value={o}>{o}</option>)}
    </select>
  );
}

function LocationCard({accent, address, email}) {
  const mobile = useIsMobile();
  return (
    <div style={{padding: mobile ? '40px 20px 0' : '120px 64px 0'}}>
      <div style={{
        background: INK, color: '#f5f3ec', borderRadius: 28,
        padding: mobile ? '40px 28px' : '64px 56px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', bottom: -80, right: -80,
          width: 360, height: 360, borderRadius: '50%',
          background: `radial-gradient(circle, ${accent}66 0%, transparent 70%)`,
        }}/>
        <div style={{
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: mobile ? '1fr' : '1fr 1fr',
          gap: mobile ? 32 : 60,
          alignItems: 'center',
        }}>
          <div>
            <div style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
              opacity: 0.7, marginBottom: 22,
            }}>
              The workshop
            </div>
            <h2 style={{
              margin: 0,
              fontSize: mobile ? 36 : 48, fontWeight: 700, lineHeight: 1.05,
              letterSpacing: '-0.03em',
            }}>
              Bandaptai,<br/>
              <span style={{color: accent, filter: 'brightness(1.6) saturate(0.9)'}}>Eldoret</span>.
            </h2>
            <div style={{
              marginTop: 30, display: 'grid', gridTemplateColumns: 'auto 1fr',
              gap: '14px 22px',
              fontSize: 14, lineHeight: 1.5,
            }}>
              <div style={{
                fontFamily: '"IBM Plex Mono", monospace', fontSize: 10,
                letterSpacing: '0.16em', textTransform: 'uppercase',
                opacity: 0.6, paddingTop: 3,
              }}>Address</div>
              <div>{address}</div>

              <div style={{
                fontFamily: '"IBM Plex Mono", monospace', fontSize: 10,
                letterSpacing: '0.16em', textTransform: 'uppercase',
                opacity: 0.6, paddingTop: 3,
              }}>Workshop</div>
              <div>Drop-in repairs welcome during the day · Mon–Sat</div>

              <div style={{
                fontFamily: '"IBM Plex Mono", monospace', fontSize: 10,
                letterSpacing: '0.16em', textTransform: 'uppercase',
                opacity: 0.6, paddingTop: 3,
              }}>Email</div>
              <div>{email}</div>
            </div>
            <div style={{marginTop: 32}}>
              <a href="https://www.google.com/maps/place/Rodtech+Ventures+Ltd/data=!4m2!3m1!1s0x0:0x2f5a344723835b4c?sa=X&ved=1t:2428&ictx=111" target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '12px 18px', borderRadius: 999,
                background: accent, color: '#fff',
                fontSize: 14, fontWeight: 600, textDecoration: 'none',
              }}>
                Open in Google Maps
                <span>↗</span>
              </a>
            </div>
          </div>
          <MapIllustration accent={accent}/>
        </div>
      </div>
    </div>
  );
}

function MapIllustration({accent}) {
  return (
    <div style={{
      aspectRatio: '4/3', borderRadius: 18, overflow: 'hidden',
      background: '#0e1726', position: 'relative',
      border: '1px solid rgba(255,255,255,0.08)',
    }}>
      <svg width="100%" height="100%" viewBox="0 0 400 300" preserveAspectRatio="none"
        style={{position: 'absolute', inset: 0, display: 'block'}}>
        <defs>
          <radialGradient id="rt-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.5"/>
            <stop offset="100%" stopColor={accent} stopOpacity="0"/>
          </radialGradient>
        </defs>
        <path d="M0 80 L400 110" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" fill="none"/>
        <path d="M0 220 L400 200" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" fill="none"/>
        <path d="M80 0 L120 300" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" fill="none"/>
        <path d="M310 0 L290 300" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" fill="none"/>
        {[40, 130, 170, 250, 280].map(y => (
          <line key={'h'+y} x1="0" y1={y} x2="400" y2={y}
            stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
        ))}
        {[40, 160, 200, 240, 360].map(x => (
          <line key={'v'+x} x1={x} y1="0" x2={x} y2="300"
            stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
        ))}
        {[
          [60, 50, 30, 22], [110, 130, 36, 28], [200, 90, 40, 26],
          [240, 180, 32, 24], [310, 60, 28, 20], [80, 240, 36, 22],
          [340, 220, 24, 18], [200, 240, 28, 20],
        ].map(([x, y, w, h], i) => (
          <rect key={i} x={x} y={y} width={w} height={h}
            fill="rgba(255,255,255,0.04)" rx="2"/>
        ))}
        <circle cx="200" cy="160" r="80" fill="url(#rt-glow)"/>
      </svg>
      <div style={{
        position: 'absolute', top: '52%', left: '50%',
        transform: 'translate(-50%, -100%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
      }}>
        <div style={{
          padding: '6px 12px', borderRadius: 999,
          background: '#fff', color: INK,
          fontFamily: '"DM Sans", sans-serif',
          fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap',
        }}>
          ● Rodtech · Bandaptai
        </div>
        <svg width="26" height="34" viewBox="0 0 26 34">
          <path d="M13 0 a13 13 0 0 1 13 13 c0 9-13 21-13 21 s-13-12-13-21 a13 13 0 0 1 13-13z"
            fill={accent} stroke="#fff" strokeWidth="2"/>
          <circle cx="13" cy="13" r="4.5" fill="#fff"/>
        </svg>
      </div>
      <div style={{
        position: 'absolute', bottom: 10, left: 12,
        fontFamily: '"IBM Plex Mono", monospace',
        fontSize: 9, letterSpacing: '0.14em',
        color: 'rgba(255,255,255,0.4)',
      }}>
        0.5143°N · 35.2698°E
      </div>
    </div>
  );
}

function HoursStrip({accent, hours, responseTime}) {
  const mobile = useIsMobile();
  const items = [
    ['Hours', hours, 'Every day of the year'],
    ['Response', responseTime, 'For emergencies in Eldoret'],
    ['Service area', 'North Rift', 'Anywhere reachable in a day'],
  ];
  return (
    <div style={{padding: mobile ? '40px 20px 0' : '120px 64px 0'}}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: mobile ? '1fr' : '1fr 1fr 1fr',
        gap: 0,
        border: '1px solid #ebe8e1', borderRadius: 22, overflow: 'hidden',
      }}>
        {items.map(([k, big, small], i) => (
          <div key={i} style={{
            padding: mobile ? '28px 24px' : '34px 36px',
            borderRight: (!mobile && i < 2) ? '1px solid #ebe8e1' : 'none',
            borderBottom: (mobile && i < items.length - 1) ? '1px solid #ebe8e1' : 'none',
          }}>
            <div style={{
              fontFamily: '"IBM Plex Mono", monospace', fontSize: 10,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: MUTED, marginBottom: 14, fontWeight: 600,
            }}>
              {k}
            </div>
            <div style={{
              fontSize: mobile ? 24 : 32, fontWeight: 700, letterSpacing: '-0.025em',
              lineHeight: 1, color: INK,
            }}>
              {big}
            </div>
            <div style={{
              fontSize: 13.5, color: MUTED, marginTop: 10,
            }}>
              {small}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SiteFooter({accent}) {
  const mobile = useIsMobile();
  return (
    <div style={{padding: mobile ? '40px 20px' : '120px 64px 60px'}}>
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

window.RodtechContact = RodtechContact;
