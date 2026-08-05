# Solokra Management Firm

A professional sports management website for **Solokra Management Firm**, a Ghanaian football talent agency founded and managed by **Nana Antwi Boasiako "Tymmer"**, based in Sefwi Boako, Ghana. The platform showcases the firm's roster of players, news, gallery, services, and contact information.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have one of the following installed on your machine:

- **Node.js** v18 or higher — [https://nodejs.org](https://nodejs.org)
- **npm** v9 or higher (comes with Node.js)
- Or **Bun** (alternative, faster package manager) — [https://bun.sh](https://bun.sh)

You will also need **Git** installed to clone the repository.

---

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/diceysinclair/SolokraManagement_Firm_New.git
cd SolokraManagement_Firm_New
```

**2. Install dependencies**

Using npm:
```bash
npm install
```

Or using Bun:
```bash
bun install
```

---

### Running the Development Server

Using npm:
```bash
npm run dev
```

Using Bun:
```bash
bun run dev
```

The app will be available at **http://localhost:8080** (or the port shown in your terminal).

---

### Building for Production

```bash
npm run build
```

Or:
```bash
bun run build
```

The production-ready files will be output to the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

### Running Tests

```bash
npm run test
```

---

## 🛠 Tech Stack & Requirements

| Technology | Version | Purpose |
|---|---|---|
| React | 18.x | UI framework |
| TypeScript | 5.x | Type safety |
| Vite | 5.x | Build tool & dev server |
| Tailwind CSS | 3.x | Styling |
| shadcn/ui | Latest | UI component library |
| Radix UI | Latest | Accessible component primitives |
| Framer Motion | 11.x | Animations |
| React Router DOM | 6.x | Client-side routing |
| Lucide React | Latest | Icons |
| Tanstack Query | 5.x | Data fetching |
| Sonner | Latest | Toast notifications |
| Vitest | 3.x | Unit testing |

---

## 📁 Project Structure

```
solokra-management-main/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images (players, gallery, logo, etc.)
│   ├── components/         # Reusable UI components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── Navbar.tsx      # Navigation bar with logo lightbox
│   │   ├── Footer.tsx      # Footer with contact info
│   │   ├── PlayerCard.tsx  # Player card component
│   │   └── ...
│   ├── data/               # Static data files
│   │   ├── players.ts      # Player profiles and stats
│   │   ├── announcements.ts # News and press releases
│   │   └── testimonials.ts # Player testimonials
│   ├── pages/              # Page components
│   │   ├── Index.tsx       # Home page
│   │   ├── About.tsx       # About / CEO profile
│   │   ├── Players.tsx     # Players listing with position filter
│   │   ├── PlayerProfile.tsx # Individual player detail page
│   │   ├── Gallery.tsx     # Image gallery with category filter
│   │   ├── Announcements.tsx # News & press releases
│   │   ├── Services.tsx    # Services offered
│   │   └── Contact.tsx     # Contact form and map
│   ├── App.tsx             # Root component with routing
│   └── main.tsx            # Entry point
├── index.html              # HTML entry point with favicon
├── package.json
├── tailwind.config.ts
├── vite.config.ts
└── tsconfig.json
```

---

## ⚙️ How the System Works

### Player Management
Player data is stored in `src/data/players.ts` as a TypeScript array. Each player object contains:
- Personal details (name, DOB, nationality, height, weight)
- Position, current club, and career history
- Stats (goals, assists, appearances)
- Market value and management contact
- Optional goalkeeper-specific stats (clean sheets, goals conceded)

To **add a new player**, add a new object to the `players` array and import their image from `src/assets/`.

To **remove a player**, delete their entry from the array and remove their image import.

### Players Page
The `/players` page displays all players in a grid. A filter bar at the top allows users to browse by position:
- **All** — shows every player
- **Forward** — forwards and wingers
- **Midfielder** — central, defensive, and attacking midfielders
- **Defender** — centre backs and full backs
- **Goalkeeper** — goalkeepers

Clicking a player card navigates to their full profile at `/players/:id`.

### Player Profile Page
Each player has a dedicated profile page showing:
- Hero banner with player image
- Career stats (goals, assists, appearances)
- Personal details table
- Biography and player profile text
- Career history table
- Transfer history
- Goalkeeper performance stats table (only shown for goalkeepers)
- Download CV button and Contact Agent button

### Gallery
The `/gallery` page displays all images from `src/assets/` in a uniform grid with category filter tabs:
- **All** — all images
- **Players** — player photos
- **Events** — event and activity photos (IMG-2025* and WhatsApp images)
- **Venues** — stadium/pitch photos
- **Staff** — management and branding images

Clicking any image opens a full-screen lightbox with navigation arrows to browse between images.

### Announcements
News and press releases are stored in `src/data/announcements.ts`. Each entry has a title, date, summary, and category (Transfer, Partnership, Award, Event, News).

### Contact Page
The `/contact` page includes:
- A contact form (name, email, subject, message)
- Direct contact details (email, phone, address)
- Office hours (Mon–Fri, 9AM–5PM)
- An embedded OpenStreetMap showing the office location in Sefwi Boako, Ghana

### About Page
The `/about` page showcases:
- CEO profile — Nana Antwi Boasiako "Tymmer" with photo
- Company mission and vision
- Core values
- Company milestones timeline
- Key statistics

---

## 📞 Contact

**Solokra Management Firm**
- Address: 123 Football Lane, Sefwi Boako, Ghana
- Phone: +233 59 609 3560
- Email: antwiboasiako286@gmail.com
- Management Email: solokramanagementfirm1@gmail.com
- Office Hours: Mon–Fri, 9AM–5PM

---

## 📄 License

This project is proprietary to Solokra Management Firm. All rights reserved.
