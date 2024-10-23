import React, { useState, useEffect } from 'react';
import { getAuthorById, updateAuthor } from '../../services/api/authors';
import { Author } from '../../types/Author'

interface UpdateAuthorProps {
    authorId: number;
}

const UpdateAuthor: React.FC<UpdateAuthorProps> = ({ authorId }) => {
    const [formData, setFormData] = useState<Partial<Author>>({
        name: '',
        bio: '',
        date_of_birth: '',
    });
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchAuthor = async () => {
            try {
                const author = await getAuthorById(authorId);
                setFormData(author);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchAuthor();
    }, [authorId]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await updateAuthor(authorId, formData);
            alert('Author updated successfully');
        } catch (error) {
            console.error(error);
            alert('Error updating author');
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div>
                <label>Bio:</label>
                <input type="text" name="bio" value={formData.bio} onChange={handleChange} />
            </div>
            <div>
                <label>Date of Birth:</label>
                <input type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} />
            </div>
            <button type="submit">Update Author</button>
        </form>
    );
};

export default UpdateAuthor;