import {z} from "zod";
// export type Temperature = {
//     id: number;
//     timestamp: string;
//     temperature: number;
//     saturation?: number;
//     symptoms?: string;
//     respiratoryRate?: number;
//     comment?: string;
//   };

export const TemperatureSchema = z.object({
  id: z.number(),
  temperature: z.number().min(35).max(42).step(0.1),
  timestamp: z.string(),
  saturation: z.number().min(0).max(100).step(1).optional(),
  symptoms: z.string().optional(),
  respiratoryRate: z.number().min(20).max(200).step(1).optional(),
  comment: z.string().optional(),
});

export type Temperature = z.infer<typeof TemperatureSchema>;