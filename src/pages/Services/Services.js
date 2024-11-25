import React, { useEffect } from "react";
import ServiceEntry from "../../components/ServiceEntry/ServiceEntry";
import "./Services.css";
import blogs from "../../Services";

function Services() {
    useEffect(() => {
        document.title = "Arcathrax - Services";
    }, []);

    return (
        <div>
            <h1>services</h1>
            <div className="infoBarService">Click on a service to expand it.</div>
            <div className="ServicesListDiv">
                {blogs.map((blog, index) => (
                    <ServiceEntry
                        key={index}
                        category={blog.category}
                        title={blog.title}
                        shortDesc={blog.shortDesc}
                        description={blog.description}
                    />
                ))}
            </div>
        </div>
    );
}

export default Services;
