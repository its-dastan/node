const ronin 		= require( 'ronin-server' )
const database  = require( 'ronin-database' )
const mocks 		= require( 'ronin-mocks' )

async function main() {

    try {
    await database.connect( process.env.CONNECTIONSTRING )
    
    const server = ronin.server({
            port: process.env.SERVER_PORT
        })

        server.use( '/foo', (req, res) => {
            return res.json({ "gon": "jagu" })
          })
        server.use( '/', mocks.server( server.Router()) )

    const result = await server.start()
        console.info( result )
    
    } catch( error ) {
        return error
    }
}
// dckr_pat_e7ZEK_6V9FWXz6SjVkJiQGBRoeo

main()