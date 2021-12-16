const cheerio = require('cheerio')
const { text } = require('cheerio/lib/api/manipulation')
const request = require('request')
const fs = require('fs')
const writeStream = fs.createWriteStream('beer.csv')

// write headers
writeStream.write('Beer Name, Style, ABV, Link \n')

request("https://woodstock.reformationbrewery.com/", (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html)

        $('.col--flex').each((i, brad) => {
            const name = $(brad)
                .find('.beer-card__name')
                .text()
                .replace(/\s\s+/g,'')
            const style = $(brad)
                .find('.beer-card__style')
                .text()
            const ABV = $(brad)
                .find('.beer-card__abv')
                .text()
            const link = $(brad)
                .find('a')
                .attr('href')

        
       console.log(name, style, ABV, link)
            
        //writeStream.write(`${name}, ${style}, ${ABV}, ${link} \n`)

        })
        //console.log('Scraping done...')
    }
})