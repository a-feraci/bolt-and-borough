# Business brief and decision record

## Business

Bolt & Borough Mobile Auto is a fictional scheduled mobile maintenance provider in the Baltimore area. It serves drivers who need to fit routine car care around work, family or transportation constraints and local businesses running light-duty cars and vans. Appointment fees and maintenance packages are the consumer revenue streams. Recurring shared-site maintenance contracts are the fleet revenue stream.

The core problem is uncertainty about whether a technician can come to the customer, what services can happen onsite and what a visit might cost. The demo uses seven illustrative ZIP entries and four fixed price ranges. The geography, scope, pricing and visit windows are product design choices for the fictional business.

## Focused research

| Public observation | Decision for this demo |
| --- | --- |
| YourMechanic lists year, make, model, service or symptom and contact/ZIP information in its booking overview. It describes parts and service costs before scheduling and requests a card as part of real booking. | Keep the useful service and vehicle inputs, put eligibility first, show the price beside the service and leave contact and payment out of the demo. The ordering comparison concerns the published overview, not a timed usability test. |
| Wrench has a dedicated fleet landing page with location-based maintenance and a fleet quote path. | Give fleet its own navigation and separate inquiry preview driven by fleet size and need. |
| YourMechanic publishes a separate support page about quotes, booking and mobile service. | Add self-service support that explains worksite constraints, example estimates, service scope and simulation behavior. |

Sources checked November 14, 2026. [YourMechanic booking](https://www.yourmechanic.com/request-service-online) · [YourMechanic support](https://www.yourmechanic.com/support) · [Wrench fleet](https://wrench.com/fleet/).

## Requirements

| Priority | Scope and acceptance |
| --- | --- |
| Must have for launch | Working navigation and service cards. Check ZIP format and coverage, allow covered visitors to select a service, show an example range and collect sample vehicle details and a preferred window. Let visitors review, edit and complete a simulation. Offer a separate fleet inquiry and self-service FAQ. Label fictional status and keep form inputs in the page. |
| Should have soon | Run a mobile/keyboard usability pass with people and measure completion. Add a parts and labor breakdown if testing shows price ambiguity. |
| Could have later | Model sample appointment capacity, vehicle-specific parts ranges, dispatch and optional browser-local reminders. |
| Unnecessary for now | Real contact capture, accounts, payment, maps/geolocation, live scheduling, production dispatch or a staffed support channel. |

## Technical decision

| Criterion | Plain HTML, CSS and JS | Vite with vanilla JS or React | Astro with small interactive components |
| --- | --- | --- | --- |
| Speed and cost | Fastest for one page, no dependencies or tool fees | Setup and build time, no license fee | Template and build setup, no license fee |
| Maintenance | Three first-party source files | Dependency updates and build configuration | Dependency updates, templates and build configuration |
| Performance | Direct static delivery and one deferred script | Optimized output, React would add a browser runtime | Static output with selective interactive islands |
| Hosting | Files work directly on Pages | Deploy build output with project base path | Deploy static build output with project path |
| Security | Browser-only, no accounts or data endpoint | Same hosting boundary, dependency review added | Same for a static build, dependency review added |
| Functionality | Native forms and small DOM-state flow | Supports flow and larger shared state | Good when content and layout repeat across pages |
| Scalability and learning | Shows semantic markup and DOM fundamentals, manual shared layouts | Useful for growing app state and component practice | Useful for content-heavy sites and templating practice |

Selected buildless HTML, CSS and JavaScript for one page and two independent local forms. Use Vite if front-end modules or tooling need bundling, Astro if the service catalog grows into many editorial pages, and a backend if the concept ever receives real appointments. GitHub Pages hosts this fictional showcase with simulated actions. [GitHub Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits) · [Pages publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) · [Vite deployment](https://vite.dev/guide/static-deploy.html) · [Astro deployment](https://docs.astro.build/en/guides/deploy/github/).

## Build log

November 14, 2026 · v0.1.0. Established the project brief, sketched the page and flow, then built the direct HTML prototype as the MVP. Wrote page content and form state in HTML/CSS/JS. Generated a fictional service-van image and converted it to WebP with Pillow. Initialized the GitHub repository and committed the site files through GitHub after the shell could not resolve the GitHub host. Configured branch publishing in repository settings. Browser and source check outcomes are recorded in the handoff.
