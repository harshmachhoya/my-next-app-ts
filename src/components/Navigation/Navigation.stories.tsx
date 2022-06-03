import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Navigation } from "./Navigation";

export default {
  title: "Component/Navigation",
  component: Navigation,
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => (
  <Navigation {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  navigation: [
    {
      id: 6,
      title: "Home",

      path: "/",
      items: [],
    },
    {
      id: 5,
      title: "Blog",

      path: "/blog",
      items: [],
    },
    {
      id: 7,
      title: "About",

      path: "/about",
      items: [],
    },
    {
      id: 8,
      title: "Contact Us",

      path: "/contact",
      items: [],
    },
    {
      id: 9,
      title: "Sport",

      path: "/sport",
      items: [
        {
          id: 10,
          title: "Svenska Travligan (STL)",

          path: "/sport/stl",
          items: [
            {
              id: 12,
              title: "Om Svenska Travligan",
              items: [],
              path: "https://www.travsport.se/tavling/svenska-travligan-stl/om-svenska-travligan/",
            },
            {
              id: 13,
              title: "Poängställning",

              path: "/sport/stl/home",
              items: [],
            },
            {
              id: 23,
              title: "Grupplopp",
              items: [],
              path: "https://www.travsport.se/tavling/svenska-travligan-stl/om-svenska-travligan/",
            },
          ],
        },
        {
          id: 11,
          title: "Tävlingar",

          path: "/sport/null",
          items: [
            {
              id: 14,
              title: "Startanmälan",

              path: "/sport/null/null",
              items: [],
            },
            {
              id: 15,
              title: "Kvalificerings- och premielopp",

              path: "/sport/null/null",
              items: [],
            },
            {
              id: 19,
              title: "Premiechansen",
              items: [],
              path: "https://www.travsport.se/tavling/tavlingar/premiechansen/",
            },
          ],
        },
        {
          id: 24,
          title: "Insatslopp",

          path: "/sport/Insatslopp",
          items: [
            {
              id: 25,
              title: "Om insatslopp",
              items: [],
              path: "https://www.travsport.se/tavling/insatslopp/om-insatslopp/",
            },
            {
              id: 26,
              title: "Test Content Type",

              path: "/sport/Insatslopp/ct",
              items: [],
            },
          ],
        },
      ],
    },
  ],
};
