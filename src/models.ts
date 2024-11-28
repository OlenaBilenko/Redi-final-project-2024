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
  id: z.number().optional(),
  temperature: z.coerce.number().min(35).max(42).step(0.1),
  timestamp: z.date(),
  saturation: z.coerce.number().min(0).max(100).step(1).optional(),
  symptoms: z.string().optional(),
  respiratoryRate: z.coerce.number().optional(),
  comment: z.string().optional(),
});

export type Temperature = z.infer<typeof TemperatureSchema>;