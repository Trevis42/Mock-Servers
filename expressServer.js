//Express Server
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const quoteDb = [
	"Success is most often achieved by those who don't know that failure is inevitable.",
	"Things work out best for those who make the best of how things work out.",
	"Courage is grace under pressure.",
	"If you are not willing to risk the usual, you will have to settle for the ordinary.",
	"Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.",
	"If at first you don't succeed, skydiving is not for you.",
	"Sometimes you can't see yourself clearly until you see yourself through the eyes of others.",
	"All our dreams can come true if we have the courage to pursue them.",
	"It does not matter how slowly you go, so long as you do not stop.",
	"Success is walking from failure to failure with no loss of enthusiasm.",
	"Someone is sitting in the shade today because someone planted a tree a long time ago.",
	"Whenever you see a successful person, you only see the public glories, never the private sacrifices to reach them.",
	"Don't cry because it's over, smile because it happened.",
	"Eagles may soar, but weasels don't get sucked into jet engines.",
	"You only live once, but if you do it right, once is enough.",
	"Opportunities don't happen. You create them."
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send(quoteDb[Math.floor(Math.random() * quoteDb.length)]));

app.post("/", (req, res) => res.send(quoteDb[Math.floor(Math.random() * quoteDb.length)]));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
