export default function Card({ style, children, badge, badgeText, image }) {
    return (
        <div className="featured-card" style={{...style}}>
            <div className="featured-card-thumbnail" style={{ backgroundImage: `url('${image}')` }}>
                {badge && <div className="featured-card-badge">
                    {badgeText}
                </div>}
            </div>
            <div className="featured-card-content">
                {children}
            </div>
        </div>
    )
}