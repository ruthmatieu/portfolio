import headshot from "../images/headshot.png";

const Intro = () => {
    return (
        <div className="grid place-items-center" style={{color: "#888D91"}}>
            <>
                <img src={headshot} alt="Alanna Matieu headshot" className="w-40"/>
                <p className="text-5xl font-bold my-4" style={{color: "#6687CC"}}>Alanna Matieu</p>
                <p className="text-xl font-semibold mb-2"><span className="wave">👋🏾</span>{" "}<span style={{color: "#235588"}}>Hi.</span>{" "}<span style={{color: "#6687CC"}}>Hello.</span>{" "}<span style={{color: "#158CE1"}}>Bonjour.</span></p>
                <p className="font-normal text-center">I focus on crafting elegant solutions through code,<br/>innovation, and experience.</p>
            </>
        </div>
    )
}

export default Intro;