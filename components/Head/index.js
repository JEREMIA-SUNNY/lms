import Head from 'next/head'

export default function HeadTag(props) {
    const { title = 'Default | Main page', description = 'Generated by create next app' } = props
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
    )
}
