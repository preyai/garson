export default function PartnersTiles(props) {
    const { partners } = props;
    return (
        <div className="partners">
            {partners.slice(0, 4).map((item) => (
                <div className="partner" key={item._id}>
                    <img src={item.image} alt="" />
                </div>
            ))}
        </div>
    )
}