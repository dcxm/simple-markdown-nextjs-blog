export default function Card({ style, children, badge, badgeText, image }) {
    return (
        <div className={`card main-card`} style={{...style}}>
            <div className="card-thumbnail" style={{ backgroundImage: `url('${image}')` }}>
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