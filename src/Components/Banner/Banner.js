import './banner.css';

/**
 * The banner of the app
 */
export default function Banner() {
    return (
        <div id='banner'>
            <img src={process.env.PUBLIC_URL + '/logo-cropped.png'} height='200px' className='me-4' alt='' />
            <h1>TypeX</h1>
        </div>
    )
}