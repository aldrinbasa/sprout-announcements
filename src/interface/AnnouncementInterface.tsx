export interface AnnouncementInterface {
  title: string;
  message: string;
  sentBy: string;
  sentThrough: string[];
  dateCreated: Date;
  startDate: Date;
  endDate: Date;
}

let ANNOUNCEMENTS_DATA: AnnouncementInterface[] = [
  {
    title: "[Maintenance Tomorrow]",
    message:
      "Sprout Solutions will be having a maintainance tomorrow at 10:30am to 11:30am.",
    sentBy: "Basa, Aldrin",
    sentThrough: ["web", "phone"],
    dateCreated: new Date(2022, 8, 26),
    startDate: new Date(2022, 8, 27, 10, 30),
    endDate: new Date(2022, 8, 27, 11, 30),
  },
  {
    title: "Tip of the Week",
    message: "Stay hydrated!",
    sentBy: "Basa, Aldrin Niell",
    sentThrough: ["web", "phone"],
    dateCreated: new Date(2022, 8, 26),
    startDate: new Date(2022, 8, 26, 0, 0),
    endDate: new Date(2022, 10, 30, 23, 59),
  },
  {
    title: "National Hero's Day - August 29",
    message: "August 29 (Monday), will be a non-working holiday.",
    sentBy: "Basa, Aldrin",
    sentThrough: ["web"],
    dateCreated: new Date(2022, 8, 25),
    startDate: new Date(2022, 8, 29, 0, 0),
    endDate: new Date(2022, 8, 29, 23, 59),
  },
  {
    title: "Annual Physical Examination",
    message:
      "In compliance with the handbook, all employees shall report to HR regarding their APE",
    sentBy: "Dela Cruz, Juan",
    sentThrough: ["web", "phone"],
    dateCreated: new Date(2022, 8, 26),
    startDate: new Date(2022, 8, 26, 0, 0),
    endDate: new Date(2022, 10, 30, 23, 59),
  },
  {
    title: "Mid-Autumn Festival",
    message: "We wish everyone a greeting on the annual Mid-Autumn Festival.",
    sentBy: "Dela Cruz, Juan",
    sentThrough: ["web", "phone"],
    dateCreated: new Date(2022, 8, 26),
    startDate: new Date(2022, 8, 26, 0, 0),
    endDate: new Date(2022, 10, 30, 23, 59),
  },
  {
    title: "Breakfast Menu",
    message:
      "We will be introducing the newly updated breakfast of our staff and employee.",
    sentBy: "Dela Cruz, Juan",
    sentThrough: ["phone"],
    dateCreated: new Date(2022, 8, 26),
    startDate: new Date(2022, 8, 26, 0, 0),
    endDate: new Date(2022, 10, 30, 23, 59),
  },
  {
    title: "Tip of the Week",
    message: "Eating healthy meals is very important",
    sentBy: "Basa, Aldrin Niell",
    sentThrough: ["web", "phone"],
    dateCreated: new Date(2022, 8, 25),
    startDate: new Date(2022, 8, 26, 0, 0),
    endDate: new Date(2022, 10, 30, 23, 59),
  },
  {
    title: "New employees",
    message: "Let us all welcome our newly hired employees",
    sentBy: "Basa, Aldrin Niell",
    sentThrough: ["web", "phone"],
    dateCreated: new Date(2022, 8, 25),
    startDate: new Date(2022, 8, 26, 0, 0),
    endDate: new Date(2022, 10, 30, 23, 59),
  },

  {
    title: "Tip of the Week",
    message: "Mental health awareness is important",
    sentBy: "Basa, Aldrin Niell",
    sentThrough: ["phone"],
    dateCreated: new Date(2022, 8, 24),
    startDate: new Date(2022, 8, 26, 0, 0),
    endDate: new Date(2022, 10, 30, 23, 59),
  },
  {
    title: "Tip of the Week",
    message:
      "You can have a breakdown of your salary by going through the salary management tab",
    sentBy: "Dela Cruz, Juan",
    sentThrough: ["web"],
    dateCreated: new Date(2022, 8, 24),
    startDate: new Date(2022, 8, 26, 0, 0),
    endDate: new Date(2022, 10, 30, 23, 59),
  },
  {
    title: "Cafe Relocation",
    message:
      "With the ongoing maintenance of our pantry, the cafe is now temporarily relocated at 6th floor.",
    sentBy: "Dela Cruz, Juan",
    sentThrough: ["web"],
    dateCreated: new Date(2022, 8, 23),
    startDate: new Date(2022, 8, 26, 0, 0),
    endDate: new Date(2022, 10, 30, 23, 59),
  },
  {
    title: "Tip of the Week",
    message: "Dark mode is now supported!",
    sentBy: "Basa, Aldrin Niell",
    sentThrough: ["phone"],
    dateCreated: new Date(2022, 8, 23),
    startDate: new Date(2022, 8, 26, 0, 0),
    endDate: new Date(2022, 10, 30, 23, 59),
  },
];

export default ANNOUNCEMENTS_DATA;
