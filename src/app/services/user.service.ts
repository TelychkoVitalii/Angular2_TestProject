import { Injectable } from '@angular/core';
import { User } from "../users/user";

@Injectable()
export class UserService {
  users: User[] = [
      new User('Steve', 'Jobs', 'https://s30.postimg.org/4l93iktv5/Steve_Jobs_Close_Up.jpg', 52,
          'Palo Alto', 'male', 'American businessman, inventor, and industrial designer. He was the co-founder, chairman, and chief executive officer (CEO) of Apple Inc.; CEO and majority shareholder of Pixar;[2] a member of The Walt Disney Company board of directors following its acquisition of Pixar and founder, chairman, and CEO of NeXT. Jobs is widely recognized as a pioneer of the microcomputer revolution of the 1970s and 1980s, along with Apple co-founder Steve Wozniak.', 'Apple' ),
      new User('Jack', 'London', 'https://s28.postimg.org/d5ro9ryz1/unnamed.jpg', 68, 'Birmingham', 'male',
          'American novelist, journalist, and social activist. A pioneer in the then-burgeoning world of commercial magazine fiction, he was one of the first fiction writers to obtain worldwide celebrity and a large fortune from his fiction alone, including science fiction.', 'BookStore'),
      new User('Julia', 'Roberts', 'https://s29.postimg.org/lc86l5i7r/julia_roberts_sags_26jan15_01.jpg', 43, 'Los Angeles', 'female',
          'American actress and producer. She became a Hollywood star after headlining the romantic comedy Pretty Woman (1990), which grossed US $464 million worldwide. She has won three Golden Globe Awards (out of eight nominations) and has been nominated for four Academy Awards for her film acting, winning the Academy Award for Best Actress for her performance in Erin Brockovich (2000).', 'Hollywood'),
      new User('Donald', 'Trump', 'https://s29.postimg.org/qi72bnytz/6360489455192162291563850737_Trump.jpg', 57, 'Washington DC', 'male',
          'American businessman, television personality, politician, and the 45th President of the United States. Born and raised in Queens, New York City, Trump received an economics degree from the Wharton School of the University of Pennsylvania in 1968. In 1971, he took charge of his family real estate and construction firm, Elizabeth Trump & Son, which was later renamed The Trump Organization. During his business career, Trump has built, renovated, and managed numerous office towers, hotels, casinos, and golf courses.', 'Trump Inc.'),
      new User('Oprah', 'Winfrey', 'https://s29.postimg.org/tbau9ixyv/oprah_winfrey_60_minutes.jpg', 52, 'New York', 'female',
          'American media proprietor, talk show host, actress, producer, and philanthropist.[1] She is best known for her talk show The Oprah Winfrey Show, which was the highest-rated television program of its kind in history and was nationally syndicated from 1986 to 2011.[5] Dubbed the "Queen of All Media",[6] she has been ranked the richest African-American,[7] the greatest black philanthropist in American history,[8][9] and is currently North America first and only multi-billionaire black person. Several assessments rank her as the most influential woman in the world.', 'Oprah Show'),
  ];

    getUsers() {
        return this.users;
    }

    getUser(id: number) {
        return this.users[id];
    }

}
