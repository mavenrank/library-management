export interface Author {
    //id?: number; // Optional because it might not be present when creating a new author
    author_id: number;
    name: string;
    bio: string;
    date_of_birth: string;
}