const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Junior Penetration Tester',
                degree: 'eJPT Certification',
                detail: "Currently Studying",
                year: 'By January 1st'
            },
            {
                id: 1,
                title: 'Junior Penetration Tester',
                degree: 'eJPT Certification',
                detail: "Currently Studying",
                year: 'By January 1st'
            },
            {
                id: 2,
                title: 'Junior Penetration Tester',
                degree: 'eJPT Certification',
                detail: "Currently Studying",
                year: 'By January 1st'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'SilverGoldBull',
                role: 'Stored HTML',
                url: 'https://silvergoldbull.com',
                desc: 'Stored HTML injection on main domain.',
                year: '2025 - April'
            },
            {
                id: 2,
                title: 'VintageStory',
                role: 'Reflected XSS',
                url: 'https://vintagestory.at',
                desc: 'Reflected XSS on subdomain',
                year: '2025 - May'
            },
            {
                id: 3,
                title: 'VintageStory',
                role: 'Stored HTML/CSRF',
                url: 'https://vintagestory.at',
                desc: "Stored Html injection leading to CSRF",
                year: '2025 - June'
            },
            {
                id: 4,
                title: 'University of Nebraska',
                role: 'Reflected XSS',
                url: 'https://unl.edu',
                desc: "Reflected XSS on subdomain.",
                year: '2025 - July'
            },
            {
                id: 5,
                title: '5thdunstablescouts',
                role: 'Reflected XSS',
                url: 'https://5thdunstablescouts.co.uk',
                desc: "Reflected XSS on main domain.",
                year: '2025 - August'
            },
            {
                id: 6,
                title: 'GunMemorial',
                role: 'Reflected XSS',
                url: 'https://gunmemorial.org',
                desc: "Reflected XSS on main domain.",
                year: '2025 - August'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
