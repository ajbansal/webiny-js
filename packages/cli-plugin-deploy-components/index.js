module.exports = options => [require("./deploy")(options), require("./remove"), require("./aws")];
