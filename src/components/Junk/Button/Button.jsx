import './Button.scss';

export default function Button({ text }) {
    return (
        <section>
            <div>
                <div className="button">
                        {text}
                </div>
            </div>
        </section>
    );
}