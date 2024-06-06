import React from 'react'
import Navbar from './Navbar'

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <div className="container">

                <div class="card">
                    <div class="card-body">

                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div id="carouselExample" class="carousel slide">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="https://ixd.prattsi.org/wp-content/uploads/2023/02/Libby-1024x384-1.png" class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://img.freepik.com/free-photo/abundant-collection-antique-books-wooden-shelves-generated-by-ai_188544-29660.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1717632000&semt=sph" class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://www.theasianschool.net/blog/wp-content/uploads/2023/01/Why-School-Library-Is-Important.jpg" class="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                            <br />
                            <div className="row g-3">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <div class="card" >
                                        <div class="card-body">
                                            <h5 class="card-title">Read with Libby
                                            </h5>
                                            <h6 class="card-subtitle mb-2 text-body-secondary"></h6>
                                            <p class="card-text">
                                                Borrow ebooks, audiobooks, magazines, and more from your local library for free! Libby is the newer library reading app by OverDrive, loved by millions of readers worldwide!</p>

                                        </div>
                                    </div>
                                </div>

                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <div class="card">
                                        <img src="https://www.jclibrary.org/wp-content/uploads/2023/04/2023-04-25-10_50_56-Libby-B2C-Sheet-V2.png" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">“Books are a uniquely
                                                portable magic.”</h5>
                                            <p class="card-text"></p>
                                        </div>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">Libby mobile app</li>
                                            <li class="list-group-item">Reader's companion</li>

                                        </ul>
                                        <div class="card-body">
                                        </div>
                                    </div>
                                </div>





                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <div class="card">
                                        <div class="card-header">
                                            Libby.
                                        </div>
                                        <div class="card-body">
                                            <blockquote class="blockquote mb-0">
                                                <p>“If you don’t like to read, you haven’t found the right book.” </p>
                                                <footer class="blockquote-footer"> J.K. Rowling<cite title="Source Title">Source Title</cite></footer>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default HomePage
