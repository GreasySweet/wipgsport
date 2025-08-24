const review = [
    {
        id: 0,
        clientName: '5thDunstableScouts',
        clientLocation: 'OpenBugBounty',
        clientSource: '5thdunstablescouts.org.uk',
        clientReview: 'Excellent report. Vulnerability understood and fixed.'
    },
    {
        id: 2,
        clientName: '[REDACTED]',
        clientLocation: 'Public',
        clientSource: '[REDACTED]',
        clientReview: 'Thanks for helping us secure [REDACTED] systems!'
    },
    {
        id: 3,
        clientName: 'GunMemorial',
        clientLocation: 'OpenBugBounty',
        clientSource: 'gunmemorial.org',
        clientReview: "Thank you for reporting the XSS vulnerability"
    },
    {
        id: 4,
        clientName: '[REDACTED]',
        clientLocation: 'Public',
        clientSource: '[REDACTED]',
        clientReview: 'Thank you for your detailed report regarding a reflected cross-site scripting (XSS) vulnerability affecting several subdomains'
    },
    {
        id: 5,
        clientName: '[REDACTED]',
        clientLocation: 'Public',
        clientSource: '[REDACTED]',
        clientReview: 'Many thanks for noting the vulnerability in our website. Your initial report was enough for me to find and fix this issue, which is great.'
    },
]
export default function handler(req, res) {
    res.status(200).json(review)
}
