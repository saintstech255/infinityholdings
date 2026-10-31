/**
 * INFINITY HOLDINGS — SITE DATA
 * -----------------------------------------------------------
 * This file is the single source of truth for everything that
 * should be editable without touching page markup or code:
 * industries, portfolio companies, news, and open roles.
 *
 * TO ADD A NEW SUBSIDIARY: add an object to COMPANIES below.
 * It will automatically appear on the homepage, the Our
 * Companies page, and the footer's rendered list. You still
 * need to create its dedicated /companies/<slug>.html profile
 * page (see /companies/orbit-media.html as a starting template).
 *
 * TO ADD A NEW INDUSTRY: add an object to INDUSTRIES below.
 *
 * TO PUBLISH NEWS: add an object to NEWS below (newest first).
 *
 * TO POST A ROLE: add an object to JOBS below. Leave JOBS empty
 * to automatically show "No current vacancies".
 * -----------------------------------------------------------
 */

window.SITE_DATA = {

  industries: [
    { slug:"technology", name:"Technology", short:"Building digital solutions and technologies for a connected future.", icon:"technology" },
    { slug:"logistics",  name:"Logistics",  short:"Moving goods, businesses and opportunities efficiently.", icon:"logistics" },
    { slug:"tourism",    name:"Tourism",    short:"Creating meaningful travel experiences and connecting people with extraordinary destinations.", icon:"tourism" },
    { slug:"real-estate",name:"Real Estate",short:"Developing spaces, properties and infrastructure built for long-term value.", icon:"realestate" },
    { slug:"energy",     name:"Energy",     short:"Supporting sustainable energy development and resilient infrastructure.", icon:"energy" },
    { slug:"security",   name:"Security",   short:"Protecting people, businesses, assets and opportunities.", icon:"security" },
    { slug:"media",      name:"Media",      short:"Creating stories, content and experiences that connect audiences.", icon:"media" }
  ],

  companies: [
    {
      slug:"orbit-media", name:"Orbit Media", initials:"OM",
      industry:"Media & Entertainment", industrySlug:"media",
      status:"Operating",
      short:"A media and creative company focused on storytelling, digital media, film, entertainment, and innovative content creation.",
      tagline:null
    },
    {
      slug:"infinity-technology", name:"Infinity Technology", initials:"IT",
      industry:"Technology & Digital Solutions", industrySlug:"technology",
      status:"Operating",
      short:"A technology company focused on developing digital solutions, software, emerging technologies, and innovative systems for businesses and society.",
      tagline:null
    },
    {
      slug:"infinity-safaris", name:"Infinity Safaris", initials:"IS",
      industry:"Tourism, Travel & Experiences", industrySlug:"tourism",
      status:"Operating",
      short:"A tourism and travel company focused on safari experiences, travel services, destination experiences, and connecting travelers with extraordinary African destinations.",
      tagline:"Experience Nature Without Limits"
    },
    {
      slug:"axis-logistics", name:"Axis Logistics", initials:"AL",
      industry:"Logistics & Supply Chain", industrySlug:"logistics",
      status:"Developing",
      short:"A logistics company focused on transportation, distribution, supply-chain solutions, freight movement, warehousing, and related services.",
      tagline:null
    },
    {
      slug:"meridian-properties", name:"Meridian Properties", initials:"MP",
      industry:"Real Estate & Property Development", industrySlug:"real-estate",
      status:"Developing",
      short:"A real estate company focused on property development, investment, asset management, commercial and residential projects, and infrastructure.",
      tagline:null
    },
    {
      slug:"nova-energy", name:"Nova Energy", initials:"NE",
      industry:"Energy & Infrastructure", industrySlug:"energy",
      status:"Emerging",
      short:"An energy company focused on sustainable energy solutions, renewable energy, power infrastructure, and long-term energy development.",
      tagline:null
    },
    {
      slug:"vanguard-security", name:"Vanguard Security", initials:"VS",
      industry:"Security & Protection", industrySlug:"security",
      status:"Emerging",
      short:"A security company focused on professional protection services, security solutions, risk management, and modern security technology.",
      tagline:null
    }
  ],

  news: [
    {
      slug:"infinity-holdings-launches-digital-headquarters",
      title:"Infinity Holdings launches its new digital headquarters",
      category:"Announcements",
      date:"2026-08-27",
      excerpt:"Infinity Holdings introduces a new corporate website consolidating its seven strategic sectors and growing portfolio of companies under one digital home.",
      related:["Group-wide"]
    }
  ],

  jobs: []

};
