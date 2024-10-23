export interface User {
    //id?: number; // Optional because it might not be present when creating a new author
    user_id: number;
    name: string;
    email: string;
    membership_date: string;
}