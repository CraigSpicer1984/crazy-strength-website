# Taste check: https://crazystrength.co.uk/powerlifting.html
Checked 2026-11-23 09:54 at 1440, 768, 390px.

Reading: **broken**. FAIL 10 · WARN 7 · NOTE 0.

- **FAIL eyebrow** (desktop, tablet, phone): A small label or pill sits above a heading.
  Seen: "Crazy Strength › Programmes › Powerlifting" above "Coached powerlifting in Amesbury" · "What Is Powerlifting?" above "Three Lifts. Real Strength." · "When We Train" above "Timetable" · "Membership Pricing" above "Powerlifting Membership" · "Who’s Coaching You" above "Your Powerlifting Coaches" · "Stay in the loop" above "Get Training Insights Direct"
  Fix: Fold the information into the heading or the first sentence, or delete it.
- **FAIL micro-label** (desktop, tablet, phone): Tiny letter-spaced capitals are scattered around the page.
  Seen: "Shop" · "Contact Us" · "Amesbury · Wiltshire" · "Education" · "Train" · "Coaching"
  Fix: Sentence case at a readable size, placed with the content it describes.
- **FAIL hairlines** (desktop, tablet, phone): Thin rules divide the page.
  Seen: div (bottom) · nav (bottom) · section (top) · footer (top) · div.fi > div (top) · div (top)
  Fix: Use space, a tone step between surfaces, or a change of scale.
- **FAIL outlined-box** (desktop, tablet, phone): Content sits in thin outlined boxes.
  Seen: section > div.feat-grid.reveal · div.reveal > div · div > div · section > div.coach-grid.reveal
  Fix: Remove the outline; separate by a tone step or by space.
- **FAIL gradient** (desktop, tablet, phone): A decorative gradient fills a surface or button.
  Seen: div.phero > div.phero-bg
  Fix: Flat colour or a real photograph. A neutral scrim under text on a photo is the one exception.
- **FAIL tiny-text** (desktop, tablet, phone): Text below 12.5px appears in several places.
  Seen: "Shop" · "Contact Us" · "Amesbury · Wiltshire" · "Education" · "Train" · "Coaching"
  Fix: Raise it to at least 13px, or remove it.
- **FAIL contrast** (desktop, tablet, phone): Text fails contrast against its background.
  Seen: "Strength" 4.4:1 (needs 4.5) · "Training for your first competition →" 4.19:1 (needs 4.5) · "Book a Free Taster →" 4.08:1 (needs 4.5) · "Book a free taster session — no commitme" 3.27:1 (needs 4.5) · "What Is Powerlifting?" 4.4:1 (needs 4.5) · "When We Train" 4.19:1 (needs 4.5)
  Fix: Darken the text or lighten the ground: 4.5:1 for text, 3:1 for large text.
- **FAIL few-pictures** (desktop): Fewer than two real pictures on the page.
  Seen: 0 real, 0 drawings
  Fix: Add real pictures of the subject or its world (taste-pictures), or real interface fragments for software.
- **FAIL headline-lines** (phone): A headline runs to three or more lines.
  Seen: h1 "Coached powerlifting in Amesbury" (3 lines at 51px)
  Fix: Cut words first (about 32 characters fits two lines at a confident size), then widen the measure, then reduce the size.
- **FAIL covered-text** (phone): Something lies on top of a heading, statement or button.
  Seen: "Three Lifts. Real Strength." under div.mob-prog-bar · "Get In Touch →" under a
  Fix: Move it, or give the text its own space; nothing sits on a headline.
- **WARN card-rows** (desktop, tablet): Rows of identical boxed cards.
  Seen: section > div.feat-grid.reveal (4) · div.reveal > div (3) · section > div.coach-grid.reveal (5)
  Fix: Compose the section from its blueprint; vary layout between neighbours.
- **WARN default-font** (desktop, tablet, phone): The display face is one of the most overused defaults.
  Seen: Bebas Neue
  Fix: Use the dealt type pairing.
- **WARN size-count** (desktop, tablet, phone): Too many font sizes.
  Seen: 18 sizes: 8, 9, 10, 11, 12, 13, 14, 15, 16, 19, 21, 22, 23, 35, 42, 45, 51, 96 · 18 sizes: 8, 9, 10, 11, 12, 13, 14, 15, 16, 19, 21, 22, 23, 31, 32, 35, 45, 54 · 18 sizes: 8, 9, 10, 11, 12, 13, 14, 15, 16, 19, 21, 22, 23, 26, 27, 29, 45, 51
  Fix: Five sizes on a page is the ceiling: one very large, one small, little in between.
- **WARN small-text** (desktop): Running text is set below 15px.
  Seen: median running text 14.4px
  Fix: Body text at 16 to 20px in full ink.
- **WARN emoji** (desktop, tablet, phone): Emoji used as icons or decoration.
  Seen: 📷 @crazystrengthhq · 🗣 Crazy Strength UK · ▶ @crazy.strength · 📞 WhatsApp: +44 7734 824897 · 📞 WhatsApp Us · ✉ Email
  Fix: Words, or a real picture.
- **WARN em-dashes** (desktop): Many em dashes in the copy.
  Seen: 11 em dashes
  Fix: Use commas, colons or full stops.
- **WARN tap-size** (phone): Small tap targets on the phone.
  Seen: Shop · Contact Us · Menu · Crazy Strength · @craig.spicer · CrazyStrength
  Fix: Make links and buttons at least 44px tall outside running text.

## Measurements
- desktop 1440px: 4.4 screens tall; faces DM Sans, Bebas Neue; main line 96px; text 14.4px; sizes 18; real pictures 0 (drawings 0); ground #0a0a0a; buttons #e8220a #ffffff #282828 #25d366; moving elements 7
- tablet 768px: 4.3 screens tall; faces DM Sans, Bebas Neue; main line 54px; text 14.4px; sizes 18; real pictures 0 (drawings 0); ground #0a0a0a; buttons #e8220a #ffffff #282828 #25d366; moving elements 7
- phone 390px: 7 screens tall; faces DM Sans, Bebas Neue; main line 51px; text 14.4px; sizes 18; real pictures 0 (drawings 0); ground #0a0a0a; buttons #e8220a #ffffff #282828 #25d366; moving elements 7

## Screenshots
Open these and critique them as pictures, not as code:
- .taste/check/desktop-fold.jpg
- .taste/check/desktop-sheet-1.jpg
- .taste/check/desktop-sheet-2.jpg
- .taste/check/tablet-fold.jpg
- .taste/check/tablet-sheet-1.jpg
- .taste/check/tablet-sheet-2.jpg
- .taste/check/phone-fold.jpg
- .taste/check/phone-sheet-1.jpg
- .taste/check/phone-sheet-2.jpg
