export interface Announcement {
  id: string;
  date: string;
  title: string;
  summary: string;
  category: "Transfer" | "Partnership" | "Award" | "Event" | "News";
}

export const announcements: Announcement[] = [
  {
    id: "1",
    date: "2025-06-01",
    title: "Roland Owusu Signs with Menalta Sports Agency",
    summary: "Solokra Management Firm is pleased to announce that Roland Owusu has officially signed with Menalta Sports Agency. The agency will represent Roland Owusu in all contract negotiations, working in close collaboration with Solokra Management Firm to advance his career.",
    category: "Transfer",
  },
  {
    id: "2",
    date: "2025-05-15",
    title: "Antwi Clifford Completes Move to Kumasi Angels",
    summary: "Solokra Management Firm is proud to confirm that Antwi Clifford has officially joined Kumasi Angels. The dynamic central midfielder joins the club after an impressive season and is set to be a key figure in the team's midfield this coming campaign.",
    category: "Transfer",
  },
  {
    id: "3",
    date: "2025-04-20",
    title: "Thomas Blay Wins 5 MVP Awards in Debut Season",
    summary: "Defender Thomas Blay has been recognised for his outstanding performances this season, winning 5 MVP awards across 14 matches — keeping a clean sheet in every game he played for Memphis FC. Solokra Management Firm congratulates Thomas on this remarkable achievement.",
    category: "Award",
  },
  {
    id: "4",
    date: "2025-03-10",
    title: "Emmanuel Adjetey Arthur Joins PAC Academy",
    summary: "Goalkeeper Emmanuel Adjetey Arthur has completed his move to PAC Academy, where he is contributing to the team's 4th-place standing in the Access Bank Division One league. Solokra Management Firm facilitated the transfer on behalf of the player.",
    category: "Transfer",
  },
  {
    id: "5",
    date: "2025-02-01",
    title: "Solokra Management Firm Expands Female Player Roster",
    summary: "Solokra Management Firm is excited to announce the signing of female athletes Francisca Kwarteng (Ashtown Ladies) and Nsobila Martha (Dreamz Ladies), marking a significant step in the firm's commitment to developing and representing Ghanaian female football talent.",
    category: "News",
  },
];
