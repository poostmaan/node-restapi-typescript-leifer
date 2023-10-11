import app from "./app";
import "dotenv/config";
const PORT = process.env.PORT || 3001;

app
  .listen(PORT, () => {
    console.log(`running on port ${PORT}`);
  })
  .on('error', (e: any) => console.log(e))
