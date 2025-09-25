// User type
export type IUser = {
  id: number;
  name: string;
  email: string;
  password?: string; // optional in frontend
  role: "USER" | "ADMIN";
  phone?: string;
  picture?: string;
  status: "ACTIVE" | "INACTIVE";
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
};

// Post type
export type IPost = {
  id: number;
  title: string;
  content: string;
  thumbnail?: string;
  isFeatured: boolean;
  tags: string[];
  views: number;
  authorId: number;
  createdAt: string;
  updatedAt: string;
  author?: IUser; // relation
};

// Combined type (User with Posts)
export type UserWithPosts = IUser & {
  posts: IPost[];
};

// Combined type (Post with Author)
export type PostWithAuthor = IPost & {
  author: IUser;
};
