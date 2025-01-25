import React from "react";
import { useNavigate } from "react-router-dom";

export const Service = () => {

    return (
        <>
            <section>
                <main>
                    <div className="section-coming-soon">
                        <div className="container grid grid-two-cols">
                            <div className="coming-soon-image">
                                <img
                                    src="/images/under-construction.png"
                                    alt="Under Construction"
                                    width="500"
                                    height="500"
                                />
                            </div>

                            <div className="coming-soon-message">
                                <h1 className="main-heading mb-3">Service Coming Soon</h1>
                                <p className="info-text">
                                    Our team is working hard to bring you this feature. Stay tuned!
                                </p>
                                <p className="info-text">
                                    In the meantime, feel free to explore other services.
                                </p>
                              
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
};
