module.exports = {
    images: {
        domains: ['images.ctfassets.net'],
    },
    sassOptions: {
        includePaths: ['./src'],
        prependData: `@import "styles/main.scss";`
      }
}