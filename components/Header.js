import Head from "next/head";

function Header() {
    return (
        <Head>
            <title>NextJS Blog</title>
            <meta name="description" content="Hassan Ali" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" />
        </Head>
    )
}

export default Header;