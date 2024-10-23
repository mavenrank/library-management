Author

INSERT INTO authors (name, bio, date_of_birth) 
VALUES 
('J.K. Rowling', 'J.K. Rowling is a British author, best known for writing the Harry Potter fantasy series.', '1965-07-31'), 
('George Orwell', 'George Orwell was an English novelist, essayist, journalist and critic, known for his works Animal Farm and 1984.', '1903-06-25'), 
('Mark Twain', 'Mark Twain was an American writer, humorist, entrepreneur, publisher, and lecturer.', '1835-11-30'), 
('Jane Austen', 'Jane Austen was an English novelist known primarily for her six major novels, including Pride and Prejudice.', '1775-12-16'), 
('Harper Lee', 'Harper Lee was an American novelist best known for her 1960 novel To Kill a Mockingbird.', '1926-04-28');

Books

INSERT INTO books (title, genre, isbn, publication_year, author_id) VALUES
('Harry Potter and the Sorcerer''s Stone', 'Fantasy', '978-0439708180', 1997, 1),
('1984', 'Dystopian', '978-0451524935', 1949, 2),
('Animal Farm', 'Political Satire', '978-0451526342', 1945, 2),
('Adventures of Huckleberry Finn', 'Adventure', '978-0486280615', 1884, 3),
('Pride and Prejudice', 'Romance', '978-1503290563', 1813, 4),
('To Kill a Mockingbird', 'Southern Gothic', '978-0061120084', 1960, 5);

Users

INSERT INTO users (name, email, membership_date) VALUES
('John Doe', 'john.doe@example.com', '2020-01-15'),
('Jane Smith', 'jane.smith@example.com', '2019-03-22'),
('Alice Johnson', 'alice.johnson@example.com', '2021-07-19');

INSERT INTO library ()