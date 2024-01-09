import { postimg2, postimg3, postimg4 } from "../../assets";

const postData = [
  {
    id: 1,
    username: 'User1',
    slides: [
      {
        image: postimg4,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        image: postimg3,
        content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
  },
  {
    id: 2,
    username: 'User2',
    slides: [
      {
        image: postimg2,
        content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
  },
  {
    id: 3,
    username: 'User3',
    slides: [
      {
        image: postimg3,
        content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
  },
  {
    id: 4,
    username: 'User4',
    slides: [
      {
        image: postimg2,
      },
      {
        image: postimg3,
        content: 'Additional content for the second slide.',
      },
    ],
  },
];

export default postData;
