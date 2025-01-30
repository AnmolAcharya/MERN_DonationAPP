import app from "./index.js";

// app.listen(4000, () => {
//   console.log(`Server Listening At Port ${4000}`);
// });


app.listen(process.env.PORT, () => {
  console.log(`Server Listening At Port ${process.env.PORT}`); //when 4000 came it means it is connected 
});
