import Link from "next/link";
import Image from "next/image";

const About = (props) => {
    return (
        <>
            <h1>About Page...</h1>
            <Image
                src="/images/posts/img1.jpg"
                alt="text..."
                width={500}
                height={500}
            />
        </>
    );
}

export default About;