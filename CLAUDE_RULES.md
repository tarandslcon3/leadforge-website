# CLAUDE_RULES.md — TBS Tech Services Permanent Rules

These rules apply to every conversation and every change made to this codebase.

## Rule 1 — Build Before Push
Run `npm run build` before every push. Never push broken code. Zero errors required.

## Rule 2 — No Location References
Never mention any location, city, or province anywhere on the site. Remove Brantford, Ontario, or any city reference if found.

## Rule 3 — No Pricing
Never mention any pricing anywhere. Replace with "Contact us for details" or "Get a free consultation."

## Rule 4 — No Secrets in Code
Never hardcode API keys, tokens, or secrets. Use environment variables only. Confirm .env files are in .gitignore.

## Rule 5 — Main Branch Only
Push to main branch only. Never push to master.

## Rule 6 — Sanitize Inputs
Sanitize all form inputs before processing. Use lib/sanitize.js on all API routes.

## Rule 7 — Server/Client Split
page.js files are server components. Use 'use client' only in ComponentClient.jsx files or standalone client components. Never put generateStaticParams or generateMetadata in a 'use client' file.

## Rule 8 — Three.js SSR
Import Three.js components via next/dynamic with ssr: false only. Never import Three.js in server components.

## Rule 9 — Rate Limit All APIs
Rate limit all API routes. Demo form: 5 req/IP/hr. Chat: 10 req/IP/hr.

## Rule 10 — Contact Email
Contact email is tbstechservices@gmail.com. Never use a different email.

## Rule 11 — Jotform
Contact form uses Jotform iframe: https://form.jotform.com/261737577809069

## Blog Rule A — Target Real Problems
Every blog post targets one specific problem real people search for. Never write generic content. Ask: what is a real business owner typing into Google right now?

## Blog Rule B — Plain Conversational English
Every post is written in plain conversational English. No jargon. No fluff. Write like explaining to a smart friend over coffee. If a 14-year-old cannot understand a sentence, rewrite it.

## Blog Rule C — Post Structure
Every post follows this exact structure:
1. Hook that hits the pain point directly
2. Why this problem exists
3. Step by step solution anyone can follow
4. When to DIY vs when to hire a pro
5. Real examples
6. CTA to TBS Tech Services free demo

## Blog Rule D — SEO Metadata Requirements
Every post must have:
- Meta title under 60 characters targeting a trending keyword
- Meta description under 160 characters
- H1, H2, H3 structure throughout
- Estimated read time
- Author: TBS Tech Services Team
- Featured color (used as accent on the blog card)

## Blog Rule E — AEO FAQ Section
Every post ends with a FAQ section with exactly 5 questions and answers. Write in conversational language — these get picked up by AI assistants like ChatGPT and Google AI Overviews. Questions should be what real people actually ask out loud.

## Blog Rule F — Internal Links
Every post includes an internal link to /calculator and a CTA linking to /#contact.

## Blog Rule G — Global Audience
Posts target problems globally. Anyone worldwide should find value. Never assume the reader is in Canada, USA, or any specific country unless the post is specifically about that market.
