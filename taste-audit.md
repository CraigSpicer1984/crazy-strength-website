# Taste Audit — crazystrength.co.uk
**Date:** 22 November 2026  
**Verdict: Kit-like** — the brand identity is strong and distinctive; the page is let down by a cluster of template tells, one structural problem on the hero, and three contrast failures.  
**Score: 6.5** (capped by active FAILs)

Juror blind score: design 6.5 · usability 7.0 · creativity 6.0 · content 7.5 → overall **6.8** (capped to 6.5 by FAILs)

---

## Fix first — top five problems in order

### 1. Hero right column: logo where a photograph should be
**What is wrong:** The largest visual space on the homepage — the right half of the hero on desktop — displays the brand logo/mascot on a black ground. No gym floor, no athlete, no coached session. It tells you nothing about what being there feels like.  
**Where:** `desktop-fold.jpg`, hero right column.  
**Fix:** Replace the logo placeholder with a full-bleed photograph: a coached session, a lifter on the platform, or the gym floor. The logo is already in the nav and the footer; it does not need to hold the hero.
```html
<!-- replace the logo block with -->
<div class="hero-img" style="position:absolute;inset:0;overflow:hidden">
  <img src="images/[real-coached-session-photo].jpg" alt="Coached session at Crazy Strength"
       style="width:100%;height:100%;object-fit:cover;object-position:center top">
</div>
```

### 2. Eyebrow labels above every heading
**What is wrong:** "MORE THAN JUST A GYM", "START HERE", "WHAT WE OFFER", "COMPETE", "NEW HERE?", "COMMON QUESTIONS", "WHAT PEOPLE SAY", "OUR STORY" — small tracked caps above every section heading. It makes every section open the same way, removes the heading's power, and triggers the design cap throughout the page.  
**Where:** `desktop-sheet-1.jpg`, `desktop-sheet-2.jpg` — visible in every section.  
**Fix:** Delete all eyebrow spans. If the label carries information ("Free Event · Saturday 23 January 2027"), fold it into the heading or the first line.
```html
<!-- before -->
<span class="eyebrow">More Than Just a Gym</span>
<h2>Our Facilities</h2>

<!-- after -->
<h2>Our Facilities</h2>
```

### 3. Phone body text clipped at right edge
**What is wrong:** On the phone hero, the supporting paragraphs are truncated — "in A…", "people, o…", "before y…" — meaning visitors on mobile cannot read the core pitch without scrolling horizontally. This is a usability fail.  
**Where:** `phone-fold.jpg`.  
**Fix:** The hero container is likely missing `overflow:hidden` or the text block lacks a right constraint. Add padding-right or cap the text block:
```css
.hero-text { padding-right: 1.5rem; max-width: 100%; overflow: hidden; }
.hero-text p { overflow-wrap: break-word; }
```

### 4. Contrast failures — three instances
**What is wrong:** The checker measured three contrast failures below the 4.5:1 WCAG AA threshold: "Strength" (red on black, 4.4:1), "Amesbury · Wiltshire" (grey on black, 4.4:1), and the WhatsApp CTA button text (4.08:1).  
**Fix:**
- "Strength" in the logo wordmark: nudge the red up slightly. `--red: #eb2a10` or similar (test with a contrast checker).
- "Amesbury · Wiltshire" in nav: raise to `color: #bbb` or remove the micro-label entirely (see finding 6).
- WhatsApp button: change text to `#fff` and ensure the green background is `#1da851` or darker.

### 5. 01 / 02 / 03 step numbering
**What is wrong:** The "Not Sure Where to Start?" section uses large red 01/02/03 numbers. These are a template tell — they signal the AI-kit origin more clearly than almost anything else on the page.  
**Where:** `desktop-sheet-2.jpg`, onboarding section.  
**Fix:** Remove the numbers. The three steps are already in order by position. If the sequence matters, write "First," / "Then," / "Finally," inside each card's heading, or use a plain `<ol>`.

---

## All findings

### FAILs (8)

