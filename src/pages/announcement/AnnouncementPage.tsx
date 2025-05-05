import React from 'react';
import './AnnouncementPage.scss';

const AnnouncementPage: React.FC = () => {
  return (
    <div className="announcement-page">
      <div className="headerWithButton">
        <h1>Announcement</h1>
        <div className="addAnnouncementBox">
          <button className="actionButton">Add</button>
          <button className="actionButton">Delete</button>
          <button className="actionButton">Edit</button>
          <button className="actionButton">Schedule</button>
        </div>
      </div>
      {/* Placeholder for announcements content */}
      <div className="announcementGrid">
        <p>This is an important announcement for all users.</p>
      </div>
    </div>
  );
};

export default AnnouncementPage;
