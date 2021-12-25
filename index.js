const cheerio = require('cheerio')
const { text } = require('cheerio/lib/api/manipulation')
const request = require('request')
const fs = require('fs')
const jsonfile = require('jsonfile')
const { data } = require('cheerio/lib/api/attributes')
const writeStream = fs.createWriteStream('ReformationAllLoc.csv')

const PORT = process.env.PORT || 1600

// write headers
writeStream.write('Location, Beer Name, Style, ABV, Link \n')


// Woodstock Location
request("https://woodstock.reformationbrewery.com/", (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html)
        const location = "WOODSTOCK"

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
        
        writeStream.write(`${location}, ${name}, ${style}, ${ABV}, ${link} \n`)


        })
        //console.log('------------------')
    }
})

// Canton location
request("https://canton.reformationbrewery.com/", (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html)
        const location = "CANTON"


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
        
       // writeStream.write(`${location}, ${name}, ${style}, ${ABV}, ${link} \n`)

        })
        //console.log('------------------')
        //console.log('Scraping done...')
    }
    
})
// Smyrna Location
request("https://smyrna.reformationbrewery.com/", (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html)
        const location = "SMYRNA"


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
        
            
       writeStream.write(`${location}, ${name}, ${style}, ${ABV}, ${link} \n`)

        })
        console.log('Scraping done...')
        //console.log('------------------')

    }

})







