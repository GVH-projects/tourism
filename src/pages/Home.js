import {Link} from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="container col-xxl-8 px-4 py-5 mb-4">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="/assets/GVH-removebg-preview.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3" style={{ paddingRight: '20px' }}>ABOUT GVH PULSE
                            COMMITTEE</h1>
                        <p className="lead" style={{ textAlign: 'justify' }}>Quickly design and customize responsive
                            mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit,
                            featuring Sass variables and mixins, responsive grid system, extensive prebuilt components,
                            and powerful JavaScript plugins.</p>
                    </div>
                    <div className="col-10 col-sm-8 col-lg-6">
                        <h3 className="display-5 fw-bold lh-1 mb-3" style={{ textAlign: 'justify' }}>OUR STORY</h3>
                        <p className="lead" style={{ textAlign: 'justify', minHeight: '80px' }}>"Give a man a fish, to feed
                            him for a day. Teach a man to fish,
                            and feed him for a lifetime” – Lao Tzu.

                            We strongly believe in bringing funds to places in need, not to be given to the people, but
                            to be used to fund actual projects that will benefit the local community.</p>
                    </div>
                    <div className="col-lg-6">
                        <h3 className="display-5 fw-bold lh-1 mb-3" style={{ textAlign: 'justify' }}>MESSAGE FROM OUR
                            FOUNDER</h3>
                        <p className="lead" style={{ textAlign: 'justify', minHeight: '80px' }}>My name is Linus Lin and I am
                            from Singapore. My intrepid journey started in August 2013 when I first sponsored 2 teachers
                            in Myanmar to provide free English education for 50 needy children in a local orphanage.
                            Venturing deeper into the rural areas of Myanmar has made me realize how I could contribute
                            to those in need.

                            In an effort to touch the lives of a greater pool of people, I recruited Joseph, one of the
                            English teachers I sponsored in 2013. Together, we coined the name ‘Global Village for Hope’
                            with the mission of bringing hope to more people in the rural part of the world. It is often
                            said that the heart to serve transcends borders. Joseph now runs daily operations in Myanmar
                            while I operate mainly in Singapore.</p>
                    </div>
                </div>
            </div>
            {/*Hero*/}
            <div className="p-5 text-white bg-image rounded-3"
                 style={{ backgroundImage: "url('/assets/Mutis_landskap.jpg')", backgroundSize: 'cover', height: '100%' }}>
                <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', height: '600px' }}>
                    <div className="d-flex align-items-start justify-content-start h-100 flex-column">
                        <div className="text-center w-100">
                            <h1 className="mb-3">Tourism in East Nusa Tenggara</h1>
                        </div>
                        <h4 className="mb-3" style={{ textAlign: 'justify', padding: '20px' }}>
                            Tourism in East Nusa Tenggara (NTT) Province has large and varied potential, including
                            natural, cultural and special interest tourism. This potential allows NTT to absorb
                            investment, build roads, airports, ports, tourist areas, telecommunications, etc., which
                            will accelerate economic development in Indonesia.
                            NTT Tourism has a total of 1,185 Potential Tourist Attractions (DTW), with 628 natural DTW,
                            431 cultural DTW, and 10.67% special interest DTW.
                            This potential allows NTT to become a tourist destination that invites domestic and foreign
                            tourists
                            NTT tourism has a positive impact on the regional economy, including increasing regional
                            income, employment and development of tourism-related businesses
                            However, to support tourism development in NTT, there needs to be optimization of several
                            tourism supporting sectors as well as contributions from various parties
                            Tourism in NTT has built a recommendation system to help tourists choose tourist attractions
                            that suit their wishes
                            This system will help tourists to choose tourist attractions that suit their wishes, which
                            will give tourists a sense of satisfaction and give a good impression of the tourist
                            attraction.
                        </h4>
                    </div>
                </div>
            </div>
            <div className="container">
                <h2 className="text-center">Tourism Destination</h2>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card">
                            <img src="/assets/Pantai Batu Burung.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h3 className="card-text">Relaxing Turism</h3>
                                </div>
                                <Link className="btn btn-primary" to='/santai'>More Details</Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src="/assets/Kelimutu 1.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h3 className="card-text">Adventure Turism</h3>
                                </div>
                                <Link className="btn btn-primary" to='/petualangan'>More Details</Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src="/assets/Praijing.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h3 className="card-text">Bussiness Turism</h3>
                                </div>
                                <Link className="btn btn-primary" to='/bisnis'>More Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;