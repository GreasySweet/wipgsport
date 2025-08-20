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
        clientName: 'University of Nebraska',
        clientLocation: 'Public',
        clientSource: 'unl.edu',
        clientReview: 'Thanks for helping us secure University of Nebraska systems!'
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
        clientName: 'AbleAmmo',
        clientLocation: 'OpenBugBounty',
        clientSource: 'ableammo.com',
        clientReview: 'Thanks again for the report'
    },
]
export default function handler(req, res) {
    res.status(200).json(review)
}
