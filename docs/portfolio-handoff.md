# N0V4.PORTFOLIO // PROJECT HANDOFF

**Bolt & Borough Mobile Auto · v0.1.0 · Live MVP · November 14, 2026**  
Local service business and recurring fleet maintenance · Responsive service website and simulated booking

- [Verified live demo](https://a-feraci.github.io/bolt-and-borough/)
- [Public GitHub repository](https://github.com/a-feraci/bolt-and-borough)
- [MVP source commit](https://github.com/a-feraci/bolt-and-borough/commit/a7ab8a517fa548e0fe4c640dbb83a60024a44122)
- [First Pages deployment](https://github.com/a-feraci/bolt-and-borough/actions/runs/43620618039)

## Problem and audience

Baltimore-area drivers with limited time or transportation need to know if a mechanic can come to them, which jobs can be done onsite and what a visit might cost. Operators of small light-duty fleets need a separate path for grouped maintenance and recurring service. The fictional business would earn fees from individual visits, packages and fleet contracts.

## Process and decisions

The brief compared consumer scheduling and fleet inquiry needs. YourMechanic's booking overview informed the vehicle inputs and estimate stage. Wrench's dedicated fleet page informed the separate commercial route. The demo puts ZIP eligibility first to avoid asking ineligible visitors for vehicle details. An annotated desktop and phone wireframe defined the page order and form states. The buildless HTML prototype became the first release.

HTML, CSS and vanilla JavaScript support two small, independent flows and native form validation without a build step. Vite and Astro were considered for larger state or more reusable pages. Amber and charcoal, a large service promise and an original illustrative van photo establish the brand. CSS Grid changes the page from split-column to stacked layouts at smaller widths.

## Implemented functionality

- Four service cards with scope, sample prices and links that preselect a service.
- A seven-ZIP demo coverage lookup with validation and an outside-area recovery message.
- An appointment flow with year, make, model and preferred window, plus a review, edit, simulated completion and reset.
- A separate fleet form with a size range and maintenance goal, and a self-service FAQ.
- Clear fictional labels, native controls, status announcements and deliberate focus after review, edit, confirmation and reset.

## Build and verification evidence

The shell could not resolve GitHub for a traditional push. The repository was created in GitHub's UI, source was committed through GitHub, and Pages was enabled from `main` at the root. The public HTTPS page loaded, with the hero image and scripts working. The shell-based preview was unreachable from the browser, so interactions were tested on the public deployment.

| Check | Observed result |
| --- | --- |
| Coverage and validation | `12` failed the ZIP format constraint. `99999` showed the outside-area result. `21230` unlocked the request. |
| Price, review and edit | The oil card preselected oil and displayed $79–$109. The review showed 2019 Honda Civic, the selected window and estimate. Edit retained Civic. |
| Keyboard and reset | Enter triggered review, focus moved to the review heading, and restart cleared and focused the ZIP field. |
| Fleet and FAQ | The fleet preview reflected 6–15 vehicles and recurring maintenance. The FAQ disclosure opened. |
| Navigation and desktop layout | Internal anchors resolved to page sections. At a 1,278 px viewport, the document did not overflow horizontally. |
| Source and asset weight | Node syntax check passed. HTML, CSS, JS and WebP total 223,524 bytes on disk before HTTP compression. The hero loaded at 1,280 px intrinsic width. |

The browser viewport override did not apply. Narrow-screen layout, full keyboard and screen-reader coverage, and Lighthouse scoring remain pending. Prices, visit windows and coverage are sample values. Forms run in the page and collect no names, addresses, payment details, or contact information. There is no submission endpoint.

## Release history and visual evidence

v0.1.0 is the baseline. No before-and-after or usability measurement yet.

- [Desktop homepage screenshot](screenshots/bolt-and-borough-desktop.jpg)
- [Desktop booking, fleet and FAQ screenshot](screenshots/bolt-and-borough-booking.jpg)
- [Desktop and phone wireframes](wireframes/mvp.md)
- [Brief, research and technical decision record](project-notes.md)
- [Changelog](../CHANGELOG.md)

## Prioritized upgrades

1. **Usability and accessibility.** Verify the form at 320, 375 and 768 px, run through it with keyboard and a screen reader, and capture Lighthouse baselines. Fix any issue that blocks completion before adding features. Measure overflow, focus order and pass/fail for the same scenarios before and after.
2. **Business clarity.** Test whether users can explain what the range covers. Compare the current inline estimate with a sample parts/labor breakdown using the same task script. Retain a breakdown if it improves comprehension.
3. **Portfolio enhancement.** Add a synthetic capacity model only if visitor testing identifies ambiguity about available windows. Verify time-window rules and full-capacity recovery with fixtures.

## Portfolio copy

**Project card.** Bolt & Borough Mobile Auto is a fictional Baltimore-area mobile mechanic website. Try service coverage, see an example estimate and walk through a simulated appointment or fleet inquiry.

**Case-study summary.** This project translates two customer journeys into one responsive service website. The driver flow checks a sample ZIP before asking about the vehicle, provides an illustrative estimate and lets visitors review and revise details before completing the simulation. A separate commercial path demonstrates the information needed for a fleet conversation. The MVP uses buildless HTML, CSS and JavaScript and was deployed on GitHub Pages. Public-browser checks verified eligibility, pricing, review and edit states, keyboard activation and fleet preview.

**Skills demonstrated.** Competitor research, requirements prioritization, wireframing, semantic HTML, responsive CSS Grid, DOM state and validation, focus management, asset optimization, GitHub Pages publishing, browser QA and decision documentation.

**Resume bullet suggestions.** Use the bullets that reflect work you personally review, test, or extend.

- Designed and shipped a fictional mobile mechanic website with distinct consumer booking and commercial fleet inquiry flows.
- Implemented a ZIP eligibility gate, example pricing and an editable request review using semantic HTML, responsive CSS and browser-native JavaScript.
- Documented research, wireframes, deployment and browser verification in a public GitHub case study.
