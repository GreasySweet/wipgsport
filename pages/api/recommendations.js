// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: '5thDunstableScouts',
    image: "images/clients/5dun.ico",
    designation: 'OpenBugBounty',
    view: "Excellent report. Vulnerability understood and fixed.",
    linkednURL: "https://5thdunstablescouts.org.uk"
  },
  {
    id: 1,
    name: '[REDACTED]',
    image: "images/clients/me2.jpg",
    designation: 'Public Program',
    view: "Thanks for helping us secure [REDACTED] systems!",
    linkednURL: "#"
  },
  {
    id: 2,
    name: 'GunMemorial',
    image: "images/clients/gun.png",
    designation: 'OpenBugBounty',
    view: "Thank you for reporting the XSS vulnerability",
    linkednURL: "https://gunmemorial.org"
  },
  {
    id: 3,
    name: '[REDACTED]',
    image: "images/clients/me2.jpg",
    designation: 'Public Program',
    view: "Thank you for your detailed report regarding a reflected cross-site scripting (XSS) vulnerability affecting several subdomains",
    linkednURL: "#"
  },
  {
    id: 4,
    name: '[REDACTED]',
    image: "images/clients/me2.jpg",
    designation: 'Public Program',
    view: "Many thanks for noting the vulnerability in our website. Your initial report was enough for me to find and fix this issue, which is great.",
    linkednURL: "#"
  },
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
