const request = require('request')
const cheerio = require('cheerio')

// The Pioneer series of beer consists of limited releases at Reformation Brewery
// Parsing through the web page for the Peachy Keen Milkshake IPA
request('https://reformationbrewery.com/beers/peachy-keen-milkshake-ipa/', (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html)

        $('.beer__top-inner').each((i,keen) => {
            const name = $(keen)
                .find('.beer__mobile-title')
                .text()
             console.log(name)   
        })

        $('.beer__content-overlay').each((i, peach) => {
            const style = $(peach)
                .find('.beer__style')
                .text()
            const ABV = $(peach)
                .find('.beer__abv')
                .text()
            const description = $(peach)
                .find('.content')
                .text()
                .replace(/\s\s+/g, '\n')

            console.log(style, ABV, description)
        })

    }
})

