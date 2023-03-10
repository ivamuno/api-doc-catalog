import React from "react";
import { AiFillPicture, AiFillAlert  } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";

export const apis = [
  {
    title: "Emergency Call",
    key: "emc",
    icon: <AiFillAlert />,
    child: [
      {
        title: "Events",
        key: "events",
        url: "https://users.pdx.649265684449.aircall-sandbox.com/assets/docs/emc/asyncapi.yml",
        description: "Subscribe to Emergency Call async messages.",
      },
      {
        title: "Endpoints",
        key: "endpoints",
        url: "https://users.pdx.649265684449.aircall-sandbox.com/assets/docs/emc/swagger.yml",
        description: "Endpoints for Emergency Call.",
      },
    ],
  },
  {
    title: "Profile Image",
    key: "pri",
    icon: <AiFillPicture />,
    child: [
      {
        title: "Events",
        key: "events",
        url: "https://users.pdx.649265684449.aircall-sandbox.com/assets/docs/pri/asyncapi.yml",
        description: "Subscribe to Profile Image async messages.",
      },
      {
        title: "Endpoints",
        key: "endpoints",
        url: "https://users.pdx.649265684449.aircall-sandbox.com/assets/docs/pri/swagger.yml",
        description: "Endpoints for Profile Image.",
      },
    ],
  },
  {
    title: "Users Bulk",
    key: "usb",
    icon: <FaUsers />,
    child: [
      {
        title: "Endpoints",
        key: "endpoints",
        url: "https://users.pdx.649265684449.aircall-sandbox.com/assets/docs/usb/swagger.yml",
        description: "Endpoints for Users Bulk.",
      },
    ],
  },
];
