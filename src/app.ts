import express, { Application } from "express";
// import carValueRoutes from "./routes/carValueRoutes";
// import riskRatingRoutes2 from "./routes/riskRatingRoutes2";
// import riskRoutes from "./routes/riskRoutes";
// import quoteRoutes from "./routes/quoteRoutes";
// import carRecognitionRoutes from "./routes/carRecognitionRoutes";
import carFinderRoute from "./routes/carFinderRoute";
import carColourSearchRoute from "./routes/carColourSearchRoute";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app: Application = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.json());

// app.use("/api/carvalue", carValueRoutes);
// app.use("/api/riskrating2", riskRatingRoutes2);
// app.use("/api/riskrating", riskRoutes);
// app.use("/api/premiumquote", quoteRoutes);
app.use("/api/upload", carFinderRoute);
app.use("/api/search/colour", carColourSearchRoute);

const port: number = Number(process.env.PORT) || 8000;
app.listen(port, () => {
  console.log(`Server started and listening on port ${port}`);
});


















// ------Single File Version------

// import express, { Application, Request, Response } from 'express';
// import bodyParser from 'body-parser';
// import axios from 'axios';
// import cors from 'cors';
// import multer from 'multer';
// import dotenv from "dotenv";

// dotenv.config();
// const app: Application = express();

// app.use(cors({ origin: 'http://localhost:3000' }));
// app.use(bodyParser.json());

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// interface Prediction {
//   tagName: string;
// }

// app.post('/api/upload', upload.single('image'), async (req: Request, res: Response) => {
//   if (!req.file) {
//     return res.status(400).json({ message: 'No file uploaded.' });
//   }

//   const image = req.file.buffer;
//   const predictionEndpoint = process.env.PREDICTION_ENDPOINT ?? '';

//   try {
//     const predictionResponse = await axios.post(
//       predictionEndpoint,
//       image,
//       {
//         headers: {
//           'Prediction-Key': process.env.PREDICTION_KEY,
//           'Content-Type': 'application/octet-stream',
//         },
//       }
//     );

//     const predictions: Prediction[] = predictionResponse.data.predictions;
//     if (predictions.length > 0) {
//       const predictedType: string = predictions[0].tagName.toLowerCase();
//       const filteredCarsByType: Car[] = cars.filter(
//         (car: Car) => car.type.toLowerCase() === predictedType
//       );

//       return res.json({ predictedType, filteredCarsByType });
//     } else {
//       return res.status(404).json({ message: 'No predictions found.' });
//     }
//   } catch (error) {
//     console.error('Error making prediction:', error);
//     return res.status(500).json({ message: 'Server error.' });
//   }
// });

// interface Car {
//   type: string;
// }

// const cars: Car[] = [
//   { type: 'sedan'},
//   { type: 'suv'},
//   { type: 'hatchback'},
//   { type: 'ute'},
//   { type: 'van'},
// ];

// const PORT: any = process.env.PORT || 8000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
