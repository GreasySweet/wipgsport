const portfolio = [
    
     {
         id: 0,
         projectName: "5thDunstableScouts HOF",
         url: "https://5thdunstablescouts.org.uk/acknowledgements.php",
         image: "images/clients/5dun.ico",
         projectDetail: "5thDunstableScouts Hall of Fame",
         technologiesUsed: [
             {
                 tech: "HOF"
             },
             
         ]
     },
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
