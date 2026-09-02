# howell-holdings — Rewrite Draft (Wave 2)

This folder corresponds to a complete institutional-voice rewrite of `index.html` produced under HLG-WT-2026-002 v1.1 (Web Voice & Editorial Standards Memorandum).

## Deliverables

The rewritten files are staged at `/mnt/user-data/outputs/`:

- `howell-holdings_index_REWRITE_DRAFT.html` — full rewritten file (drop-in replacement for `index.html`)
- `howell-holdings_REWRITE_DIFF.patch` — unified diff showing every change

## What changed

All structural HTML, CSS, JavaScript, navigation, and section IDs are preserved. Only the **visible copy** has been rewritten in institutional voice.

Specifically:

- **Page metadata** (`<title>`, `meta description`, `og:title`, `og:description`) softened to neutral institutional descriptions
- **Hero copy** rewritten (was "spanning 150 years" promotional framing)
- **About section** rewritten — removed "sophisticated Delaware statutory trust" promotional adjectives, removed "highest standards of corporate governance and regulatory compliance" effusive framing, rewrote bloodline-only / 150-year language in plain institutional tone
- **Section title** "Corporate Trustee Excellence" → "The Corporate Trustee"
- **Purpose cards** all eight rewritten (Corporate Trustee Services, Asset Management, Strategic Oversight, Estate Planning, Charitable Giving, Business Development, Tax Optimization, General Business)
- **Strategic Oversight card** — removed Tier 3 / Tier 4 / Tier 5 language and "Nevada Sub-Holding cluster" reference
- **Five-tier structure card** — removed internal document reference "Trust Declaration v12 Amendment No. 2"; rewrote framing
- **Operating Divisions card** — corrected count (was 5, now lists six operating businesses) and corrected the framing (foundations are independent public charities, not a "division")
- **Sole Member section** rewritten in plain institutional tone
- **Footer** — formation-date and registered-agent line removed; long promotional tagline replaced with "Corporate Trustee of The Howell Legacy Group"; copyright updated to 2025–2026

## What did NOT change

- All CSS, fonts, JavaScript
- All section IDs (`#about`, `#purpose`, `#structure`, `#ownership`, `#contact`)
- All structural HTML scaffolding
- Navigation contract preserved

## Rollout

1. Review the rewritten file alongside the current live file using the diff
2. Confirm institutional-voice copy is acceptable
3. Replace `howell-holdings/index.html` with the rewritten version
4. Test rendering across desktop and mobile
5. Deploy through normal Netlify pipeline

— Strategic Planning Office
