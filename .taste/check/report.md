# Taste check: https://crazystrength.co.uk/legends-that-lift.html
Checked 2026-11-24 17:57 at 1440, 390px.

Reading: **broken**. FAIL 4 · WARN 7 · NOTE 0.

- **FAIL micro-label** (desktop, phone): Tiny letter-spaced capitals are scattered around the page.
  Seen: "Standard" · "Full Access" · "Lead Coach" · "Head Coach & Founder" · "Train" · "Learn"
  Fix: Sentence case at a readable size, placed with the content it describes.
- **FAIL tiny-text** (desktop, phone): Text below 12.5px appears in several places.
  Seen: "Morning Session" · "Standard" · "Full Access" · "Lead Coach" · "Head Coach & Founder" · "Train"
  Fix: Raise it to at least 13px, or remove it.
- **FAIL contrast** (desktop, phone): Text fails contrast against its background.
  Seen: "Monday" 4.09:1 (needs 4.5) · "Thursday" 4.09:1 (needs 4.5) · "Get Started" 1:1 (needs 4.5) · "Lead Coach" 4.09:1 (needs 4.5) · "Head Coach & Founder" 4.09:1 (needs 4.5) · "© 2026 Crazy Strength UK Limited · Unit " 3.03:1 (needs 4.5)
  Fix: Darken the text or lighten the ground: 4.5:1 for text, 3:1 for large text.
- **FAIL few-pictures** (desktop): Fewer than two real pictures on the page.
  Seen: 0 real, 0 drawings
  Fix: Add real pictures of the subject or its world (taste-pictures), or real interface fragments for software.
- **WARN default-font** (desktop, phone): The display face is one of the most overused defaults.
  Seen: Bebas Neue
  Fix: Use the dealt type pairing.
- **WARN size-count** (desktop, phone): Too many font sizes.
  Seen: 14 sizes: 12, 13, 14, 15, 16, 18, 22, 26, 35, 48, 56, 58, 115, 128 · 12 sizes: 12, 13, 14, 15, 16, 18, 22, 24, 26, 32, 48, 56
  Fix: Five sizes on a page is the ceiling: one very large, one small, little in between.
- **WARN small-text** (desktop): Running text is set below 15px.
  Seen: median running text 14.4px
  Fix: Body text at 16 to 20px in full ink.
- **WARN empty-screen** (desktop): One desktop screen is mostly empty ground.
  Seen: screen 4
  Fix: Make it a deliberate rest, or fill it with content.
- **WARN stock-buttons** (desktop): Buttons say "Get started" or "Learn more".
  Seen: Get Started
  Fix: Name the action: Book a table, Start the 14-day trial, See the menu.
- **WARN page-errors** (desktop, phone): The page throws script errors.
  Seen: SyntaxError: Unexpected identifier 're'
  Fix: Open the console and fix them.
- **WARN tap-size** (phone): Small tap targets on the phone.
  Seen: CRAZYSTRENGTH · Powerlifting · Olympic Weightlifting · Ladies That Lift · Legends That Lift · Cubs Programme
  Fix: Make links and buttons at least 44px tall outside running text.

## Measurements
- desktop 1440px: 4.6 screens tall; faces DM Sans, Bebas Neue; main line 115px; text 14.4px; sizes 14; real pictures 0 (drawings 0); ground #141414; buttons #e8220a #f4f4ef #ffffff; moving elements 6
- phone 390px: 5.7 screens tall; faces DM Sans, Bebas Neue; main line 56px; text 14.4px; sizes 12; real pictures 0 (drawings 0); ground #141414; buttons #e8220a #f4f4ef #ffffff; moving elements 6

## Screenshots
Open these and critique them as pictures, not as code:
- .taste/check/desktop-fold.jpg
- .taste/check/phone-fold.jpg
