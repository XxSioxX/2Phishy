import React from "react";
import "./reportPage.scss";
import { Report } from "../../types/report";

interface ReportPageProps {
  reports: Report[];
}

const ReportPage: React.FC<ReportPageProps> = ({ reports }) => {
  return (
    <div className="reportPage">
      <div className="headerWithButton">
        <h1>Reports</h1>
        <button className="clearButton">Clear</button>
      </div>
      <div className="reportGrid">
        {reports.map((report) => (
          <div key={report.id} className="reportCard">
            <div className="reportId">ID: {report.id}</div>
            <div className="reportMessage">{report.message}</div>
            <div className={`reportStatus ${report.status.toLowerCase()}`}>
              Status: {report.status}
            </div>
            <div className="reportDate">Date: {report.date}</div>
            <div className="reportType">Type: {report.type}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportPage;
