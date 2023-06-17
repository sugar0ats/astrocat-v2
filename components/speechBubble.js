

function SpeechBubble({text}) {
    return (
        <div className="speechBubble">

            {text}
            <div className='speechArrow'>
                ▼
            </div>

        </div>
    );
}

export default SpeechBubble;