import React from 'react';
import { posts } from '../../data/posts';
import { BlogCard } from './BlogCard';

export const BlogList = () => {

    /* https://stackoverflow.com/questions/59959483/warning-received-true-for-a-non-boolean-attribute-in-my-react-app-passing-da */

    return (
        <div className="card cardBlog mb-5">
            {
                posts.map( post => (
                    <BlogCard
                        key= { post.id }
                        { ...post }
                    />
                ))      
            }
        </div>
    );
}
