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
        key: "async-messages",
        url: "https://petstore3.swagger.io/api/v3/openapi.json",
        description: "Subscribe to Profile Image async messages.",
      },
      {
        title: "Endpoints",
        key: "endpoints",
        url: "https://petstore3.swagger.io/api/v3/openapi.json",
        description: "Subscribe to Profile Image async messages.",
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
        key: "async-messages",
        url: "https://petstore3.swagger.io/api/v3/openapi.json",
        description: "Subscribe to Profile Image async messages.",
      },
      {
        title: "Endpoints",
        key: "endpoints",
        url: "https://petstore3.swagger.io/api/v3/openapi.json",
        description: "Subscribe to Profile Image async messages.",
      },
    ],
  },
  {
    title: "Users Bulk",
    key: "usb",
    icon: <FaUsers />,
    child: [
      {
        title: "Events",
        key: "async-messages",
        url: "https://petstore3.swagger.io/api/v3/openapi.json",
        description: "Subscribe to Profile Image async messages.",
      },
      {
        title: "Endpoints",
        key: "endpoints",
        url: "https://petstore3.swagger.io/api/v3/openapi.json",
        description: "Subscribe to Profile Image async messages.",
      },
    ],
  },
];
