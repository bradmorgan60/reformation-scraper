const request = require('request')
const cheerio = require('cheerio')

request('https://woodstock.reformationbrewery.com/', (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html)

        $('.col-medium-order-2').each((i, event) => {
            const name = $(event)
                .find('.heading-04')
                .text()
            const description = $(event)
                .find('.big-event-card__content')
                .text()
            const link = $(event).find('.col-medium-order-1').attr('href')
            console.log(name, description)
        })

    }
})

request('', (error, response, html) => {
    if(!error && response.statusCode == 200)
    const $ = cheerio.load(html)

    
})