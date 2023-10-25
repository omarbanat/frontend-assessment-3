const AllBlogs = ({ title, category, body, publisher }) => {
    return (
        <div className="blog-list">
            <div className="Blog-content">
                <h3>{title}</h3>
                <h4>{category}</h4>
                <p>{body}</p>
                <h4>{publisher}</h4>
            </div>
        </div>
    );
};

export default AllBlogs;