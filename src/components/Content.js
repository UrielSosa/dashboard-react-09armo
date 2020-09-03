import React from 'react';
import Card from './content/Card';

function Content(params) {
    return (
        <div className="row">
            <Card 
                textHeader= 'Last product in Data Dase'
            >
                <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "25rem" }} src="assets/images/product_dummy.svg" alt="dummy" />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
                    <a target="_blank" rel="nofollow" href="/">View product detail</a>
            </Card>
            <Card
                textHeader='Categories in Data Base'
            >
                <div className="row">
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-info text-white shadow">
                            <div className="card-body">
                                Category 01
												</div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-info text-white shadow">
                            <div className="card-body">
                                Category 02
												</div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-info text-white shadow">
                            <div className="card-body">
                                Category 03
												</div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-info text-white shadow">
                            <div className="card-body">
                                Category 04
												</div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-info text-white shadow">
                            <div className="card-body">
                                Category 05
												</div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-info text-white shadow">
                            <div className="card-body">
                                Category 06
												</div>
                        </div>
                    </div>
                </div>
            </Card>

        </div>
    )
}

export default Content;