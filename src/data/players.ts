import player1 from "@/assets/player-1.png";
import player2 from "@/assets/player-2.png";
import player3 from "@/assets/player-3.png";
import amoah from "@/assets/Amoah.jpg";
import francisca from "@/assets/Francisca.png";
import kelvin from "@/assets/Kelvin.jpg";
import august from "@/assets/August.png";
import mathar from "@/assets/Mathar.png";
import goalkeeper from "@/assets/goalkeeper.jpg";

export interface Transfer {
  season: string;
  from: string;
  to: string;
  fee?: string;
  type: "Permanent" | "Loan" | "Free" | "Youth";
}

export interface PersonalDetails {
  fullName: string;
  dateOfBirth: string;
  placeOfBirth: string;
  height: string;
  weight: string;
  preferredFoot: string;
  languages: string[];
  contractUntil: string;
  marketValue: string;
}

export interface CareerStats {
  club: string;
  seasons: string;
  appearances: number;
  goals: number;
  assists: number;
}

export interface GoalkeeperStats {
  period: string;
  games: number;
  cleanSheets: number;
  goalsConceded: number;
}

export interface Player {
  id: string;
  name: string;
  position: string;
  nationality: string;
  age: number;
  image: string;
  goals: number;
  assists: number;
  appearances: number;
  bio: string;
  profile: string;
  cvUrl?: string;
  personalDetails: PersonalDetails;
  transfers: Transfer[];
  careerHistory: CareerStats[];
  goalkeeperStats?: GoalkeeperStats[];
}

