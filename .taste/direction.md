# Direction sheet: The ritual in steps
Seed 132588585. Kind: local, tone: bold. Assets on hand: photos, numbers, place.
Brief: Coached strength training gym in Amesbury — from first-timer to competitive lifter, everyone coached properly from day one

## The direction
**The page performs the subject's real sequence as you scroll: dough to oven to shelf, brief to draft to launch.**

Device: Find the routine that makes the subject what it is and stage it in order. Each step is a section with its own picture and the real time, tool or rule that belongs to it.

Composition: A short hero naming the outcome. Then three to six step sections, each with a large picture of that step, the time or condition it happens under ('the oven is lit at five'), and one paragraph. Steps are shown by position, scale and words, never by 01/02/03 labels. The last step lands on the action.

Fill the space with: The real detail of each step.

Pitfalls: Numbered step badges. Generic 'Discover, Design, Deliver' steps. Icons in place of pictures.

Find the idea (fill both blanks from the subject, then run the competitor test):
> On this page, [something only this client has] becomes [the steps the page performs in order].
- What happens, in order, before the customer gets the thing?
- What time does each step happen?
- Which step do competitors skip?

## Hero
**The first step** (ritual-first-step)
Desktop: The hero shows the first moment of the ritual: a large picture of it across 8 columns with the time it happens set big beside it ('5:00, the oven is lit'). The name and the outcome sit in a top band with the action.
Phone: Name and outcome, the picture, the time line.
Avoid: Use only times and rules the brief states.

## Sections, in the order of the argument
### statement: Wide statement (statement-wide, statement)
One paragraph of 15 to 25 words at 32 to 40px across 8 to 9 columns, left-aligned, in full ink, followed by a picture or the next section. No heading above it; the h2 is visually hidden or is the first words set in the same size.
Phone: 24 to 28px, up to six lines.
Avoid: More than three lines on desktop; a coloured accent word.

### list: Each item its own block (list-blocks, alternating)
Each room, offer, service or product gets its own block: a large picture (7 columns), its name, the facts that decide the choice (size, length, what is included, price from) as plain lines, and its own action.
Phone: Picture, name, facts, button.
Avoid: A carousel hiding most of the rooms.

### process: Steps with pictures (process-steps-pictures, sequence)
Three to five steps, each a row with a picture (5 columns) and the step's heading, its time or condition and a short paragraph (6 columns). Order shown by position and the words, never by numbered labels.
Phone: Picture then text for each step.
Avoid: Badges reading 01, 02, 03; generic steps like Discover and Deliver.

### proof: One supplied quotation (proof-quote, statement)
Only when the brief supplies a real quotation with its source: the quote as a blockquote at 32 to 40px across 9 columns, the person's name and role at 16px below, a photograph of them if supplied.
Phone: At 24px.
Avoid: Invented testimonials, star ratings, made-up names. Without a real quote, use another proof section or drop the role.

### story: Years as headings (story-timeline, list)
Three to six real years from the brief as large figures (64 to 96px) down the left 3 columns, each with what happened in one or two sentences and an optional picture.
Phone: Year, sentence, picture.
Avoid: A vertical line with dots; invented years.

### visit: The street in a picture (visit-map-picture, full-bleed)
A photograph or old map of the street (found and credited if not the client's) at full width with the address and hours in a band below it and a Get directions link to a real map service.
Phone: Picture, band, button.
Avoid: An embedded map as the only content.

### footer: Name returns (footer-name, statement)
Inverted colours. The essential links and contact in two or three short columns at 16px, then the name across the full width at 14 to 20vw, then one line with the credits for found pictures and the copyright.
Phone: Links stacked, name at 24vw.
Avoid: A sitemap of 30 links.

## Type
Brand type kept. Map the brand's faces onto display and text. Step headings 40 to 72px, text 18px. Times and quantities in tabular figures.

## Colour
Brand colours kept. Map them onto ground, surface, ink, muted, accent. One field colour may darken step by step towards the end.

## Pictures
One real picture per step: the client's process photographs, or found pictures of the trade (engravings, archive photographs), credited and never claimed as the client's own.
Search ideas for real open-licence pictures (fill the brackets from your inventory, use the taste-pictures skill):
- "<street or town> historic photograph"
- "<trade> engraving"
- "<tool of the trade> close up"
- "<town> old map"

## Motion
Signature move: **The fixed picture changes**. In a split or process section, the fixed picture crossfades to the next step's picture as each text block passes the middle of the screen. Rules: Pin for four screens at most. On phones there is no pinning: each step shows its picture inline.
Every page also gets: a staggered entrance for the parts of each section (heading, then text, then picture, 60 to 90ms apart, rising 16 to 24px with opacity, once), and press, hover and focus feedback on every control. Transform and opacity only. Everything has a prefers-reduced-motion fallback that keeps the content and drops the travel.

## Live references
To look at real sites built this way, search a curated gallery for: "process storytelling website", "bakery website process photography", "scroll story steps web design". Screenshot two with `check.mjs shoot <url>` and borrow proportion and rhythm only: never their code, copy, pictures or signature effect.

## Tokens
```html
<style>
:root {
  /* brand colours: --ground --surface --ink --muted --accent --accent-ink --action --action-ink */
  /* brand faces: --font-display --font-text */
}
</style>
```
