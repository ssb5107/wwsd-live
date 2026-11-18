window.WWSD_DEMO_SCENARIOS = [
  {
    "id": "demo_calendar",
    "title": "The Calendar With No Agenda",
    "time": "9:00 AM · DEMO",
    "story": "A 45-minute meeting invite arrives with no agenda and 17 optional attendees. You have not been asked to make a decision.",
    "icon": "📆",
    "art": "URGENT SYNC?",
    "say": [
      {
        "text": "Ask the organizer what decision requires the meeting.",
        "points": 500
      },
      {
        "text": "Join and listen while multitasking.",
        "points": 250
      },
      {
        "text": "Accept and prepare a presentation.",
        "points": 0
      },
      {
        "text": "Invite the rest of the department.",
        "points": 0
      }
    ],
    "think": [
      {
        "text": "Could this have been a two-line message?",
        "points": 500
      },
      {
        "text": "Maybe the agenda will arrive eventually.",
        "points": 250
      },
      {
        "text": "This is the most exciting meeting of my week.",
        "points": 0
      },
      {
        "text": "We should turn it into a recurring series.",
        "points": 0
      }
    ],
    "real_say": "Ask what decision needs to be made.",
    "real_think": "Could this have been a two-line message?",
    "roast": "You survived the invitation. The meeting did not."
  },
  {
    "id": "demo_document",
    "title": "The Living Document",
    "time": "11:45 AM · DEMO",
    "story": "A process document is labeled final_v7_revised_REALFINAL. Three people are editing it simultaneously, and someone asks you to approve it.",
    "icon": "📁",
    "art": "FINAL_FINAL_v7",
    "say": [
      {
        "text": "Ask for one designated owner and a controlled final version.",
        "points": 500
      },
      {
        "text": "Approve the latest-looking file.",
        "points": 0
      },
      {
        "text": "Schedule a formatting review.",
        "points": 0
      },
      {
        "text": "Ask for a summary of what changed.",
        "points": 250
      }
    ],
    "think": [
      {
        "text": "The filename has more revisions than the process.",
        "points": 500
      },
      {
        "text": "Maybe a new template would help.",
        "points": 0
      },
      {
        "text": "This is a healthy sign of collaboration.",
        "points": 0
      },
      {
        "text": "I should probably check the version history.",
        "points": 250
      }
    ],
    "real_say": "Ask who owns the final version.",
    "real_think": "The filename has more revisions than the process.",
    "roast": "The document is now in witness protection."
  }
];
