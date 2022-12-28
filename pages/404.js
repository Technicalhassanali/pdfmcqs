import Link from "next/link";
import { useRouter } from 'next/router'

const ErrorPage = () => {
    const router = useRouter()
    const handleClick = (e) => {
        e.preventDefault()
        router.push("/")
      }

    return (
        <>
        <h1>404 Page...</h1>
        <Link href="/" onClick={handleClick}><button>Back To Home    </button></Link>
        </>
    );
}

export default ErrorPage;