export const players: Player[] = [
  {
    id: "antwi-clifford",
    name: "Antwi Clifford",
    position: "Midfielder",
    nationality: "Ghanaian",
    age: 19,
    image: player1,
    goals: 4,
    assists: 9,
    appearances: 16,
    bio: "A dynamic box-to-box central midfielder with excellent passing range, strong vision, and the versatility to use both feet effectively. Antwi controls the game from the centre, linking defence with attack for Kumasi Angels.",
    profile: "Antwi Clifford is a composed and intelligent central midfielder who has quickly established himself as a key figure for Kumasi Angels since joining the team. Playing a box-to-box role, he contributes on both ends of the pitch — intercepting opposition attacks and setting the tempo going forward. His excellent passing range over short and long distances, combined with high vision and awareness, make him a reliable playmaker. Antwi's ability to use both feet adds versatility and unpredictability to his game, while his strong stamina ensures he maintains a high work rate throughout the full 90 minutes. He is exclusively represented by Solokra Management Firm. Contact: solokramanagementfirm1@gmail.com",
    cvUrl: "/cv/antwi-clifford.pdf",
    personalDetails: {
      fullName: "Antwi Clifford",
      dateOfBirth: "8th August 2005",
      placeOfBirth: "Ghana",
      height: "5.5ft (1.68m)",
      weight: "70 kg",
      preferredFoot: "Both",
      languages: ["English"],
      contractUntil: "Ongoing",
      marketValue: "50.000",
    },
    transfers: [
      { season: "2023", from: "Youth Football", to: "Kumasi Angels", type: "Youth" },
    ],
    careerHistory: [
      { club: "Kumasi Angels", seasons: "2023–Present", appearances: 16, goals: 4, assists: 9 },
    ],
  },
  {
    id: "owusu-roland",
    name: "Owusu Roland",
    position: "Midfielder",
    nationality: "Ghanaian",
    age: 17,
    image: player2,
    goals: 4,
    assists: 3,
    appearances: 10,
    bio: "A dynamic defensive midfielder known for his tactical intelligence, powerful long-range shooting, and exceptional positioning. Owusu has earned 3 MVP awards this season, proving himself a consistent force in both defensive and offensive roles.",
    profile: "Owusu Roland is a disciplined and technically precise defensive midfielder who controls game tempo through strategic positioning and defensive awareness. Having represented Nationals FC, Memphis FC, and Kofi's FC before joining Al-Rayyan Sports Club, he brings valuable experience for his age. His powerful and accurate long-range strikes, superior ball distribution under pressure, and effective driving runs through midfield channels make him stand out. With 4 goals and 3 MVP awards last season, Roland has demonstrated exceptional ability on both ends of the pitch. He aspires to represent Ghana at international level and is exclusively represented by Solokra Management Firm. Contact: solokramanagementfirm1@gmail.com",
    cvUrl: "/cv/owusu-roland.pdf",
    personalDetails: {
      fullName: "Owusu Roland",
      dateOfBirth: "22nd August 2007",
      placeOfBirth: "Ghana",
      height: "1.5m",
      weight: "57.4 kg",
      preferredFoot: "Right (also capable with left)",
      languages: ["English"],
      contractUntil: "Ongoing",
      marketValue: "N/A",
    },
    transfers: [
      { season: "2022", from: "Nationals FC", to: "Memphis FC", type: "Youth" },
      { season: "2023", from: "Memphis FC", to: "Kofi's FC", type: "Youth" },
      { season: "2024", from: "Kofi's FC", to: "Al-Rayyan Sports Club", type: "Permanent" },
    ],
    careerHistory: [
      { club: "Nationals FC", seasons: "2022", appearances: 0, goals: 0, assists: 0 },
      { club: "Memphis FC", seasons: "2022–2023", appearances: 0, goals: 0, assists: 0 },
      { club: "Kofi's FC", seasons: "2023–2024", appearances: 0, goals: 0, assists: 0 },
      { club: "Al-Rayyan Sports Club", seasons: "2024–Present", appearances: 10, goals: 4, assists: 3 },
    ],
  },
  {
    id: "thomas-blay",
    name: "Thomas Blay",
    position: "Defender",
    nationality: "Ghanaian",
    age: 20,
    image: player3,
    goals: 2,
    assists: 1,
    appearances: 14,
    bio: "A commanding defender who combines defensive reliability with occasional attacking contributions. Thomas maintained a 100% clean sheet rate across 14 matches last season, earning 5 MVP awards for his consistent top performances.",
    profile: "Thomas Blay is a versatile and dependable defender capable of playing both Center Back and Right Back with equal effectiveness. Representing Memphis FC, he has built a reputation for solid tackling, strong aerial ability, and excellent positional awareness. His leadership qualities and communication on the field make him a natural organiser at the back. Thomas contributed 2 goals and 1 assist last season — particularly effective in set-piece situations — while keeping a clean sheet in every single match he played. Previously with Real Zaragoza and Blessed Kickers FC, he brings experience beyond his years and aspires to progress to the highest level of the game. He is exclusively represented by Solokra Management Firm. Contact: solokramanagementfirm1@gmail.com",
    cvUrl: "/cv/thomas-blay.pdf",
    personalDetails: {
      fullName: "Thomas Blay",
      dateOfBirth: "28th August 2004",
      placeOfBirth: "Boako, Ghana",
      height: "N/A",
      weight: "N/A",
      preferredFoot: "Right",
      languages: ["English"],
      contractUntil: "Ongoing",
      marketValue: "$25,000",
    },
    transfers: [
      { season: "2022", from: "Blessed Kickers FC", to: "Real Zaragoza", type: "Youth" },
      { season: "2023", from: "Real Zaragoza", to: "Memphis FC", type: "Permanent" },
    ],
    careerHistory: [
      { club: "Blessed Kickers FC", seasons: "2022", appearances: 0, goals: 0, assists: 0 },
      { club: "Real Zaragoza", seasons: "2022–2023", appearances: 0, goals: 0, assists: 0 },
      { club: "Memphis FC", seasons: "2023–Present", appearances: 14, goals: 2, assists: 1 },
    ],
  },
  {
    id: "christopher-amoah",
    name: "Christopher Amoah",
    position: "Forward",
    nationality: "Ghanaian",
    age: 17,
    image: amoah,
    goals: 3,
    assists: 12,
    appearances: 20,
    bio: "A versatile and dynamic player who excels as both a right-winger and right-back. Christopher's blend of speed, precise crossing, and defensive solidity makes him a vital asset for Adams FC, where he has registered 12 assists and 3 goals as a consistent starter.",
    profile: "Christopher Amoah is a tactically adaptable player who seamlessly transitions between an attacking right-winger and a defensive right-back role. His quick acceleration and ability to maneuver in tight spaces make him a constant threat going forward, while his strong tackling and positional awareness ensure he contributes defensively too. His 12 assists this season highlight his exceptional playmaking ability — delivering precise crosses from the wing to create goal-scoring opportunities for teammates. A dependable starter for Adams FC, Christopher maintains a high work rate for the full 90 minutes and consistently performs on both ends of the pitch. He is exclusively represented by Solokra Management Firm. Contact: solokramanagementfirm1@gmail.com",
    cvUrl: "/cv/christopher-amoah.pdf",
    personalDetails: {
      fullName: "Christopher Amoah",
      dateOfBirth: "2nd September 2007",
      placeOfBirth: "Ghana",
      height: "1.6m",
      weight: "56 kg",
      preferredFoot: "Right",
      languages: ["English"],
      contractUntil: "Ongoing",
      marketValue: "$35,000",
    },
    transfers: [
      { season: "2023", from: "Youth Football", to: "Adams FC", type: "Youth" },
    ],
    careerHistory: [
      { club: "Adams FC", seasons: "2023–Present", appearances: 20, goals: 3, assists: 12 },
    ],
  },
  {
    id: "francisca-kwarteng",
    name: "Francisca Kwarteng",
    position: "Midfielder",
    nationality: "Ghanaian",
    age: 23,
    image: francisca,
    goals: 2,
    assists: 3,
    appearances: 8,
    bio: "A versatile and disciplined footballer known for strong defensive awareness, tactical intelligence, and excellent ball distribution. Francisca excels in both right-back and defensive midfielder roles, offering composure under pressure, effective tackling, and precise passing.",
    profile: "Francisca Kwarteng is a hardworking and tactically astute player currently representing Ashtown Ladies, where she contributes to both defensive full-back and midfield stability. She previously played for Soccer Angels (2020–2024), making 8 appearances, scoring 2 goals and providing 3 assists. Her football journey began at Oforikrom Ladies (2015–2017), where she gained valuable early experience in competitive football. A standout achievement came in 2022 when she was a key player in KNUST's GUSA Championship victory. Francisca holds a degree from Kwame Nkrumah University of Science and Technology (KNUST) and brings both academic discipline and athletic excellence to her game. She is exclusively represented by Solokra Management Firm. Contact: solokramanagementfirm1@gmail.com",
    cvUrl: "/cv/francisca-kwarteng.pdf",
    personalDetails: {
      fullName: "Francisca Kwarteng",
      dateOfBirth: "7th April 2002",
      placeOfBirth: "Ghana",
      height: "1.7m",
      weight: "N/A",
      preferredFoot: "Right",
      languages: ["English"],
      contractUntil: "Ongoing",
      marketValue: "$10,000",
    },
    transfers: [
      { season: "2015", from: "Oforikrom Ladies", to: "Oforikrom Ladies", type: "Youth" },
      { season: "2020", from: "Oforikrom Ladies", to: "Soccer Angels", type: "Permanent" },
      { season: "2024", from: "Soccer Angels", to: "Ashtown Ladies", type: "Permanent" },
    ],
    careerHistory: [
      { club: "Oforikrom Ladies", seasons: "2015–2017", appearances: 0, goals: 0, assists: 0 },
      { club: "Soccer Angels", seasons: "2020–2024", appearances: 8, goals: 2, assists: 3 },
      { club: "Ashtown Ladies", seasons: "2024–Present", appearances: 0, goals: 0, assists: 0 },
    ],
  },
  {
    id: "mensah-kelvin-osei",
    name: "Mensah Kelvin Osei",
    position: "Forward",
    nationality: "Ghanaian",
    age: 17,
    image: kelvin,
    goals: 18,
    assists: 22,
    appearances: 45,
    bio: "An explosive young winger who thrives on pace, dribbling, and creating chances from the flanks. With a sprint speed of 32 km/h, a 78% successful dribble rate, and 4 key passes per game on average, Kelvin is a constant threat to opposition defences.",
    profile: "Mensah Kelvin Osei is a young, fearless winger with a natural hunger to attack and create impact. Having developed through Memphis FC, Kofi's FC, and Boako Nationals FC, he now represents Samuel Inkoom Academy where he continues to refine his pace, dribbling, and decision-making against top youth competition. Across 45 career appearances he has scored 18 goals and provided 22 assists, with over 210 successful dribbles. His blistering speed, creativity, and relentless work rate make him a nightmare for defenders. Effective on both wings, he combines direct attacking play with intelligent chance creation. Under Solokra Management, he is being groomed into a professional asset for both club and national-level football. Contact: solokramanagementfirm1@gmail.com",
    cvUrl: "/cv/mensah-kelvin-osei.pdf",
    personalDetails: {
      fullName: "Mensah Kelvin Osei",
      dateOfBirth: "1st June 2008",
      placeOfBirth: "Ghana",
      height: "1.56m",
      weight: "54 kg",
      preferredFoot: "Both",
      languages: ["English"],
      contractUntil: "Ongoing",
      marketValue: "$50,000",
    },
    transfers: [
      { season: "2022", from: "Memphis FC", to: "Kofi's FC", type: "Youth" },
      { season: "2023", from: "Kofi's FC", to: "Boako Nationals FC", type: "Youth" },
      { season: "2024", from: "Boako Nationals FC", to: "Samuel Inkoom Academy", type: "Permanent" },
    ],
    careerHistory: [
      { club: "Memphis FC", seasons: "2022", appearances: 12, goals: 4, assists: 6 },
      { club: "Kofi's FC", seasons: "2022–2023", appearances: 15, goals: 6, assists: 8 },
      { club: "Boako Nationals FC", seasons: "2023–2024", appearances: 18, goals: 8, assists: 8 },
      { club: "Samuel Inkoom Academy", seasons: "2024–Present", appearances: 0, goals: 0, assists: 0 },
    ],
  },
  {
    id: "augustine-sosu",
    name: "Augustine Sosu",
    position: "Midfielder",
    nationality: "Ghanaian",
    age: 18,
    image: august,
    goals: 12,
    assists: 10,
    appearances: 38,
    bio: "A disciplined and intelligent midfielder who excels in controlling the centre of the pitch. Augustine combines strong defensive awareness, excellent game-reading ability, and calm distribution under pressure to break up attacks and transition play effectively.",
    profile: "Augustine Sosu is a reliable and tactically astute midfielder capable of playing as a defensive midfielder, central midfielder, or attacking midfielder. He developed strong defensive and positional discipline at Dansoman Wise XI FC, where he played a key role in midfield stability and ball recovery. He also gained valuable match experience at Obuasi Bafana FC (U15), competing consistently at youth level. Known for his accurate short and long-range passing, excellent interception and anticipation, clean tackling, and confident aerial ability, Augustine combines physical presence with tactical intelligence — making him an effective anchor and box-to-box contributor. A reliable team player with leadership qualities, he is exclusively represented by Solokra Management Firm. Contact: solokramanagementfirm1@gmail.com",
    cvUrl: "/cv/augustine-sosu.pdf",
    personalDetails: {
      fullName: "Augustine Sosu",
      dateOfBirth: "17th February 2007",
      placeOfBirth: "Ghana",
      height: "1.75m",
      weight: "60.1 kg",
      preferredFoot: "Right",
      languages: ["English", "Twi"],
      contractUntil: "Ongoing",
      marketValue: "$25,000",
    },
    transfers: [
      { season: "2022", from: "Obuasi Bafana FC (U15)", to: "Dansoman Wise XI FC", type: "Youth" },
    ],
    careerHistory: [
      { club: "Obuasi Bafana FC (U15)", seasons: "2021–2022", appearances: 15, goals: 5, assists: 6 },
      { club: "Dansoman Wise XI FC", seasons: "2022–Present", appearances: 23, goals: 7, assists: 4 },
    ],
  },
  {
    id: "nsobila-martha",
    name: "Nsobila Martha",
    position: "Defender",
    nationality: "Ghanaian",
    age: 21,
    image: mathar,
    goals: 37,
    assists: 22,
    appearances: 119,
    bio: "A disciplined central defender known for her defensive awareness, strong tackling, and leadership at the back. Nsobila has scored 37 goals and provided 22 assists across 119 career appearances — a remarkable record for a central defender.",
    profile: "Nsobila Martha is a commanding central defender who excels in organising the defence and providing stability to her team while contributing to attacks when needed. Having made 104 appearances for Hassport Ladies — scoring 34 goals and providing 16 assists — she established herself as one of the most impactful defenders in her league. She now represents Dreamz Ladies, where she has continued her form with 3 goals and 6 assists in 15 matches. Her excellent tackling, aerial ability, strong game reading, and accurate distribution make her a complete defender. A vocal leader and organiser at the back, Nsobila brings composure under pressure and a high work rate to every match. She holds a degree from Kwame Nkrumah University of Science and Technology (KNUST) and is exclusively represented by Solokra Management Firm. Contact: solokramanagementfirm1@gmail.com",
    cvUrl: "/cv/nsobila-martha.pdf",
    personalDetails: {
      fullName: "Nsobila Martha",
      dateOfBirth: "10th April 2004",
      placeOfBirth: "Ghana",
      height: "N/A",
      weight: "N/A",
      preferredFoot: "Right",
      languages: ["English"],
      contractUntil: "Ongoing",
      marketValue: "$10,000",
    },
    transfers: [
      { season: "2020", from: "Hassport Ladies", to: "Hassport Ladies", type: "Youth" },
      { season: "2024", from: "Hassport Ladies", to: "Dreamz Ladies", type: "Permanent" },
    ],
    careerHistory: [
      { club: "Hassport Ladies", seasons: "2020–2024", appearances: 104, goals: 34, assists: 16 },
      { club: "Dreamz Ladies", seasons: "2024–Present", appearances: 15, goals: 3, assists: 6 },
    ],
  },
  {
    id: "emmanuel-adjetey-arthur",
    name: "Emmanuel Adjetey Arthur",
    position: "Goalkeeper",
    nationality: "Ghanaian",
    age: 22,
    image: goalkeeper,
    goals: 0,
    assists: 0,
    appearances: 23,
    bio: "A commanding and passionate professional goalkeeper with a proven track record at club and international youth level. Emmanuel has contributed to a Ghana Premier League promotion, an FA Cup final appearance, and has been selected for Ghana's U-17 and U-20 national teams.",
    profile: "Emmanuel Adjetey Arthur is a dedicated goalkeeper who thrives under pressure and is driven by the relentless pursuit of excellence. With a commanding presence in the box, quick reflexes, and a keen ability to organise defences, he has been a reliable last line of defense throughout his career. He contributed to Apedwa Wolf's qualification for the Middle League before earning selection for Ghana's U-17 and U-20 national teams. At Bofoakwa Tano, he played a pivotal role in securing promotion to the Ghana Premier League and advancing to the FA Cup final. He now represents PAC Academy, where he has helped the team to a 4th-place standing in the Access Bank Division One league. Last season he kept 10 clean sheets in 18 games, conceding just 10 goals. Rooted in discipline, resilience, and a team-first mentality, Emmanuel is exclusively represented by Solokra Management Firm. Contact: solokramanagementfirm1@gmail.com",
    cvUrl: "/cv/emmanuel-adjetey-arthur.pdf",
    personalDetails: {
      fullName: "Emmanuel Adjetey Arthur",
      dateOfBirth: "18th June 2003",
      placeOfBirth: "Ghana",
      height: "6'1 (1.85m)",
      weight: "N/A",
      preferredFoot: "Right",
      languages: ["English", "Fante", "Twi"],
      contractUntil: "Ongoing",
      marketValue: "$30,000",
    },
    transfers: [
      { season: "2020", from: "Apedwa Wolf", to: "Inter Allies FC", type: "Permanent" },
      { season: "2022", from: "Inter Allies FC", to: "Bofoakwa Tano", type: "Permanent" },
      { season: "2024", from: "Bofoakwa Tano", to: "PAC Academy", type: "Permanent" },
    ],
    careerHistory: [
      { club: "Apedwa Wolf", seasons: "2019–2020", appearances: 0, goals: 0, assists: 0 },
      { club: "Inter Allies FC", seasons: "2020–2022", appearances: 0, goals: 0, assists: 0 },
      { club: "Bofoakwa Tano", seasons: "2022–2024", appearances: 0, goals: 0, assists: 0 },
      { club: "PAC Academy", seasons: "2024–Present", appearances: 23, goals: 0, assists: 0 },
    ],
    goalkeeperStats: [
      { period: "Last Season", games: 18, cleanSheets: 10, goalsConceded: 10 },
      { period: "Preseason", games: 5, cleanSheets: 3, goalsConceded: 0 },
    ],
  },
];
