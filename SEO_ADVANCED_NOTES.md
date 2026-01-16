# Part 1: Auto-Suggestion & Global Brand Identity

This note explains how we have configured the website to trigger Google's "Auto-suggestion" and global recognition features.

### 1. The "Auto-Suggestion" Logic
Google creates an "auto-suggestion" for a company name when it is 100% sure that the name belongs to a unique **Entity**.
*   **What we did:** I added `alternateName: ["Lumora", "Lumora Tech"]` to your Schema. This tells Google that if someone types "L" or "Lumora," they are logically looking for your domain.
*   **Technical Trigger:** I added the `SearchAction` schema. This prepares your site for the "Sitelinks Searchbox," which makes your company website appear globally with a direct search bar inside Google.

### 2. Global Entity Connection
To make your website display "globally" with your company name:
*   **Breadcrumb Schema:** I injected a `BreadcrumbList`. This changes your search result from a boring link to a structured path: `lumoratriad.in > Services > Web Dev`.
*   **Social Connectivity:** By linking your Instagram, LinkedIn, and Twitter in the same JSON-LD block, Google now knows all these profiles are the "SameAs" your website. This helps build the **Knowledge Graph** (the info box on the right of search results).

---

# Part 2: SEO Improvements for Development & Services

This note focuses on how the development structure and content boost your ranking for "Technology" and "Agency" services.

### 1. Semantic Development Structure
SEO is no longer just about keywords; it’s about **Hierarchy**.
*   **H1 Strategy:** We updated the Hero title to *"Technology, Design & Web Development."* This is the strongest signal to Google about your core business.
*   **H2 Keyword Clustering:** We updated the service sections to include *"Technology & Design Services."* Search engines now group your site under high-volume "Service" categories.

### 2. SEO Performance Optimization
*   **Mobile-First Design:** Google uses mobile-first indexing. We ensured your site is responsive and lightweight, which directly increases your "Search Health Score."
*   **Meta Templates:** I set up a title template `template: "%s | Lumora Triad"`. This means every page you add in the future will automatically be SEO-optimized with your brand name.

### 🚀 Future Roadmap for #1 Ranking
1.  **Content Refresh:** Every time you finish a project, add it to your "Works" page. Google loves active sites.
2.  **Backlink Quality:** Get links from local business directories in India. This tells Google you are a legitimate business at `https://www.lumoratriad.in`.
3.  **Core Web Vitals:** We used Next.js to ensure fast loading speeds. High speed = High search rank.
