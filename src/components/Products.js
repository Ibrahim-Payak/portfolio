import React from "react";
import data from "../data/data.json";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../styles/Products.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Products = () => {
  const productsPerPage = 4; // Number of products to display per page

  return (
    <section className="pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h3 className="mb-3">Our Products</h3>
          </div>
          <div className="col-6 text-right">
            <a
              className="btn btn-primary mb-3 mr-1"
              href="#carouselExampleIndicators2"
              role="button"
              data-slide="prev"
            >
              <FaArrowLeft />
            </a>
            <a
              className="btn btn-primary mb-3 "
              href="#carouselExampleIndicators2"
              role="button"
              data-slide="next"
            >
              <FaArrowRight />
            </a>
          </div>
          <div className="col-12">
            <div
              id="carouselExampleIndicators2"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                {data.products
                  .reduce((pages, product, index) => {
                    if (index % productsPerPage === 0) {
                      const page = data.products.slice(
                        index,
                        index + productsPerPage
                      );
                      pages.push(page);
                    }
                    return pages;
                  }, [])
                  .map((page, pageIndex) => (
                    <div
                      className={`carousel-item ${
                        pageIndex === 0 ? "active" : ""
                      }`}
                      key={pageIndex}
                    >
                      <div className="row">
                        {page.map((product, productIndex) => (
                          <div className="col-md-3 mb-3" key={productIndex}>
                            <Link
                              to={`/product/${product.id}`}
                              className="product-link"
                            >
                              <div className="card product-card">
                                <img
                                  className="img-fluid"
                                  alt="100%x280"
                                  src={product.img}
                                />
                                <div className="card-body">
                                  <h6 className="card-title">{product.name}</h6>
                                </div>
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
