import Link from 'next/link';
// import '../css/footer.css'

export default function Footer() {
    return <>
        <div className='footer-wrap'>
            <Link href={'/record'}>
                <button className='footer-btn sub-color font-color font-icon'>description</button>
            </Link>
            <Link href={'/'}>
                <button className='footer-btn sub-color font-color font-icon'>home</button>
            </Link>
            <Link href={'/setting'}>
                <button className='footer-btn sub-color font-color font-icon'>settings</button>
            </Link>
        </div>
        <style jsx>{`
            .footer-wrap{
                position: fixed;
                bottom: 0px;
                width: 100vw;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                height: 60px;
                box-shadow: 0px -6px 10px 1px #0000002b;
            }

            .footer-btn{
                border: none;
                width: 100%;
                height: 100%;
                font-size: 1.8em;
                font-weight: 500;
                border-right: 1.5px solid #ffffff66;
                border-left: 1.5px solid #ffffff66;
            }
        `}</style>
    </>
}