import './Button.scss';

export default function Button({ text }) {
    return (
        <section>
            <div>
                <div className="button">
                    <h5>
                        {text}
                    </h5>
                </div>
            </div>
        </section>
    );
}