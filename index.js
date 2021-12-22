const cheerio = require('cheerio')
const { text } = require('cheerio/lib/api/manipulation')
const request = require('request')
const fs = require('fs')
const writeStream = fs.createWriteStream('beer.csv')

// write headers
//writeStream.write('Beer Name, Style, ABV, Link \n')

// Woodstock Location
request("https://woodstock.reformationbrewery.com/", (error, response, html) => {
    console.log('---WOODSTOCK---')
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html)

        $('.col--flex').each((i, brad) => {
            const name = $(brad)
                .find('.beer-card__name, h3')
                .text()
                .replace(/\s\s+/g, '')
            const style = $(brad)
                .find('.beer-card__style')
                .text()
                .replace(/\s\s+/g,'')
            const ABV = $(brad)
                .find('.beer-card__abv')
                .text()
                .replace(/\s\s+/g,'')
            const link = $(brad)
                .find('.beer-card')
                .attr('href')
        console.log(name,'\n', style, '\n', ABV, '\n', link, '\n')
        
            
        //writeStream.write(`${name}, ${style}, ${ABV}, ${link} \n`)

        })
        console.log('------------------')

    }
})

// Canton location
request("https://canton.reformationbrewery.com/", (error, response, html) => {
    console.log('---CANTON---')
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html)

        $('.col--flex').each((i, brad) => {
            const name = $(brad)
                .find('.beer-card__name, h3')
                .text()
                .replace(/\s\s+/g, '')
            const style = $(brad)
                .find('.beer-card__style')
                .text()
                .replace(/\s\s+/g,'')
            const ABV = $(brad)
                .find('.beer-card__abv')
                .text()
                .replace(/\s\s+/g,'')
            const link = $(brad)
                .find('.beer-card')
                .attr('href')
        console.log(name,'\n', style, '\n', ABV, '\n', link, '\n')
        
            
        //writeStream.write(`${name}, ${style}, ${ABV}, ${link} \n`)

        })
        console.log('------------------')

        //console.log('Scraping done...')
    }
})

request("https://smyrna.reformationbrewery.com/", (error, response, html) => {
    console.log('---SMYRNA---')
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html)

        $('.col--flex').each((i, brad) => {
            const name = $(brad)
                .find('.beer-card__name, h3')
                .text()
                .replace(/\s\s+/g, '')
            const style = $(brad)
                .find('.beer-card__style')
                .text()
                .replace(/\s\s+/g,'')
            const ABV = $(brad)
                .find('.beer-card__abv')
                .text()
                .replace(/\s\s+/g,'')
            const link = $(brad)
                .find('.beer-card')
                .attr('href')
        //console.log(name,'\n', style, '\n', ABV, '\n', link, '\n')
        
            
           //writeStream.write(`${name}, ${style}, ${ABV}, ${link} \n`)

        })
        //console.log('Scraping done...')
        console.log('------------------')

    }

})

