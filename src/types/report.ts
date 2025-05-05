export type ReportStatus = "High" | "Mid" | "Low";

export interface Report {
  id: string;
  message: string;
  status: ReportStatus;
  date: string;
  type: string;
}
