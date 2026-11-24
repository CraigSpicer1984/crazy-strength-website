# Taste check: https://crazystrength.co.uk/cubs.html
Checked 2026-11-24 18:46 at 1440, 390px.

Reading: **broken**. FAIL 5 · WARN 7 · NOTE 0.

- **FAIL micro-label** (desktop, phone): Tiny letter-spaced capitals are scattered around the page.
  Seen: "Stage 1 — Age 8+" · "Stage 2" · "Stage 3" · "Lead Coach" · "Weightlifting & CUBS Coach" · "CUBS & LTL Coach"
  Fix: Sentence case at a readable size, placed with the content it describes.
- **FAIL index-numbers** (desktop, phone): Sections or steps are numbered 01, 02, 03.
  Seen: "Stage 1 — Foundation" · "Stage 3 — WL / PL Pathway" · "Stage 2 — Development" · "Stage 1 — Age 8+" · "Stage 2" · "Stage 3"
  Fix: Show order by position, scale or the words; use a real ordered list if order matters.
- **FAIL tiny-text** (desktop, phone): Text below 12.5px appears in several places.
  Seen: "Stage 1 — Foundation" · "Stage 3 — WL / PL Pathway" · "Stage 2 — Development" · "Stage 1 — Age 8+" · "Stage 2" · "Stage 3"
  Fix: Raise it to at least 13px, or remove it.
- **FAIL contrast** (desktop, phone): Text fails contrast against its background.
  Seen: "Monday / Wed / Fri" 4.09:1 (needs 4.5) · "Tuesday / Thursday" 4.09:1 (needs 4.5) · "Enquire" 1:1 (needs 4.5) · "Lead Coach" 4.09:1 (needs 4.5) · "Weightlifting & CUBS Coach" 4.09:1 (needs 4.5) · "CUBS & LTL Coach" 4.09:1 (needs 4.5)
  Fix: Darken the text or lighten the ground: 4.5:1 for text, 3:1 for large text.
- **FAIL few-pictures** (desktop): Fewer than two real pictures on the page.
  Seen: 0 real, 0 drawings
  Fix: Add real pictures of the subject or its world (taste-pictures), or real interface fragments for software.
- **WARN card-rows** (desktop): Rows of identical boxed cards.
  Seen: section.section > div.price-grid (3) · section.section > div.team-grid (5)
  Fix: Compose the section from its blueprint; vary layout between neighbours.
- **WARN default-font** (desktop, phone): The display face is one of the most overused defaults.
  Seen: Bebas Neue
  Fix: Use the dealt type pairing.
- **WARN size-count** (desktop, phone): Too many font sizes.
  Seen: 15 sizes: 12, 13, 14, 15, 16, 17, 18, 22, 26, 35, 48, 56, 58, 115, 128 · 12 sizes: 12, 13, 14, 15, 16, 17, 18, 22, 26, 32, 48, 56
  Fix: Five sizes on a page is the ceiling: one very large, one small, little in between.
- **WARN empty-screen** (desktop): One desktop screen is mostly empty ground.
  Seen: screen 4
  Fix: Make it a deliberate rest, or fill it with content.
- **WARN em-dashes** (desktop): Many em dashes in the copy.
  Seen: 7 em dashes
  Fix: Use commas, colons or full stops.
- **WARN page-errors** (desktop, phone): The page throws script errors.
  Seen: SyntaxError: Unexpected identifier 're'
  Fix: Open the console and fix them.
- **WARN tap-size** (phone): Small tap targets on the phone.
  Seen: CRAZYSTRENGTH · Powerlifting · Olympic Weightlifting · Ladies That Lift · Legends That Lift · Cubs Programme
  Fix: Make links and buttons at least 44px tall outside running text.

## Measurements
- desktop 1440px: 4.4 screens tall; faces DM Sans, Bebas Neue; main line 115px; text 15.2px; sizes 15; real pictures 0 (drawings 0); ground #141414; buttons #e8220a #f4f4ef #ffffff; moving elements 6
- phone 390px: 6.9 screens tall; faces DM Sans, Bebas Neue; main line 56px; text 15.2px; sizes 12; real pictures 0 (drawings 0); ground #141414; buttons #e8220a #f4f4ef #ffffff; moving elements 6

## Screenshots
Open these and critique them as pictures, not as code:
- .taste/check/desktop-fold.jpg
- .taste/check/phone-fold.jpg
