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
    name: 'University of Nebraska',
    image: "images/clients/nebraska.svg",
    designation: 'Public Program',
    view: "Thanks for helping us secure University of Nebraska systems!",
    linkednURL: "https://unl.edu"
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
    name: 'AbleAmmo',
    image: "images/clients/able.svg",
    designation: 'OpenBugBounty',
    view: "Thanks again for the report",
    linkednURL: "https://ableammo.com"
  },
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
