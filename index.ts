import { PORT } from "./globals";
import app from "./src/app/app";

app.listen(PORT, async () => console.log(`Server is running on port ${PORT}`));