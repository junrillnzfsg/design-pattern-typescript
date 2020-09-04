export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IPostService {
  getPost(postId: number): Promise<Post>;
  getPostsFromUserId(userId: number): Promise<Post[]>;
}
