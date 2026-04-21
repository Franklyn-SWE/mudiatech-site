# MudiaTech Website

Official repository for the MudiaTech marketing site.

Live domain: https://www.mudiatech.co.uk/

## Stack

- HTML5
- Tailwind CSS (CDN)
- Vanilla JavaScript
- Font Awesome

## Current Release (Production)

This release includes final production polish and deployment readiness updates:

- Fully refreshed MudiaTech dark/gold UI system
- Improved responsive behavior across mobile, tablet, desktop
- Optimized interaction polish (buttons, forms, focus states, hover consistency)
- Mobile navigation toggle with accessible controls
- Updated contact flow and branded thank-you page
- Consolidated social links and footer hierarchy
- Performance and accessibility baseline improvements (image loading hints, reduced-motion support, scroll offset handling)

## Project Structure

- index.html: main landing page
- style.css: global brand styles and interaction polish
- script.js: form handling, smooth scroll, nav behavior
- thank-you.html: post-submit confirmation page
- sitemap.xml: search indexing map
- robots.txt: crawler rules + sitemap reference

## Local Development

From the project root:

1. Start a local server
   - `python -m http.server 3000`
2. Open in browser
   - `http://localhost:3000/`

## Deployment Notes

- Primary hosting: Netlify
- Ensure custom domain remains mapped to https://www.mudiatech.co.uk/
- Ensure robots and sitemap reference the same production domain

## Maintainer

MudiaTech / Franklyn Oliha
