var os = require("os");
var url;
if (os.platform == "darwin") {
  urlVal = "mongodb://root:root01@localhost:27017";
} else {
  urlVal = "mongodb://root:root01@10.0.75.2:27017";
}

module.exports = {
  mongoURI: urlVal,
  secretOrKey: "secret"
};
