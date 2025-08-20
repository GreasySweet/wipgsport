const expertise = [
    {
        id: 0,
        title: 'Recon',
        desc: 'Use custom automated recon tools (if allowed) to gather as many in-scope endpoints as possible.',
    },
    {
        id: 1,
        title: 'Hands on Testing',
        desc: "Getting my hands dirty. Exploring the application and noting interesting functiionality.",
    },
    {
        id: 2,
        title: 'Report Building',
        desc: 'Use chatgpt to write the report because im kinda dumb.',
    },

]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
