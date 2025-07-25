// export const menuData = [
//   { title: "Home", path: "/" },
//   { 
//     title: "About Us", 
//     path: "/about-us", 
//     subMenu: [
//       { title: "Our Story", path: "/about-us#history" },
//       { title: "Governance", path: "/governance" },
//       { title: "Our Policies", path: "/about-us#policies" },
//     ]
//   },
//   { title: "Our Expertise", path: "/our-expertise" },
//   { title: "Our Approach", path: "/our-approach" },
//   { title: "Our Projects", path: "/our-projects" },
//   { title: "Sectors", path: "/sectors" },
//   { title: "Customer Guide", path: "/customer-guide" },
//   { title: "Careers", path: "/careers" },
//   { title: "Investors", path: "/investors" },   
//   { title: "Contact Us", path: "/contact-us" },
// ];


export const menuData = [
  { title: "Home", path: "/" },
  { 
    title: "About Us", 
    path: "/about-us",
    isMegaMenu: true, // <-- Flag for mega menu
    subMenu: [
      {
        heading: "Company",
        links: [
          { title: "Profile", path: "/about-us/profile" },
          { title: "History", path: "/about-us/history" },
          { title: "Vision & Mission", path: "/about-us/vision-mission" },
          { title: "Who We Are", path: "/about-us/who-we-are" },
          { title: "What We Do", path: "/about-us/what-we-do" },
        ]
      },
      {
        heading: "Impact",
        links: [
          { title: "Our Purpose", path: "/about-us/our-purpose" },
          { title: "Sustainability", path: "/about-us/sustainability" },
          { title: "Social Impact", path: "/about-us/social-impact" },
          { title: "Physical Impact", path: "/about-us/physical-impact" },
          { title: "Our Policies", path: "/about-us/policies" }
        ]
      },
      {
        heading: "Governance",
        links: [
          { title: "Our Governance", path: "/governance/our-governance" },
          { title: "Our Committee", path: "/governance/committee" },
          { title: "Modern Slavery", path: "/governance/modern-slavery" },
          { title: "Supervisor Board", path: "/governance/supervisor-board" },
          { title: "Auditors Department", path: "/governance/auditors" },
        ]
      }
    ]
  },
  { 
    title: "Our Expertise", 
    path: "/our-expertise",
    isMegaMenu: true, // <-- Flag for mega menu
    subMenu: [
      {
        heading: "Core Services",
        links: [
          { title: "Real Estate Solutions", external: "https://iresworld.com/" },
          { title: "Construction", path: "/our-expertise/construction" },
          { title: "Infrastructure", path: "/our-expertise/infrastructure" },
          { title: "Utilities", path: "/our-expertise/utilities" },
          { title: "Housing Maintenance", path: "/our-expertise/housing-maintenance" },
          { title: "Rail", path: "/our-expertise/rail" },
        ]
      },
      {
        heading: "Horticulture",
        links: [
          { title: "Landscape Architecture", path: "/our-expertise/landscape-design" },
          { title: "Landscape Construction", path: "/our-expertise/landscape-construction" },
          { title: "Vertical Gardens", path: "/our-expertise/vertical-gardens" },
          { title: "Corporate Green Solutions", path: "/our-expertise/corporate-green" },
          { title: "Garden Maintenance", path: "/our-expertise/garden-maintenance" },
        ]
      },
    ]
  },
  { 
    title: "Sectors", 
    path: "/sectors",
    isMegaMenu: true, // <-- Flag for mega menu
    subMenu: [
      {
        heading: "Public & Civic",
        links: [
            { title: "Education", path: "/sectors/education" },
            { title: "Health", path: "/sectors/health" },
            { title: "Highways and Bridges", path: "/sectors/highways-bridges" },
            { title: "Local Government", path: "/sectors/local-government" },
        ]
      },
      {
        heading: "Commercial",
        links: [
            { title: "Industry", path: "/sectors/industry" },
            { title: "Leisure and Hospitality", path: "/sectors/leisure-hospitality" },
            { title: "Office", path: "/sectors/office" },
            { title: "Residential", path: "/sectors/residential" },
            { title: "Retail", path: "/sectors/retail" },
        ]
      },
      {
        heading: "Infrastructure",
        links: [
            { title: "Rail and Signalling", path: "/sectors/rail-signalling" },
            { title: "Science & Technology", path: "/sectors/science-tech" },
            { title: "Telecom", path: "/sectors/telecom" },
            { title: "Water", path: "/sectors/water" }
        ]
      }
    ]
  },
  { 
    title: "Careers With Us", 
    path: "/careers",
    subMenu: [
      { links: [ // Simple dropdown doesn't need a heading
        { title: "Working Experience", path: "/careers/working-experience" },
        { title: "Apprenticeships", path: "/careers/apprenticeships" },
        { title: "Graduates", path: "/careers/graduates" },
        { title: "Rewards & Benefits", path: "/careers/rewards-benefits" }
      ]}
    ]
  },
  { title: "Contact Us", path: "/contact-us" },
];