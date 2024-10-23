export interface Book {
    //id?: number; // Optional because it might not be present when creating a new author
    book_id: number;
    author_id: number;
    genre: string;
    isbn: string;
    title: string;
    publication_year: string;
}