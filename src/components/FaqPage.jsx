import React from 'react'
import Navbar from './Navbar'

const FaqPage = () => {
    return (
        <div>
            <Navbar />
            <div className="container">


            <div class="card">
  <div class="card-body">
  <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    </div>
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            What does the Libby app do?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>What does the Libby app do?</strong> <br />With Libby, you can borrow free ebooks, digital audiobooks, and magazines from your library. All you need is a library card. When you open Libby for the first time, you'll search for your library. Then, you can explore the collection and borrow titles or place holds instantly.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Can I use Libby without a library card?

                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>Can I use Libby without a library card?</strong> <br />Yes, you'll need a library card for each library you want to borrow from. You can add multiple libraries to Libby, and you can even add multiple cards for each library. Each library has their own guidelines for getting a card.


                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Is Libby a safe app?

                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>Is Libby a safe app?
                                            </strong> <br />
                                            As for whether the Libby app is safe for kids, it is generally considered a safe and appropriate platform for children, as long as it is used with appropriate supervision and parental controls.
                                        </div>
                                    </div>
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

export default FaqPage
