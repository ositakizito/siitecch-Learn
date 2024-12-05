import Footer from "../components/footer";
import Header from "../components/header";

export default function Support(){

    return(
        <>
        <Header/>
        <section className="support">
            <div className="support-head">
                Help Our Charity Do More
            </div>
            <div className="support-body">
                <p>Siitecch is a highly efficient education Charity</p>
                <p>When you donate to Siitecch, you help people learn new skills and provide for their families.</p>
                <p>You also help us create new resources for you to use to expand your own technology skills.  </p>
            </div>
            <div className="payday">
                <button className="btn">FlutterWave</button>
                <button className="btn cl">Patreon</button>
            </div>
        </section>
        <Footer/>
        </>
    );
}