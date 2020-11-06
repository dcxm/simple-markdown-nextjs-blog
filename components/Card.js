export default function Card({ style, children, badge, badgeText }) {
    return (
        <div className={`card main-card`} style={{...style}}>
            <div className="card-thumbnail" style={{ backgroundImage: "url('./try.jpg')" }}>
                {badge && <div className="card-badge">
                    {badgeText}
                </div>}
            </div>
            <div className="card-content">
                {children}
            </div>
        </div>
    )
}