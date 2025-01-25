// import '../App.css'
export const Service = () => {


    return (
        <section className="section-services">
            <div className="container">
                <h1>Our Services</h1>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "20px",
                    backgroundColor: "#f0f8ff", // Light blue background
                    border: "2px solid #00aaff", // Border with accent color
                    borderRadius: "10px", // Rounded corners
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
                    color: "#333", // Dark gray text
                    fontFamily: "'Arial', sans-serif", // Font family
                    fontSize: "18px", // Font size
                    margin: "20px auto", // Center the message on the page
                    maxWidth: "600px", // Limit the width
                    marginBottom: "150px"
                }}
            >
                <h2>
                    🚀 Exciting Updates Coming Soon! <br /> Our dedicated team is working hard
                    to bring you an amazing services section. Stay tuned!
                </h2>
            </div>

        </section>
    );
};
