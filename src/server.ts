import express, { Request, Response, NextFunction } from "express";
import { router } from "./routes";
import "express-async-errors";
import cors from "cors";

const port = process.env.PORT || 5001;

const app = express();
app.use(express.json());
app.use(cors());

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message,
    });
  }
  return res.status(500).json({
    status: "error",
    message: "Internal server error.",
  });
});

app.listen(port, () => console.log(`Servidor Online porta: ${port}!!`));
