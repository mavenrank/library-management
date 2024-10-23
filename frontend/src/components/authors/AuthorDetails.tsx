import React, { useEffect, useState } from 'react';
import { getAuthorById } from '../../services/api/authors';
import { Author } from '../../types/Author'

interface AuthorDetailsProps {
    authorId: number;
}

const AuthorDetails: React.FC<AuthorDetailsProps> = ({ authorId }) => {
    const [author, setAuthor] = useState<Author | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAuthor = async () => {
            try {
                const data = await getAuthorById(authorId);
                setAuthor(data);
            } catch (error) {
                setError('Error fetching author details');
                console.error(error);
            }
        };

        fetchAuthor();
    }, [authorId]);

    if (error) {
        return <div>{error}</div>;
    }

    if (!author) {
        return <div>Loading...</div>;
    }

    return (
        <div className="author-details">
            <h2>{author.name}</h2>
            <p>{author.bio}</p>
            <p>Date of Birth: {author.date_of_birth}</p>
        </div>
    );
};

export default AuthorDetails;