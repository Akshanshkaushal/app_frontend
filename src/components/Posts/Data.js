import { postimg1, postimg2, postimg3, postimg4, postimg5, postimg6, postimg7, user1, user2, user3, user4 } from "../../assets";

const postData = [
  {
    id: 1,
    username: 'Oliver',
    userUrl: user1,
    slides: [
      {
        image: postimg4,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        image: postimg2,
        content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        image: postimg5,
        content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
  },
  {
    id: 2,
    username: 'Sophia',
    userUrl: user2,
    slides: [
      {
        image: postimg3,
        content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        image: postimg5,
        content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      ,
      {
        image: postimg7,
        content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      }
    ],
  },
  {
    id: 3,
    username: 'Harper',
    userUrl: user3,
    slides: [
      {
        image: postimg1,
        content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        image: postimg7,
        content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      }
    ],
  },
  {
    id: 4,
    username: 'Mason',
    userUrl: user4,
    slides: [
      {
        image: postimg6,
      },
      {
        image: postimg5,
        content: 'Additional content for the second slide.',
      },
    ],
  },
];

export default postData;
