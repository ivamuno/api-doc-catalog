import React from "react";
import { RiSecurePaymentFill  } from "react-icons/ri";

export const apis = [
  {
    title: "gateway",
    key: "gateway",
    icon: <RiSecurePaymentFill />,
    child: [
      {
        title: "Async messages",
        key: "async-messages",
        url: "https://petstore3.swagger.io/api/v3/openapi.json",
        description: "Subscribe to Gateway async messages.",
      },
    ],
  },
];
