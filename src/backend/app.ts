import express, { Request, Response } from "express";

const PORT = 5050;
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', function (req: Request, res: Response) {
      const params = req.query;
      console.log(params);
});

app.post('/', function (req: Request, res: Response) {
    const params = req.body;
    console.log('POST'+params);
});

app.listen(PORT, function () {
  console.log(`Server start: http://localhost:${PORT}`);
});

// const server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/html; charset=UTF-8' });
//   console.log(req.url);
//   if (req.url === '/') {
//     res.write(`<a href="/result?param1=1&param2=2">Get Method Link</a>`);
//     res.end(`
//     <form action="/result" method="POST">
//       <input type="text" name="title">
//       <input type="text" name="description">
//       <input type="submit">
//     </form>
//     `)
//   } else {
//     console.log(req.url);
//     console.log(req.method);
//     if(req.method === "GET") {
//       // GETのパラメータを取得
//       console.log(req.url.split("?"));
//       const queryString = req.url.split("?")[1];
//       const params = new URLSearchParams(queryString);
//       console.log(params.has('param1'));
//     } else if(req.method === "POST") {
//       // POSTのパラメータを取得
//       let data = "";
//       req.on("data", function (chunk) {
//         data += chunk;
//       });
//       req.on("end", function() {
//         const params = new URLSearchParams(data);
//         console.log(params);
//       })
//     }
//     res.end(req.url);
//   }
// });

// server.listen(5050, function() {
//     console.log(`Server start: http://localhost:${PORT}`)
// });
