
export default function Youtube({ url }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px auto' }}>
            <iframe
                width="100%"
                height="200"
                src={url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{width: '100%',
                    aspectRatio: '16 / 9'}}
            ></iframe>
        </div>
    );
}

