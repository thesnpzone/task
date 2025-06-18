import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const MainPage = ({ layout }) => {
  const [posts, setPosts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 6;

  useEffect(() => {
    axios

      .get("https://jsonplaceholder.typicode.com/posts")

      .then((res) => setPosts(res.data))

      .catch((err) => console.log(err));
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;

  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handleDelete = (id) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <div className="row">
        {currentPosts.map((post) => (
          <div
            className={`${
              layout === "vertical" ? "col-md-4 mb-4" : "col-md-12 mb-4"
            }`}
            key={post.id}
          >
            <div className="card p-3">
              <IconButton
                aria-label="delete"
                onClick={() => handleDelete(post.id)}
                sx={{ position: "absolute", top: 5, right: 5 }}
              >
                <CloseIcon />
              </IconButton>
              <div
                className={`d-flex ${
                  layout === "vertical"
                    ? "flex-column text-center"
                    : "align-items-center"
                }`}
              >
                <img
                  src={`https://i.pravatar.cc/150?img=${post.id}`}
                  className="img-fluid mr-3"
                  alt=""
                />
                <div>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                  <p style={{ color: "gray" }}>Mon, 21 Dec 2020 14:51 GMT</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Box display="flex" justifyContent="center" mt={4}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          shape="rounded"
        />
      </Box>
    </>
  );
};

export default MainPage;
