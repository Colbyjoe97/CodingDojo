USE books;
SELECT * FROM books;
INSERT INTO books (title, author, created_at, updated_at) VALUES ('Algorithm Challenges', 'Martin Puryear', NOW(), NOW());
DELETE FROM books WHERE id = 35;
UPDATE books SET author = 'Dan Brown' WHERE id = 34;