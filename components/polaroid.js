import Image from 'next/image';

function Polaroid({imageURL, width, height, caption}) {
    return (
        <div className='image'>
            <Image
                src={imageURL}
                width={width}
                height={height}
                alt={caption}
            />

            <p>
                {caption}
            </p>
        </div>
    )

}


export default Polaroid;