| Rule | What was seen | Fix |
|------|--------------|-----|
| eyebrow | "More Than Just A Gym", "Start Here", "What We Offer", "Compete", "New Here?", "Common Questions", "Our Story", "What People Say" | Delete all; fold any information into the heading |
| micro-label | "Amesbury · Wiltshire", "Education", "Train" in tiny tracked caps | Sentence case at readable size, or remove |
| index-numbers | 01 · 02 · 03 in the onboarding steps | Remove numbers; order by position |
| hairlines | Nav bottom border, section top/bottom borders throughout | Use space or a tone step between surfaces |
| outlined-box | Hero location tag box, Open Day card, service chips | `border: 0; background: var(--card)` or no box |
| tiny-text | "Amesbury · Wiltshire", nav labels at ~8–10px | Raise to 13px minimum or remove |
| contrast | "Strength" 4.4:1 · "Amesbury · Wiltshire" 4.4:1 · WhatsApp CTA 4.08:1 | Darken text or lighten button background to reach 4.5:1 |
| no-h1 | No `<h1>` on the page | Mark the "CRAZYSTRENGTH" hero headline as `<h1>` |

### WARNs (8)

| Rule | What was seen | Assessment |
|------|--------------|------------|
| card-rows | Three consecutive sections using identical dark-outlined card rows | Worth varying — split one into a full-bleed or statement layout |
| default-font | Bebas Neue | Heavily used in the fitness/gym category; could be defended as a deliberate brand choice given its use in the logo |
| size-count | 19 font sizes on desktop | Reduce to 5–6; audit all `font-size` declarations and standardise |
| small-text | Median running text 14.08px | Raise body copy to 16px minimum |
| emoji | 🚀 🏠 🏆 📞 in ticker and CTAs | Replace with text or proper SVG icons |
| slop-words | "world class" | Replace with the specific thing: what qualification, what result |
| em-dashes | 6 em dashes in running copy | Replace with commas, colons or full stops |
| tap-size | Ticker links and menu on phone too small | Minimum 44px height on all interactive elements |

### NOTE

| Rule | What was seen | Assessment |
|------|--------------|------------|
| unproven-claims | ★★★★★ 5.0 (96 Google Reviews) | Acceptable — it is a real, verifiable rating |

---

## Keep — what works and must survive

- **The black/white/red colour system.** Tight and confident. No other gym in this category has this palette executed this cleanly. Do not touch it.
- **The brand mascot.** Distinctive and consistent. It belongs in the nav and the footer. Move it out of the hero right column but do not remove it from the site.
- **The photo strip of real people.** The row of training photographs after the hero is genuine and warm. Keep it and consider whether one of those images should be promoted into the hero.
- **The Craig about-section photo.** Real, credible, specific. The split layout here works.
- **The CTA hierarchy.** Red = primary action, green = WhatsApp. Clear and consistent throughout.
- **The event ticker.** A live-relevance signal that no competitor has. Keep it.
- **Content depth.** Programmes, FAQs, timetable, reviews, pricing — everything a visitor needs is here. This is the page's real strength. Do not thin it.
- **The "#BeAGoodHuman" framing.** This is specific to Crazy Strength and survives the logo cover test. Keep it visible.

---

## What was not checked

- Internal pages (education, shop, coaching, events, blog)
- Cookie banner / GDPR notice
- Login-walled content
- Pages behind the navigation dropdowns
- Load time / Core Web Vitals
- Reduced-motion pass (not flagged by the checker)

---

## Verdict summary

This is a **kit-like** result — not generated, not broken. The brand identity (mascot, wordmark, palette, voice) is genuinely strong and distinctive. What pulls the score down is a cluster of well-known template devices — eyebrow labels, 01/02/03 steps, hairlines, outlined boxes — applied consistently across every section. Remove those and add one real photograph to the hero and the page would score into the **Designed** range. That is a morning's work, not a rebuild.

The phone clipping issue is the only thing that stops visitors getting information right now — fix that first.
