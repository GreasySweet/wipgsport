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
                title: '[REDACTED]',
                role: 'Stored HTML',
                url: '[REDACTED]',
                desc: 'Stored HTML injection on main domain.',
                year: '2025 - April'
            },
            {
                id: 2,
                title: '[REDACTED]',
                role: 'Reflected XSS',
                url: '[REDACTED]',
                desc: 'Reflected XSS on subdomain',
                year: '2025 - May'
            },
            {
                id: 3,
                title: '[REDACTED]',
                role: 'Stored HTML/CSRF',
                url: '[REDACTED]',
                desc: "Stored Html injection leading to CSRF",
                year: '2025 - June'
            },
            {
                id: 4,
                title: '[REDACTED]',
                role: 'Reflected XSS',
                url: '[REDACTED]',
                desc: "Reflected XSS on multiple subdomains.",
                year: '2025 - July'
            },
            {
                id: 5,
                title: 'GunMemorial',
                role: 'Reflected XSS',
                url: 'https://gunmemorial.org',
                desc: "Reflected XSS on main domain.",
                year: '2025 - July'
            },
            {
                id: 6,
                title: '5thdunstablescouts',
                role: 'Reflected XSS',
                url: 'https://5thdunstablescouts.co.uk',
                desc: "Reflected XSS on main domain.",
                year: '2025 - August'
            },
            {
                id: 7,
                title: 'AbleAmmo',
                role: 'Reflected XSS',
                url: 'https://ableammo.com',
                desc: "Reflected XSS on main domain.",
                year: '2025 - August'
            },
            {
                id: 8,
                title: 'Tourenwelt',
                role: 'Reflected XSS',
                url: 'https://tourenwelt.info',
                desc: "Reflected XSS on main domain.",
                year: '2025 - August'
            },
            {
                id: 9,
                title: 'HipKraft',
                role: 'Reflected XSS',
                url: 'https://hipkraft.com',
                desc: "Reflected XSS on main domain.",
                year: '2025 - August'
            },
            {
                id: 10,
                title: 'Stollen-Online',
                role: 'Reflected XSS',
                url: 'https://stollen-online.de',
                desc: "Reflected XSS on main domain.",
                year: '2025 - August'
            },
            {
                id: 11,
                title: 'BrotStore',
                role: 'Reflected XSS',
                url: 'https://brotstore.com',
                desc: "Reflected XSS on main domain.",
                year: '2025 - August'
            },
            {
                id: 12,
                title: 'Playbacks123',
                role: 'Reflected XSS',
                url: 'https://playbacks123.de',
                desc: "Reflected XSS on main domain.",
                year: '2025 - August'
            },
            {
                id: 13,
                title: 'HipKraft',
                role: 'Reflected XSS',
                url: 'https://hipkraft.com',
                desc: "Reflected XSS on main domain.",
                year: '2025 - August'
            },
            {
                id: 14,
                title: 'NovelGames',
                role: 'Reflected XSS',
                url: 'https://license.novelgames.com',
                desc: "Reflected XSS on subdomain.",
                year: '2025 - August'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
